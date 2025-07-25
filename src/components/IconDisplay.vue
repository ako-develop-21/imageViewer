<template>
    <div class="display-area">
        <transition-group name="fade-move" tag="div" class="image-area">
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
    (e: "deselect", value: string): void;
}>();

const styles = [
    { left: "0px", top: "0px", "border-color": "#A34DE5" },
    { left: "0px", top: "70px", "border-color": "#A34DE5" },
    { left: "0px", top: "140px", "border-color": "#A34DE5" },
    { left: "0px", top: "210px", "border-color": "#A34DE5" },
    { left: "0px", top: "280px", "border-color": "#A34DE5" },
    { right: "0px", top: "0px", "border-color": "#E5894D" },
    { right: "0px", top: "70px", "border-color": "#E5894D" },
    { right: "0px", top: "140px", "border-color": "#E5894D" },
    { right: "0px", top: "210px", "border-color": "#E5894D" },
    { right: "0px", top: "280px", "border-color": "#E5894D" },
];

const iconStyles = computed(() =>
    props.selectedIcons.map((_, index) => {
        const style = styles[index] || {
            left: "0px",
            top: "0px",
            "border-color": "#000000",
        };
        return { ...style };
    })
);

function removeIcon(index: number) {
    const newIcons = [...props.selectedIcons];
    const removedIcon = newIcons.splice(index, 1)[0];
    emit("deselect", removedIcon);
}
</script>

<style scoped lang="scss">
.display-area {
    width: 100%;
    height: 100%;
    // background-image: url("/images/bg/bgSample.png");

    .image-area {
        position: absolute;
        width: 100%;
        height: 470px;
        top: 300px;
    }

    .placed-icon {
        position: absolute;
        width: 46px;
        height: 46px;
        border: 2px solid;
        border-radius: 50%;
        box-sizing: border-box;
        cursor: pointer;
        z-index: 2;
    }
}

.fade-move-enter-active,
.fade-move-leave-active {
    transition: all 0.2s ease;
}
.fade-move-enter-from,
.fade-move-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
