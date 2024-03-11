import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: () => import("../views/HomePage.vue"),
      props: { model: false, rerenderKey: false },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/work",
      name: "work",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PortfolioPage.vue"),
    },

    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ContactPage.vue"),
    },
  ],
});


export default router
