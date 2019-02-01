import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => {
        console.log("调用时加载，输出缓存值");
        return import(/* webpackChunkName: "about" */ "./views/Home.vue");
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {
        console.log("调用时加载，输出缓存值");
        return import(/* webpackChunkName: "about" */ "./views/About.vue");
      }
    },
    {
      path: "/my",
      name: "my",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/my.vue")
    }
  ]
});
