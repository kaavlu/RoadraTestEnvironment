import VueRouter from "vue-router";


const routes = [
  // Redirect to home if 404
  { path: "*", redirect: "/" },
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
      metaTags: [
        // {
        //   name: "description",
        //   content:
        //     "Dealers compete to give you their best price. Buy or sell in just a few clicks and find your perfect offer!",
        // },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "Profile",
      metaTags: [
        // {
        //   name: "description",
        //   content:
        //     "Dealers compete to give you their best price. Buy or sell in just a few clicks and find your perfect offer!",
        // },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/ProfileView.vue"),
  },
  {
    path: "/verification",
    name: "verification",
    meta: {
      title: "Verification",
      metaTags: [
        // {
        //   name: "description",
        //   content:
        //     "Dealers compete to give you their best price. Buy or sell in just a few clicks and find your perfect offer!",
        // },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/VerificationView.vue"),
  }
]


const router = new VueRouter({
  // scrollBehavior(to, from) {
  //   return new Promise((resolve) => {
  //     if (
  //       // Blocks reset if we are same route/hash (e.g., just changing the route search query)
  //       to.path == from.path &&
  //       to.hash == from.hash
  //     ) {
  //       // Stops a scroll to top on params change
  //       resolve({ x: window.pageXOffset, y: window.pageYOffset });
  //     } else resolve({ x: 0, y: 0 });
  //   });
  // },
  routes,
  mode: "history",
});

export default router