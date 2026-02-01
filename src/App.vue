<template>
    <router-view />
</template>

<script setup lang="ts">
// App.vue is now just a router wrapper
// Individual pages are in src/template/
</script>

<style>
/* Global styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background: transparent;
    color: white;
    font-family: sans-serif;
}

#app {
    width: 100vw;
    height: 100vh;
}
</style>
