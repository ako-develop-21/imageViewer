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
                            selected:
                                selectedSlot?.teamIdx === tIdx &&
                                selectedSlot?.slotIdx === slotIdx - 1,
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

/** カード画像 */
const cardAssets = import.meta.glob("@/assets/images/draft/*.png", {
    eager: true,
    query: "?url",
    import: "default",
});

/** プレイヤー画像 */
const playerPool = computed(() => {
    const pool: Record<string, string> = {};
    Object.entries(cardAssets).forEach(([path, url]) => {
        const id = path.split("/").pop()?.replace(".png", "") || "";
        pool[id] = url as string;
    });
    return pool;
});

/** プレイヤーIDリスト */
const sortedPlayerIds = computed(() => {
    return Object.keys(playerPool.value).sort((a, b) => a.localeCompare(b));
});

/** チーム構造 */
interface Team {
    id: string;
    members: (string | null)[]; // 4 slots
}

/** チーム数 */
type TeamCount = 6 | 8;

/** 内部更新フラグ */
const isInternalUpdate = ref(false);
/** プール表示/非表示 */
const isPoolCollapsed = ref(false);
/** チーム数 */
const teamCount = ref<TeamCount>(6);
/** チーム */
const teams = ref<Team[]>([]);
/** 選択プレイヤー */
const selectedPlayerId = ref<string | null>(null);
/** 選択スロット */
const selectedSlot = ref<{ teamIdx: number; slotIdx: number } | null>(null);
/** Firebase - Fixed path for shared access (no room ID) */
const draftRef = dbRef(db, `draft-rooms/shared`);

/** 初期化 */
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

/** Firebase同期 */
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

/** 重複数 */
const duplicateCounts = computed(() => {
    const counts: Record<string, number> = {};
    teams.value?.forEach((team) => {
        team.members?.forEach((pId) => {
            if (pId) counts[pId] = (counts[pId] || 0) + 1;
        });
    });
    return counts;
});

/**
 * プレイヤーが選ばれているか
 * @param playerId プレイヤーID
 */
const isDrafted = (playerId: string) => {
    return (
        teams.value?.some(
            (team) => team.members && team.members.includes(playerId),
        ) || false
    );
};

/**
 * プレイヤー選択時
 * @param playerId 選択したプレイヤーID
 */
const selectPlayer = (playerId: string) => {
    if (selectedSlot.value) {
        const { teamIdx, slotIdx } = selectedSlot.value;
        if (!teams.value[teamIdx].members) {
            teams.value[teamIdx].members = [null, null, null, null];
        }
        teams.value[teamIdx].members[slotIdx] = playerId;
        selectedSlot.value = null;
        selectedPlayerId.value = null;
    } else {
        selectedPlayerId.value =
            selectedPlayerId.value === playerId ? null : playerId;
        selectedSlot.value = null;
    }
};

/**
 * プレイヤー配置時
 * @param teamIdx チーム番号
 * @param slotIdx スロット番号
 */
const assignPlayerToSlot = (teamIdx: number, slotIdx: number) => {
    if (!teams.value[teamIdx]) return;

    if (selectedPlayerId.value) {
        if (!teams.value[teamIdx].members) {
            teams.value[teamIdx].members = [null, null, null, null];
        }
        teams.value[teamIdx].members[slotIdx] = selectedPlayerId.value;
        selectedPlayerId.value = null;
        selectedSlot.value = null;
    } else {
        if (
            teams.value[teamIdx].members &&
            teams.value[teamIdx].members[slotIdx]
        ) {
            teams.value[teamIdx].members[slotIdx] = null;
            selectedSlot.value = null;
        } else if (
            selectedSlot.value?.teamIdx === teamIdx &&
            selectedSlot.value?.slotIdx === slotIdx
        ) {
            selectedSlot.value = null;
        } else {
            selectedSlot.value = { teamIdx, slotIdx };
            selectedPlayerId.value = null;
        }
    }
};

