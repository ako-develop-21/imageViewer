import { createRouter, createWebHashHistory } from "vue-router";
import IV0001 from "@/template/IV0001.vue";
import IV0002 from "@/template/IV0002.vue";

const base = import.meta.env.BASE_URL;

const router = createRouter({
    history: createWebHashHistory(base),
    routes: [
        { component: IV0001, path: "/imageSelect" },
        { component: IV0002, path: "/iconViewer" },
        { redirect: "/imageSelect", path: "/" },
    ],
});

export default router;
