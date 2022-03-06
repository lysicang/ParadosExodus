import Vue from "vue";
import VueRouter from "vue-router";
import { Home, Whatson, Contacts } from "./views";

Vue.use(VueRouter);
export default new VueRouter({
  mode: "hash",
  base: process.env.SITE_URL,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/whatson",
      component: Whatson,
    },
    {
      path: "/contacts",
      component: Contacts,
    },
  ],
});
