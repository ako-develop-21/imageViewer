<template>
    <div class="grid-container">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="grid-item"
            :style="{
                backgroundImage: `url(${image})`,
                filter: brightness[index]
                    ? 'brightness(100%)'
                    : 'brightness(50%)',
            }"
            @click="toggleBrightness(index)"
        ></div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

const images = ref([]);
const brightness = ref([]);

// onBeforeMountのタイミングで画像パスをセット
onBeforeMount(() => {
    const loadedImages = [];
    for (let i = 1; i <= 20; i++) {
        const fileName = i.toString().padStart(2, "0") + ".png";
        loadedImages.push(`/images/icon/${fileName}`);
    }
    images.value = loadedImages;
    brightness.value = Array(loadedImages.length).fill(false);
});

function toggleBrightness(index) {
    brightness.value[index] = !brightness.value[index];
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(10, 192px);
    grid-template-rows: repeat(2, 540px);
    gap: 2px;
    width: fit-content;
}

.grid-item {
    width: 192px;
    height: 540px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    transition: filter 0.3s;
}
</style>