/**
 * スロットからプレイヤーを削除時
 * @param teamIdx チーム番号
 * @param slotIdx スロット番号
 */
const removePlayerFromSlot = (teamIdx: number, slotIdx: number) => {
    if (!teams.value[teamIdx]) return;
    if (!teams.value[teamIdx].members) {
        teams.value[teamIdx].members = [null, null, null, null];
        return;
    }
    teams.value[teamIdx].members[slotIdx] = null;
};

/** チーム数変更時 */
const toggleTeamCount = () => {
    const newCount = teamCount.value === 6 ? 8 : 6;
    teamCount.value = newCount;
    teams.value = initTeams(newCount);
};

/** リセット時 */
const resetDraft = () => {
    teams.value = initTeams(teamCount.value);
};

/** プール表示/非表示切り替え時 */
const togglePool = () => {
    isPoolCollapsed.value = !isPoolCollapsed.value;
};
</script>

<style scoped lang="scss">
.draft-canvas {
    width: 1920px;
    height: 1080px;
    position: relative;
    overflow: hidden;
    color: white;
    font-family: sans-serif;
    margin: 0 auto;
}

.header {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.controls {
    display: flex;
    gap: 10px;

    button {
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
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

.teams-container {
    position: absolute;
    top: 60px;
    left: 15px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;

    &.teams-6 {
        flex-wrap: nowrap;
        gap: 20px;
        height: 660px;
    }

    &.teams-8 {
        flex-wrap: nowrap;
        gap: 10px;
        height: 510px;

        .team-block {
            .leader-frame {
                width: 165px;
                height: 165px;
            }

            .draft-slot {
                width: 150px;
                height: 78px;
            }
        }
    }
}

.team-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.leader-frame {
    width: 135px;
    height: 135px;
    border: 3px dashed rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 30px;
    box-sizing: content-box;

    .leader-label {
        font-size: 15px;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.3);
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }
}

.draft-slots {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.draft-slot {
    width: 195px;
    height: 105px;
    background: rgba(0, 0, 0, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.15);
    border-radius: 9px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-duplicate {
        border-color: #ff4757;
        border-width: 4px;
        box-shadow: 0 0 18px rgba(255, 71, 87, 0.5);
        animation: pulse-red 2s infinite;
    }

    &.selected {
        border-color: #a34de5;
        box-shadow: 0 0 22px rgba(163, 77, 229, 0.6);
        z-index: 10;
    }

    .player-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }

    .empty-slot {
        .plus {
            font-size: 36px;
            color: rgba(255, 255, 255, 0.1);
            font-weight: 900;
        }
    }

    .duplicate-badge {
        position: absolute;
        top: 6px;
        right: 6px;
        background: #ff4757;
        color: white;
        padding: 3px 9px;
        border-radius: 12px;
        font-size: 15px;
        font-weight: 900;
        box-shadow: 0 3px 9px rgba(0, 0, 0, 0.4);
    }
}

@keyframes pulse-red {
    0%,
    100% {
        box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.5);
    }
    50% {
        box-shadow: 0 0 0 12px rgba(255, 71, 87, 0);
    }
}

.draft-pool {
    position: absolute;
    left: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    padding: 12px;
    backdrop-filter: blur(15px);
    overflow: hidden;
    transition: all 0.3s ease;

    &.teams-6 {
        bottom: 15px;
        height: 300px;

        .pool-scroll {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }

    &.teams-8 {
        bottom: 15px;
        height: 420px;

        .pool-scroll {
            grid-template-columns: repeat(16, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }
    }

    &.collapsed {
        height: 60px;
    }
}

.collapse-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: white;
    font-size: 20px;
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
    gap: 6px;
    overflow: hidden;
}

.pool-player {
    border-radius: 9px;
    overflow: hidden;
    border: 3px solid transparent;
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
        box-shadow: 0 0 22px rgba(163, 77, 229, 0.6);
    }

    &.drafted {
        opacity: 0.4;
        filter: grayscale(0.6);
    }
}
</style>
