import { createRouter, createWebHashHistory } from "vue-router";
import HomeVue from "../views/Home.vue";
import PrivacyPolicyVue from "../views/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      alias: ["/index.html"],
      component: HomeVue,
    },
    // { path: "/", redirect: "Home" },
    {
      path: "/Privacy_Policy",
      name: "Privacy_Policy",
      component: PrivacyPolicyVue,
    },
  ],
});

export default router;
