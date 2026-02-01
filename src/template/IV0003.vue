<template>
    <div class="draft-canvas">
        <!-- Header: Controls -->
        <div class="header">
            <div class="controls">
                <button @click="toggleTeamCount" class="toggle-btn">
                    Teams: {{ teamCount }}
                </button>
                <button class="reset-btn" @click="resetDraft">Reset</button>
            </div>
        </div>

        <!-- Teams Area -->
        <div class="teams-container" :class="`teams-${teamCount}`">
            <div
                v-for="(team, tIdx) in teams"
                :key="team.id"
                class="team-block"
            >
                <!-- Leader Frame (OBS overlay placeholder) -->
                <div class="leader-frame">
                    <span class="leader-label">Leader {{ tIdx + 1 }}</span>
                </div>

                <!-- Draft Slots (4 members) -->
                <div class="draft-slots">
                    <div
                        v-for="slotIdx in 4"
                        :key="slotIdx"
                        class="draft-slot"
                        :class="{
                            'has-player':
                                team.members && team.members[slotIdx - 1],
                            'is-duplicate':
                                team.members &&
                                team.members[slotIdx - 1] &&
                                duplicateCounts[
                                    team.members[slotIdx - 1] as string
                                ] > 1,
                        }"
                        @click="assignPlayerToSlot(tIdx, slotIdx - 1)"
                        @contextmenu.prevent="
                            removePlayerFromSlot(tIdx, slotIdx - 1)
                        "
                    >
                        <img
                            v-if="
                                team.members &&
                                team.members[slotIdx - 1] &&
                                playerPool[team.members[slotIdx - 1] as string]
                            "
                            :src="
                                playerPool[team.members[slotIdx - 1] as string]
                            "
                            class="player-img"
                        />
                        <div v-else class="empty-slot">
                            <span class="plus">+</span>
                        </div>
                        <div
                            v-if="
                                team.members &&
                                team.members[slotIdx - 1] &&
                                duplicateCounts[
                                    team.members[slotIdx - 1] as string
                                ] > 1
                            "
                            class="duplicate-badge"
                        >
                            ×{{
                                duplicateCounts[
                                    team.members[slotIdx - 1] as string
                                ]
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Draft Pool -->
        <div
            class="draft-pool"
            :class="[`teams-${teamCount}`, { collapsed: isPoolCollapsed }]"
        >
            <button
                class="collapse-btn"
                @click="togglePool"
                title="Toggle Pool"
            >
                {{ isPoolCollapsed ? "▲" : "▼" }}
            </button>
            <div class="pool-scroll" v-show="!isPoolCollapsed">
                <div
                    v-for="playerId in sortedPlayerIds"
                    :key="playerId"
                    class="pool-player"
                    :class="{
                        selected: selectedPlayerId === playerId,
                        drafted: isDrafted(playerId),
                    }"
                    @click="selectPlayer(playerId)"
                >
                    <img :src="playerPool[playerId]" :alt="playerId" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { db } from "@/firebase";
import { ref as dbRef, onValue, set } from "firebase/database";

// Auto-load player images from assets
const cardAssets = import.meta.glob("@/assets/images/card/*.png", {
    eager: true,
    query: "?url",
    import: "default",
});

const playerPool = computed(() => {
    const pool: Record<string, string> = {};
    Object.entries(cardAssets).forEach(([path, url]) => {
        const id = path.split("/").pop()?.replace(".png", "") || "";
        pool[id] = url as string;
    });
    return pool;
});

// Sort player IDs by filename (ascending order)
const sortedPlayerIds = computed(() => {
    return Object.keys(playerPool.value).sort((a, b) => a.localeCompare(b));
});

// Team structure
interface Team {
    id: string;
    members: (string | null)[]; // 4 slots
}

type TeamCount = 6 | 8;

const isInternalUpdate = ref(false);

// Pool collapse state
const isPoolCollapsed = ref(false);

// State
const teamCount = ref<TeamCount>(6);
const teams = ref<Team[]>([]);
const selectedPlayerId = ref<string | null>(null);

// Firebase - Fixed path for shared access (no room ID)
const draftRef = dbRef(db, `draft-rooms/shared`);

const initTeams = (count: TeamCount): Team[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `t${i + 1}`,
        members: [null, null, null, null],
    }));
};

onMounted(() => {
    onValue(draftRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Only update if not from our own sync
            if (!isInternalUpdate.value) {
                isInternalUpdate.value = true;
                teamCount.value = data.teamCount || 6;
                const rawTeams = data.teams || initTeams(teamCount.value);
                // Sanitize: Ensure members exists for each team
                teams.value = rawTeams.map((t: any) => ({
                    ...t,
                    members: t.members || [null, null, null, null],
                }));
                setTimeout(() => (isInternalUpdate.value = false), 50);
            }
        } else {
            teams.value = initTeams(teamCount.value);
            syncToFirebase();
        }
    });
});

const syncToFirebase = () => {
    if (isInternalUpdate.value) return;
    isInternalUpdate.value = true;
    set(draftRef, {
        teamCount: teamCount.value,
        teams: JSON.parse(JSON.stringify(teams.value)),
    });
    setTimeout(() => (isInternalUpdate.value = false), 100);
};

