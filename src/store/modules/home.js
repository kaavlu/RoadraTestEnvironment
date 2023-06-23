const state = {
  homePageLinks: [
    {
      name: "Profile",
      path: "/profile"
    },
    {
      name: "Verification",
      path: "/verification"
    }
  ]
};

const getters = {
  homePageLinks: (state) => state.homePageLinks,

};

const actions = {

};

const mutations = {
  // addPageLink: (state, value) => {
  //   state.homePageLinks.push(value);
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
