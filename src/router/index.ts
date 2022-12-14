import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MoviesView from "../views/MoviesView.vue";
import MovieView from "../views/MovieView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "movies",
    component: MoviesView,
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
