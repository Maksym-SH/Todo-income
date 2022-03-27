import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import mainPage from "@/views/mainPage.vue";
import notebookPage from "@/views/notebookPage";
import todoPage from "@/views/todoPage";
import notFoundPage from "@/views/notFoundPage";
const routes = [
  {
    path: "/",
    name: "home",
    component: mainPage,
  },
  {
    path: "/notebook",
    name: "notebook",
    component: notebookPage,
  },
  {
    path: "/todoList",
    name: "todoList",
    component: todoPage,
  },
  {
    path: "*",
    name: "notFound",
    component: notFoundPage,
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
