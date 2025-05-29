<template>
    <div>
        <img
            v-for="(icon, index) in selectedIcons"
            :key="index"
            :src="icon"
            class="placed-icon"
            :style="iconStyles[index]"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

// propsとして選択されたアイコンのURL配列を受け取る
const props = defineProps<{ selectedIcons: string[] }>();

// アイコンの最大10枚分の配置座標を定義
const positions = [
    { left: "10px", top: "300px" },
    { left: "10px", top: "360px" },
    { left: "10px", top: "420px" },
    { left: "10px", top: "480px" },
    { left: "10px", top: "540px" },
    { right: "10px", top: "300px" },
    { right: "10px", top: "360px" },
    { right: "10px", top: "420px" },
    { right: "10px", top: "480px" },
    { right: "10px", top: "540px" },
];

// computedで各アイコンに適用するスタイルを生成
const iconStyles = computed(() =>
    props.selectedIcons.map((_, index) => {
        // 10枚を超えた場合の安全処理
        const pos = positions[index] || { left: "0px", top: "0px" };
        return {
            ...pos,
        };
    })
);
</script>

<style scoped lang="scss">
.placed-icon {
    position: absolute;
    width: 50px;
    height: 50px;
}
</style>
