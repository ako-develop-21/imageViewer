<template>
    <div class="container">
        <ImageGrid></ImageGrid>
    </div>
</template>

<script setup>
import ImageGrid from "./components/ImageGrid.vue";
</script>

<style scoped>
.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 1280px;
    height: 720px;
}
</style>
