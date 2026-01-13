<template>
    <div class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content">
            <div class="modal-header">
                <h2>アイコン配置設定</h2>
                <button class="close-btn" @click="$emit('close')">
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        stroke-width="2.5"
                        fill="none"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
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
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(14px);
}

.modal-content {
    background: rgba(15, 15, 20, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 32px;
    width: 460px;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9);
    overflow: hidden;
    animation: modal-pop 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

@keyframes modal-pop {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-header {
    padding: 24px 32px;
    border-bottom: 1px solid var(--glass-border);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.5px;
        color: #fff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .close-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--glass-border);
        color: #fff;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            background: rgba(255, 107, 107, 0.2);
            border-color: rgba(255, 107, 107, 0.3);
            color: #ff6b6b;
        }
    }
}

.modal-body {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color: rgba(255, 255, 255, 0.5);
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    input[type="number"] {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        padding: 12px 16px;
        color: #fff;
        font-size: 15px;
        transition: all 0.3s ease;
        &:focus {
            border-color: var(--accent-primary);
            box-shadow: 0 0 0 4px rgba(100, 108, 255, 0.1);
            outline: none;
        }
    }

    input[type="color"] {
        width: 100%;
        height: 48px;
        padding: 4px;
        border: 1px solid var(--glass-border);
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            border-color: rgba(255, 255, 255, 0.2);
        }
    }

    &.checkbox-group {
        flex-direction: row;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        border: 1px solid var(--glass-border);

        input[type="checkbox"] {
            width: 20px;
            height: 20px;
            accent-color: var(--accent-primary);
            cursor: pointer;
        }

        label {
            text-transform: none;
            letter-spacing: 0;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
        }
    }
}

.modal-footer {
    padding: 24px 32px;
    background: rgba(0, 0, 0, 0.1);
    border-top: 1px solid var(--glass-border);
    display: flex;
    justify-content: flex-end;
    gap: 16px;
}

.btn-primary {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 12px 40px;
    border-radius: 16px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
    &:hover {
        background: linear-gradient(135deg, #818cf8 0%, #6366f1 100%);
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba(79, 70, 229, 0.5);
    }
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 12px 28px;
    border-radius: 16px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: 600;
    &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        color: #fff;
        transform: translateY(-1px);
    }
}
</style>
