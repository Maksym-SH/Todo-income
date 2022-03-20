import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import mainPage from "@/views/mainPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: mainPage,
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
  },
  {
    path: "/calculate",
    name: "calculate",
  },
  {
    path: "/todoList",
    name: "todoList",
  },
  {
    path: "*",
    name: "notFound",
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

export default router;
