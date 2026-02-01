<script setup lang="ts">
import type { Player, Team } from "../types";
import { computed } from "vue";

const props = defineProps<{
    team: Team;
    allPlayers: Player[];
    isSelectedTeam: boolean;
}>();

defineEmits<{
    (e: "click", team: Team): void;
}>();

const teamPlayers = computed(() => {
    return props.team.members
        .map((id) => props.allPlayers.find((p) => p.id === id))
        .filter((p) => !!p) as Player[];
});

const MAX_MEMBERS = 4;
</script>

<template>
    <div
        class="team-card"
        :class="{ 'is-selected': isSelectedTeam }"
        @click="$emit('click', team)"
    >
        <div class="leader-slot">
            <div class="slot-label">Leader</div>
            <div class="leader-frame"></div>
        </div>

        <div class="members-area">
            <div v-for="i in MAX_MEMBERS" :key="i" class="member-slot">
                <template v-if="teamPlayers[i - 1]">
                    <img :src="teamPlayers[i - 1].image" class="member-image" />
                    <span class="member-name">{{
                        teamPlayers[i - 1].name
                    }}</span>
                </template>
                <template v-else>
                    <div class="empty-slot">Empty</div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.team-card {
    width: 200px;
    height: 320px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
}

.team-card:hover {
    background: rgba(255, 255, 255, 0.1);
}

.team-card.is-selected {
    border: 2px solid #ffd700;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.leader-slot {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.slot-label {
    font-size: 10px;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.leader-frame {
    width: 120px;
    height: 120px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

.members-area {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-grow: 1;
}

.member-slot {
    width: 160px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 2px 8px;
    gap: 8px;
    background: rgba(0, 0, 0, 0.2);
    margin: 0 auto;
}

.member-image {
    width: 32px;
    height: 32px;
    border-radius: 2px;
    object-fit: cover;
}

.member-name {
    font-size: 12px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.empty-slot {
    font-size: 11px;
    color: #555;
    width: 100%;
    text-align: center;
}
</style>
