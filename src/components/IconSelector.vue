<template>
    <div class="selector">
        <div
            v-for="(group, gIndex) in icons"
            class="select-group"
            :style="{ backgroundColor: backgroundColors[gIndex] }"
        >
            <img
                v-for="(icon, index) in group"
                :key="index"
                :src="icon"
                class="icon"
                :class="{ selected: selectedIcons.has(icon) }"
                @click="iconClickHandler(icon)"
            />
        </div>
        <button class="btn btn-dark reset-button" @click="resetSelection">
            選択リセット
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
.selector {
    position: absolute;
    top: 0;
    width: 100%;
    height: 55px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-width: calc((50px + 10px) * 20);

    .select-group {
        width: 30%;
        height: 100%;
        border-radius: 64px;
    }

    .icon {
        width: 50px;
        height: 50px;
        margin: 3px;
        border: 2px solid #cbcbcb;
        border-radius: 50%;
        box-sizing: border-box;
        cursor: pointer;
        transition: filter 0.2s ease;
    }

    .icon.selected {
        filter: brightness(50%);
    }

    .reset-button {
        height: 38px;
        margin-top: 8px;
        margin-left: 15px;
        padding: 0 20px;
        border-radius: 20px;
        background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #efefef;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.5px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);

        &:hover {
            background: linear-gradient(135deg, #3d3d3d 0%, #252525 100%);
            border-color: rgba(255, 69, 58, 0.6);
            color: #ff6b6b;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4),
                0 0 10px rgba(255, 69, 58, 0.2);
        }

        &:active {
            transform: translateY(1px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
    }
}
</style>
