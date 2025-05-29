<template>
    <div class="selector">
        <img
            v-for="(icon, index) in icons"
            :key="index"
            :src="icon"
            class="icon"
            :class="{ selected: selectedIcons.has(icon) }"
            @click="handleClick(icon)"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";

const images = import.meta.glob("/public/images/icon/*.png", {
    eager: true,
    as: "url",
});

const icons = ref<string[]>(Object.values(images));
const selectedIcons = ref<Set<string>>(new Set());
const emit = defineEmits<{
    (e: "select", value: string): void;
    (e: "deselect", value: string): void;
}>();

function handleClick(icon: string) {
    if (selectedIcons.value.has(icon)) {
        selectedIcons.value.delete(icon);
        emit("deselect", icon);
    } else {
        if (selectedIcons.value.size >= 10) return;
        selectedIcons.value.add(icon);
        emit("select", icon);
    }
}

// 親から選択解除を呼べるように
function deselect(icon: string) {
    selectedIcons.value.delete(icon);
}

defineExpose({ deselect });
</script>

<style scoped lang="scss">
.selector {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: calc((50px + 10px) * 20);
}

.icon {
    width: 50px;
    height: 50px;
    border: 2px solid #cbcbcb;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    transition: filter 0.2s ease;
}

.icon.selected {
    filter: brightness(50%);
}
</style>
