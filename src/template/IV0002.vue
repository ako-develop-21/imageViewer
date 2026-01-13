<template>
    <div class="container">
        <button class="settings-btn" @click="isSettingsOpen = true">
            <img src="@/assets/images/material/setting.png" alt="Settings" />
        </button>
        <IconDisplay
            class="icon-display"
            v-model:selectedIcons="selectedIcons"
            :config="layoutConfig"
            @deselect="(icon: string) => removeIcon(icon)"
        />
        <IconSelector
            class="icon-selector"
            ref="iconSelectorRef"
            @select="addIcon"
            @deselect="removeIcon"
        />

        <SettingsModal
            v-if="isSettingsOpen"
            :config="layoutConfig"
            :defaultConfig="DEFAULT_CONFIG"
            @close="isSettingsOpen = false"
            @apply="handleApplySettings"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import IconSelector from "@/components/IconSelector.vue";
import IconDisplay from "@/components/IconDisplay.vue";
import SettingsModal from "@/components/SettingsModal.vue";

// レイアウト設定
interface LayoutConfig {
    sideMargin: number;
    topOffset: number;
    verticalGap: number;
    colorLeft: string;
    colorRight: string;
    showBackground: boolean;
}

const DEFAULT_CONFIG: LayoutConfig = {
    sideMargin: 50,
    topOffset: 370,
    verticalGap: 84,
    colorLeft: "#A34DE5",
    colorRight: "#E5894D",
    showBackground: false,
};

const layoutConfig = ref<LayoutConfig>({ ...DEFAULT_CONFIG });
const isSettingsOpen = ref(false);

// 設定の読み込み
onMounted(() => {
    const saved = localStorage.getItem("layout_config");
    if (saved) {
        try {
            layoutConfig.value = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to load layout config", e);
        }
    }
});

// 設定の保存
function handleApplySettings(newConfig: LayoutConfig) {
    layoutConfig.value = newConfig;
    localStorage.setItem("layout_config", JSON.stringify(newConfig));
    isSettingsOpen.value = false;
}

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

<style scoped lang="scss">
.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .icon-selector {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .icon-display {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .settings-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 100;
        background: rgba(44, 44, 44, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        width: 48px;
        height: 48px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        backdrop-filter: blur(8px);
        padding: 0;
        overflow: hidden;

        img {
            width: 32px;
            height: 32px;
            object-fit: contain;
            transition: transform 0.4s ease;
        }

        &:hover {
            background: rgba(60, 60, 60, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
            transform: scale(1.05);

            img {
                transform: rotate(60deg);
            }
        }

        &:active {
            transform: scale(0.95);
        }
    }
}
</style>
