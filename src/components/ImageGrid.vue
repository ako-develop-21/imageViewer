<template>
    <div class="grid-container">
        <div
            v-for="(image, index) in images"
            :key="index"
            class="image-item"
            :class="{ active: isActive[index] }"
            @click="toggleBrightness(index)"
        >
            <img :src="image" alt="Grid Image" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 画像パスを配列で初期化（1〜20の画像ファイル）
const images = ref<string[]>(
    Array.from({ length: 20 }, (_, i) => `/images/icon/${i + 1}.png`)
);

// 明度状態管理用の配列。初期値は全部false（=50%明度）
const isActive = ref<boolean[]>(Array(20).fill(false));

// クリックで状態をトグル
function toggleBrightness(index: number) {
    isActive.value[index] = !isActive.value[index];
}
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(10, 192px);
    grid-template-rows: repeat(2, 540px);
    gap: 4px;
}
.image-item img {
    width: 192px;
    height: 540px;
    object-fit: cover;
    filter: brightness(50%);
    transition: filter 0.3s;
    cursor: pointer;
}
.image-item.active img {
    filter: brightness(100%);
}
</style>
