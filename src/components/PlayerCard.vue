<script setup lang="ts">
import type { Player } from "../types";

defineProps<{
    player: Player;
    isSelected: boolean;
}>();

defineEmits<{
    (e: "click", player: Player): void;
}>();
</script>

<template>
    <div
        class="player-card"
        :class="{
            'is-picked': player.pickedBy.length > 0,
            'is-contested': player.pickedBy.length > 1,
            'is-selected': isSelected,
        }"
        @click="$emit('click', player)"
    >
        <div class="image-container">
            <img :src="player.image" :alt="player.name" class="player-image" />
            <div v-if="player.pickedBy.length > 1" class="contest-badge">
                ×{{ player.pickedBy.length }}
            </div>
        </div>
        <div class="player-name">{{ player.name }}</div>
    </div>
</template>

<style scoped>
.player-card {
    width: 80px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid transparent;
    border-radius: 4px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
}

.player-card:hover {
    background: rgba(255, 255, 255, 0.2);
}

.player-card.is-selected {
    border-color: #ffd700;
    background: rgba(255, 215, 0, 0.1);
}

.player-card.is-picked {
    opacity: 0.35;
    filter: grayscale(0.5);
}

.player-card.is-contested {
    border: 4px solid #ff4444;
    opacity: 1;
    filter: none;
}

.image-container {
    width: 80px;
    height: 80px;
    position: relative;
    background: #333;
    border-radius: 4px;
    overflow: hidden;
}

.player-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contest-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff4444;
    color: white;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.player-name {
    width: 100%;
    text-align: center;
    font-size: 11px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}
</style>
