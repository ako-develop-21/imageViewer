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
const styles = [
    { left: "10px", top: "300px", "border-color": "#A34DE5" },
    { left: "10px", top: "360px", "border-color": "#A34DE5" },
    { left: "10px", top: "420px", "border-color": "#A34DE5" },
    { left: "10px", top: "480px", "border-color": "#A34DE5" },
    { left: "10px", top: "540px", "border-color": "#A34DE5" },
    { left: "1220px", top: "300px", "border-color": "#E5894D" },
    { left: "1220px", top: "360px", "border-color": "#E5894D" },
    { left: "1220px", top: "420px", "border-color": "#E5894D" },
    { left: "1220px", top: "480px", "border-color": "#E5894D" },
    { left: "1220px", top: "540px", "border-color": "#E5894D" },
];

const iconStyles = computed(() =>
    props.selectedIcons.map((_, index) => {
        const style = styles[index] || { left: "0px", top: "0px" };
        return { ...style };
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
    border: 2px solid;
    border-radius: 50%;
    box-sizing: border-box;
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
