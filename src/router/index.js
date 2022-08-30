import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from "../views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Home",
      name: "Home",
      component: HomeVue,
    },
    { path: "/", redirect: "Home" },
  ],
});

export default router;
