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

        const style: Record<string, string> = {
            top: `${top}px`,
            "border-color": isLeftTeam
                ? props.config.colorLeft
                : props.config.colorRight,
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
        width: 64px;
        height: 64px;
        border: 2px solid;
        border-radius: 50%;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.5);
        cursor: pointer;
        pointer-events: auto;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

        &:hover {
            transform: scale(1.1);
            z-index: 10;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        .icon-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

/* Animations */
.icon-list-enter-active,
.icon-list-leave-active {
    transition: all 0.5s ease;
}

.icon-list-enter-from {
    opacity: 0;
    transform: scale(0.5) translateY(-20px);
}

.icon-list-leave-to {
    opacity: 0;
    transform: scale(0) rotate(15deg);
}
</style>
