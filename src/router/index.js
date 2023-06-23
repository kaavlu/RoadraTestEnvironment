import VueRouter from "vue-router";

const routes = [
  // Redirect to home if 404
  { path: "*", redirect: "/" },
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/post-listing-screen",
    name: "postListingScreen",
    meta: {
      title: "Post listing - Roadra",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/PostListingScreen.vue"),
  },
  {
    path: "/multiple-stages",
    name: "multipleStages",
    meta: {
      title: "Multiple stages - Roadra",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/MultipleStages.vue"),
  }
]


const router = new VueRouter({
  routes,
  mode: "history",
});

export default router