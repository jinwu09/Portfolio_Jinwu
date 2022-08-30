import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeVue,
    },
    // { path: "/", redirect: "Home" },
  ],
});

export default router;
