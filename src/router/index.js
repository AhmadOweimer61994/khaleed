import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";
import table from "../views/table.vue";

const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
  { path: "/table", name: "table", component: table },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
