import Home from "./views/Home.vue";
import Nesting from "./views/Nesting.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: "/", component: Home,  name: 'Home', meta: { title: "Home" } },
  { path: "/nesting", component: Nesting,  name: 'Nesting', meta: { title: "Nesting" } },
  { path: "/:path(.*)", component: NotFound },
];
