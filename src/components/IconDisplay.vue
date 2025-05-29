<template>
    <div>
        <transition-group name="fade" tag="div">
            <img
                v-for="(icon, index) in selectedIcons"
                :key="icon + index"
                :src="icon"
                class="placed-icon"
                :style="iconStyles[index]"
                @click="removeIcon(index)"
            />
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps<{ selectedIcons: string[] }>();
const emit = defineEmits<{
    (e: "update:selectedIcons", value: string[]): void;
}>();

// アイコンの最大10枚分の配置座標を定義
const positions = [
    { left: "10px", top: "300px" },
    { left: "10px", top: "360px" },
    { left: "10px", top: "420px" },
    { left: "10px", top: "480px" },
    { left: "10px", top: "540px" },
    { left: "1220px", top: "300px" },
    { left: "1220px", top: "360px" },
    { left: "1220px", top: "420px" },
    { left: "1220px", top: "480px" },
    { left: "1220px", top: "540px" },
];

const iconStyles = computed(() =>
    props.selectedIcons.map((_, index) => {
        const pos = positions[index] || { left: "0px", top: "0px" };
        return { ...pos };
    })
);

function removeIcon(index: number) {
    const newIcons = [...props.selectedIcons];
    newIcons.splice(index, 1);
    emit("update:selectedIcons", newIcons);
}
</script>

<style scoped lang="scss">
.placed-icon {
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
