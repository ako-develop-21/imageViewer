<template>
    <div class="home-portal">
        <div class="bg-overlay"></div>

        <main class="content">
            <header class="hero">
                <h1>Gaming Tool Portal</h1>
                <p>Select a tool to enhance your streaming experience</p>
            </header>

            <div class="portal-grid">
                <router-link to="/imageSelect" class="portal-card">
                    <div class="card-glass"></div>
                    <div class="card-content">
                        <div class="icon-box">
                            <span class="material-icons">image_search</span>
                        </div>
                        <h2>Image Select</h2>
                        <p>
                            Configure and manage image overlays for your
                            broadcast.
                        </p>
                        <span class="action-btn">Enter Tool</span>
                    </div>
                </router-link>

                <router-link to="/iconViewer" class="portal-card">
                    <div class="card-glass"></div>
                    <div class="card-content">
                        <div class="icon-box">
                            <span class="material-icons">account_circle</span>
                        </div>
                        <h2>Icon Viewer</h2>
                        <p>
                            Real-time player icon display with OBS transparent
                            support.
                        </p>
                        <span class="action-btn">Enter Tool</span>
                    </div>
                </router-link>

                <router-link to="/draft" class="portal-card">
                    <div class="card-glass"></div>
                    <div class="card-content">
                        <div class="icon-box">
                            <span class="material-icons">account_tree</span>
                        </div>
                        <h2>Player Draft Tool</h2>
                        <p>
                            Manage player drafts with 6/8 teams and remote
                            operation.
                        </p>
                        <span class="action-btn">Enter Tool</span>
                    </div>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.home-portal {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #050508;
    background-image: url("C:/Users/ダルビッシュ/.gemini/antigravity/brain/d8d649fb-2e23-4849-bc03-458995dcb3a3/home_page_bg_1769938006002.png");
    background-size: cover;
    background-position: center;
    color: #fff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .bg-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            circle at center,
            transparent 0%,
            rgba(5, 5, 8, 0.8) 100%
        );
    }

    .content {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 1200px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero {
        text-align: center;
        margin-bottom: 60px;
        animation: fadeInDown 1s ease-out;

        h1 {
            font-size: 4rem;
            font-weight: 900;
            margin: 0;
            letter-spacing: -2px;
            background: linear-gradient(135deg, #fff 0%, #a34de5 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 10px 30px rgba(163, 77, 229, 0.3);
        }

        p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 10px;
            font-weight: 500;
        }
    }

    .portal-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        width: 100%;
        max-width: 1400px;
    }

    .portal-card {
        position: relative;
        height: 320px;
        text-decoration: none;
        color: inherit;
        overflow: hidden;
        border-radius: 32px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeInUp 1s ease-out backwards;

        &:nth-child(2) {
            animation-delay: 0.2s;
        }

        .card-glass {
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            transition: all 0.4s ease;
        }

        .card-content {
            position: relative;
            z-index: 2;
            padding: 40px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;

            .icon-box {
                width: 70px;
                height: 70px;
                background: linear-gradient(135deg, #a34de5 0%, #5d3dfa 100%);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 24px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                transition: transform 0.4s ease;

                .material-icons {
                    font-size: 36px;
                    color: white;
                }
            }

            h2 {
                font-size: 24px;
                margin: 0;
                font-weight: 800;
            }

            p {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.5);
                margin: 12px 0 24px;
                line-height: 1.5;
            }

            .action-btn {
                padding: 10px 30px;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 50px;
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                transition: all 0.3s ease;
            }
        }

        &:hover {
            transform: translateY(-10px) scale(1.02);
            border-color: rgba(163, 77, 229, 0.5);
            box-shadow:
                0 30px 60px rgba(0, 0, 0, 0.4),
                0 0 20px rgba(163, 77, 229, 0.2);

            .card-glass {
                background: rgba(163, 77, 229, 0.05);
            }

            .icon-box {
                transform: scale(1.1) rotate(5deg);
            }

            .action-btn {
                background: #fff;
                color: #000;
                transform: scale(1.05);
            }
        }
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .portal-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 2.5rem;
    }
}
</style>
