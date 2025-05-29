<template>
    <div class="container">
        <IconSelector @select="addIcon" />
        <IconDisplay v-model:selectedIcons="selectedIcons" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconSelector from "@/components/IconSelector.vue";
import IconDisplay from "@/components/IconDisplay.vue";

const selectedIcons = ref<string[]>([]);

function addIcon(icon: string) {
    if (selectedIcons.value.length < 10) {
        selectedIcons.value.push(icon);
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    overflow: hidden;
}
</style>
