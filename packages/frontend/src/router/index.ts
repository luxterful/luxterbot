import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "chat",
    component: () => import("@/views/Chat.vue"),
  },
  {
    path: "/configuration",
    name: "configuration",
    component: () => import("@/views/Configuration.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
