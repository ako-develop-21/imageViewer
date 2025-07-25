<template>
    <div class="container">
        <IconDisplay
            class="icon-display"
            v-model:selectedIcons="selectedIcons"
            @deselect="(icon) => removeIcon(icon)"
        />
        <IconSelector
            class="icon-selector"
            ref="iconSelectorRef"
            @select="addIcon"
            @deselect="removeIcon"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconSelector from "@/components/IconSelector.vue";
import IconDisplay from "@/components/IconDisplay.vue";

// 選択中アイコン配列
const selectedIcons = ref<string[]>([]);

// IconSelectorへの参照
const iconSelectorRef = ref<InstanceType<typeof IconSelector>>();

// アイコン追加
function addIcon(icon: string) {
    if (
        selectedIcons.value.length < 10 &&
        !selectedIcons.value.includes(icon)
    ) {
        selectedIcons.value.push(icon);
    }
}

// アイコン削除（IconDisplay側からの通知で呼ばれる）
function removeIcon(icon: string) {
    const index = selectedIcons.value.indexOf(icon);
    if (index !== -1) {
        selectedIcons.value.splice(index, 1);
        // IconSelector側の明度も元に戻す
        iconSelectorRef.value?.deselect(icon);
    }
}
</script>

<style scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;

    .icon-selector {
        position: absolute;
        width: 100%;
        z-index: 1;
    }

    .icon-display {
        position: absolute;
        width: 100%;
        height: 720px;
        z-index: 0;
    }
}
</style>
