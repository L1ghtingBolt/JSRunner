import { createWebHashHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import Settings from "../components/Settings.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
