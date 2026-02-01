import { createRouter, createWebHashHistory } from "vue-router";
import IV0001 from "@/template/IV0001.vue";
import IV0002 from "@/template/IV0002.vue";
import IV0003 from "@/template/IV0003.vue";
import Home from "@/template/Home.vue";

const base = import.meta.env.BASE_URL;

const router = createRouter({
    history: createWebHashHistory(base),
    routes: [
        { component: Home, path: "/" },
        { component: IV0001, path: "/imageSelect" },
        { component: IV0002, path: "/iconViewer" },
        { component: IV0003, path: "/draft" },
    ],
});

export default router;
