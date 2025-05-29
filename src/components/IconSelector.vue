<template>
    <div class="selector">
        <img
            v-for="(icon, index) in icons"
            :key="index"
            :src="icon"
            class="icon"
            @click="$emit('select', icon)"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// import.meta.globで画像パスを一括取得
const images = import.meta.glob("/public/images/icon/*.png", {
    eager: true,
    as: "url",
});

const icons = ref<string[]>([]);

// imagesからURLを取得して配列化
icons.value = Object.values(images);
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
    cursor: pointer;
}
</style>
