<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content">
            <div class="modal-header">
                <h2>アイコン配置設定</h2>
                <button class="close-btn" @click="$emit('close')">
                    &times;
                </button>
            </div>
            <div class="modal-body">
                <div class="input-group">
                    <label>左右マージン (px)</label>
                    <input type="number" v-model="localConfig.sideMargin" />
                </div>
                <div class="input-group">
                    <label>上部オフセット (px)</label>
                    <input type="number" v-model="localConfig.topOffset" />
                </div>
                <div class="input-group">
                    <label>垂直方向の間隔 (px)</label>
                    <input type="number" v-model="localConfig.verticalGap" />
                </div>
                <div class="input-group">
                    <label>左チーム枠線色</label>
                    <input type="color" v-model="localConfig.colorLeft" />
                </div>
                <div class="input-group">
                    <label>右チーム枠線色</label>
                    <input type="color" v-model="localConfig.colorRight" />
                </div>
                <div class="input-group checkbox-group">
                    <input
                        type="checkbox"
                        id="show-bg"
                        v-model="localConfig.showBackground"
                    />
                    <label for="show-bg">背景サンプルを表示する</label>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" @click="handleReset">
                    初期設定に戻す
                </button>
                <button class="btn btn-primary" @click="handleApply">
                    決定
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface LayoutConfig {
    sideMargin: number;
    topOffset: number;
    verticalGap: number;
    colorLeft: string;
    colorRight: string;
    showBackground: boolean;
}

const props = defineProps<{
    config: LayoutConfig;
    defaultConfig: LayoutConfig;
}>();

const emit = defineEmits<{
    (e: "close"): void;
    (e: "apply", config: LayoutConfig): void;
}>();

const localConfig = ref({ ...props.config });

function handleReset() {
    localConfig.value = { ...props.defaultConfig };
}

function handleApply() {
    emit("apply", { ...localConfig.value });
}
</script>

<style scoped lang="scss">
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background: #1e1e1e;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    width: 400px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin: 0;
        font-size: 18px;
        color: #fff;
    }

    .close-btn {
        background: none;
        border: none;
        color: #888;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        &:hover {
            color: #fff;
        }
    }
}

.modal-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        color: #aaa;
        font-size: 13px;
    }

    input[type="number"] {
        background: #2c2c2c;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 10px;
        color: #fff;
        outline: none;
        &:focus {
            border-color: #646cff;
        }
    }

    input[type="color"] {
        width: 100%;
        height: 40px;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
    }

    &.checkbox-group {
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-top: 10px;

        input[type="checkbox"] {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        label {
            cursor: pointer;
            user-select: none;
            color: #efefef;
            font-size: 14px;
        }
    }
}

.modal-footer {
    padding: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

.btn-primary {
    background: linear-gradient(135deg, #646cff 0%, #535bf2 100%);
    border: none;
    padding: 10px 24px;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(100, 108, 255, 0.3);
    }
    &:active {
        transform: translateY(0);
    }
}

.btn-secondary {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 24px;
    border-radius: 8px;
    color: #ccc;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: #fff;
        border-color: rgba(255, 255, 255, 0.5);
    }
}
</style>