watch(
    [teamCount, teams],
    () => {
        syncToFirebase();
    },
    { deep: true },
);

// Duplicate Detection
const duplicateCounts = computed(() => {
    const counts: Record<string, number> = {};
    teams.value?.forEach((team) => {
        team.members?.forEach((pId) => {
            if (pId) counts[pId] = (counts[pId] || 0) + 1;
        });
    });
    return counts;
});

const isDrafted = (playerId: string) => {
    return (
        teams.value?.some(
            (team) => team.members && team.members.includes(playerId),
        ) || false
    );
};

// Actions
const selectPlayer = (playerId: string) => {
    selectedPlayerId.value =
        selectedPlayerId.value === playerId ? null : playerId;
};

const assignPlayerToSlot = (teamIdx: number, slotIdx: number) => {
    if (!teams.value[teamIdx]) return;
    if (!selectedPlayerId.value) {
        removePlayerFromSlot(teamIdx, slotIdx);
        return;
    }
    if (!teams.value[teamIdx].members) {
        teams.value[teamIdx].members = [null, null, null, null];
    }
    teams.value[teamIdx].members[slotIdx] = selectedPlayerId.value;
    selectedPlayerId.value = null;
};

const removePlayerFromSlot = (teamIdx: number, slotIdx: number) => {
    if (!teams.value[teamIdx]) return;
    if (!teams.value[teamIdx].members) {
        teams.value[teamIdx].members = [null, null, null, null];
        return;
    }
    teams.value[teamIdx].members[slotIdx] = null;
};

const toggleTeamCount = () => {
    const newCount = teamCount.value === 6 ? 8 : 6;
    teamCount.value = newCount;
    teams.value = initTeams(newCount);
};

const resetDraft = () => {
    if (confirm("全てのドラフトをリセットしますか？")) {
        teams.value = initTeams(teamCount.value);
    }
};

const togglePool = () => {
    isPoolCollapsed.value = !isPoolCollapsed.value;
};
</script>

<style scoped lang="scss">
.draft-canvas {
    width: 1280px;
    height: 720px;
    position: relative;
    overflow: hidden;
    color: white;
    font-family: sans-serif;
    margin: 0 auto;
}

// Header
.header {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.controls {
    display: flex;
    gap: 6px;

    button {
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 6px 14px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 11px;
        font-weight: 700;
        transition: all 0.2s;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        &.active {
            background: #a34de5;
            border-color: #a34de5;
        }

        &.reset-btn {
            background: rgba(255, 71, 87, 0.2);
            border-color: rgba(255, 71, 87, 0.3);
            color: #ff4757;

            &:hover {
                background: #ff4757;
                color: white;
            }
        }
    }
}

// Teams Container
.teams-container {
    position: absolute;
    top: 40px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    padding: 5px 0;

    &.teams-6 {
        flex-wrap: nowrap;
        gap: 12px;
        height: 440px;
    }

    &.teams-8 {
        flex-wrap: nowrap;
        gap: 6px;
        height: 340px;

        .team-block {
            // Narrower for 8 teams
            .leader-frame {
                width: 110px;
                height: 110px;
            }

            .draft-slot {
                width: 100px;
                height: 52px;
            }
        }
    }
}

.team-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
}

// Leader Frame
.leader-frame {
    width: 90px;
    height: 90px;
    border: 2px dashed rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 20px;
    box-sizing: content-box;

    .leader-label {
        font-size: 10px;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.3);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
}

// Draft Slots
.draft-slots {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.draft-slot {
    width: 130px;
    height: 70px;
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-duplicate {
        border-color: #ff4757;
        border-width: 3px;
        box-shadow: 0 0 12px rgba(255, 71, 87, 0.5);
        animation: pulse-red 2s infinite;
    }

    .player-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }

    .empty-slot {
        .plus {
            font-size: 24px;
            color: rgba(255, 255, 255, 0.1);
            font-weight: 900;
        }
    }

    .duplicate-badge {
        position: absolute;
        top: 4px;
        right: 4px;
        background: #ff4757;
        color: white;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 10px;
        font-weight: 900;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
}

@keyframes pulse-red {
    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.5);
    }
    50% {
        box-shadow: 0 0 0 8px rgba(255, 71, 87, 0);
    }
}

// Draft Pool
.draft-pool {
    position: absolute;
    left: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 8px;
    backdrop-filter: blur(10px);
    overflow: hidden;
    transition: all 0.3s ease;

    &.teams-6 {
        bottom: 10px;
        height: 200px;

        .pool-scroll {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }

    &.teams-8 {
        bottom: 10px;
        height: 280px;

        .pool-scroll {
            grid-template-columns: repeat(16, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }

    &.collapsed {
        height: 40px;
    }
}

.collapse-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    z-index: 10;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.4);
    }
}

.pool-scroll {
    display: grid;
    height: 100%;
    gap: 4px;
    overflow: hidden;
}

.pool-player {
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    background: rgba(0, 0, 0, 0.3);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.selected {
        border-color: #a34de5;
        transform: scale(1.05);
        z-index: 10;
        box-shadow: 0 0 15px rgba(163, 77, 229, 0.6);
    }

    &.drafted {
        opacity: 0.4;
        filter: grayscale(0.6);
    }
}
</style>
