<template>
    <div class="selector-dock">
        <div class="groups-container">
            <div
                v-for="(group, gIndex) in icons"
                :key="gIndex"
                class="select-group"
                :style="{ '--group-color': backgroundColors[gIndex] }"
            >
                <img
                    v-for="(icon, index) in group"
                    :key="index"
                    :src="icon"
                    class="icon-item"
                    :class="{ selected: selectedIcons.has(icon) }"
                    @click="iconClickHandler(icon)"
                />
            </div>
        </div>
        <button class="reset-selection-btn" @click="resetSelection">
            <span>選択クリア</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";

const emit = defineEmits<{
    (e: "select", value: string): void;
    (e: "deselect", value: string): void;
}>();

/** 元画像一覧 */
const images = import.meta.glob("@/assets/images/icon/*.png", {
    eager: true,
    as: "url",
});

/** 背景カラーコード */
const backgroundColors = [
    "#dbeeff",
    "#dbf5db",
    "#ffe3ec",
    "#fff8db",
    "#f1e6ff",
    "#ffe9d6",
    "#ddfaff",
    "#f2f2f2",
];

/** 選択済みアイコン */
const selectedIcons = ref<Set<string>>(new Set());

/** アイコン一覧 */
const icons = computed<string[][]>(() => {
    const result: string[][] = [[]];
    const allImages = Object.values(images).sort();
    console.log(allImages);

    allImages.forEach((img, idx) => {
        const groupIndex = Math.floor(idx / 5);
        if (!result[groupIndex]) result[groupIndex] = [];
        result[groupIndex].push(img);
    });
    return result;
});

/** アイコン押下時 */
const iconClickHandler = (icon: string) => {
    if (selectedIcons.value.has(icon)) {
        selectedIcons.value.delete(icon);
        emit("deselect", icon);
    } else {
        if (selectedIcons.value.size >= 10) return;
        selectedIcons.value.add(icon);
        emit("select", icon);
    }
};

/** 親から選択解除を呼べるように */
const deselect = (icon: string) => {
    selectedIcons.value.delete(icon);
};

/** 選択状態のリセット */
const resetSelection = () => {
    const selected = icons.value
        .flatMap((v) => v)
        .filter((v) => selectedIcons.value.has(v))
        .forEach((v) => {
            selectedIcons.value.delete(v);
            emit("deselect", v);
        });
};

defineExpose({ deselect });
</script>

<style scoped lang="scss">
.selector-dock {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    max-width: 95vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 12px 24px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: var(--glass-blur);
    border-radius: 28px;
    box-shadow: var(--shadow-premium);
    z-index: 100;
    transition: all 0.3s ease;

    .groups-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
    }

    .select-group {
        display: flex;
        padding: 4px;
        background: color-mix(in srgb, var(--group-color), transparent 85%);
        border: 1px solid
            color-mix(in srgb, var(--group-color), transparent 70%);
        border-radius: 40px;
        transition: all 0.3s ease;

        &:hover {
            background: color-mix(in srgb, var(--group-color), transparent 75%);
            border-color: var(--group-color);
            box-shadow: 0 0 15px
                color-mix(in srgb, var(--group-color), transparent 50%);
        }
    }

    .icon-item {
        width: 44px;
        height: 44px;
        margin: 2px;
        border: 2px solid transparent;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        filter: grayscale(0.2) brightness(0.9);

        &:hover {
            transform: scale(1.15) translateY(-2px);
            filter: grayscale(0) brightness(1.1);
            z-index: 2;
        }

        &.selected {
            filter: brightness(0.4) grayscale(1);
            border-color: rgba(255, 255, 255, 0.1);
            opacity: 0.5;
        }
    }

    .reset-selection-btn {
        flex-shrink: 0;
        height: 40px;
        padding: 0 20px;
        border-radius: 20px;
        background: linear-gradient(
            135deg,
            rgba(255, 107, 107, 0.1) 0%,
            rgba(255, 69, 58, 0.1) 100%
        );
        border: 1px solid rgba(255, 69, 58, 0.2);
        color: #ff6b6b;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.5px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: linear-gradient(
                135deg,
                rgba(255, 107, 107, 0.2) 0%,
                rgba(255, 69, 58, 0.2) 100%
            );
            border-color: rgba(255, 69, 58, 0.5);
            box-shadow: 0 0 15px rgba(255, 69, 58, 0.2);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
        }
    }
}
</style>
