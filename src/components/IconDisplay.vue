<template>
    <div class="display-area" :class="{ 'with-bg': config.showBackground }">
        <div class="image-area">
            <TransitionGroup name="icon-list">
                <div
                    v-for="(icon, index) in selectedIcons"
                    :key="icon + index"
                    class="icon-wrapper"
                    :style="iconStyles[index]"
                    @click="emit('deselect', icon)"
                >
                    <img :src="icon" class="icon-image" />
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface LayoutConfig {
    sideMargin: number;
    topOffset: number;
    verticalGap: number;
    colorLeft: string;
    colorRight: string;
    showBackground: boolean;
}

const props = defineProps<{
    selectedIcons: string[];
    config: LayoutConfig;
}>();

const emit = defineEmits<{
    (e: "update:selectedIcons", value: string[]): void;
    (e: "deselect", value: string): void;
}>();

const iconStyles = computed(() =>
    props.selectedIcons.map((_, index) => {
        const isLeftTeam = index < 5;
        const localIndex = index % 5;
        const top =
            props.config.topOffset + localIndex * props.config.verticalGap;

        const color = isLeftTeam
            ? props.config.colorLeft
            : props.config.colorRight;

        const style: Record<string, string> = {
            top: `${top}px`,
            "border-color": color,
            "--glow-color": `${color}66`,
        };

        if (isLeftTeam) {
            style.left = `${props.config.sideMargin}px`;
        } else {
            style.right = `${props.config.sideMargin}px`;
        }

        return style;
    })
);
</script>

<style scoped lang="scss">
.display-area {
    position: relative;
    width: 100%;
    height: 100%;
    transition: background 0.5s ease;

    &.with-bg::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("@/assets/images/bg/sample.png");
        background-size: 100% auto;
        background-position: top center;
        background-repeat: no-repeat;
        opacity: 0.5;
        z-index: -1;
    }

    .image-area {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .icon-wrapper {
        position: absolute;
        width: 72px;
        height: 72px;
        border: 3px solid;
        border-radius: 50%;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.7);
        cursor: pointer;
        pointer-events: auto;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 20px var(--glow-color, rgba(0, 0, 0, 0.4));
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: scale(1.2);
            z-index: 10;
            box-shadow: 0 0 35px var(--glow-color, rgba(255, 255, 255, 0.3));
        }

        .icon-image {
            width: 90%;
            height: 90%;
            object-fit: contain;
            border-radius: 50%;
        }
    }
}

/* Animations */
.icon-list-enter-active {
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.icon-list-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 1, 1);
}

.icon-list-enter-from {
    opacity: 0;
    transform: scale(0.3) rotate(-15deg);
    filter: blur(10px);
}

.icon-list-leave-to {
    opacity: 0;
    transform: scale(0.1) translateY(40px);
    filter: brightness(2) blur(5px);
}
</style>
