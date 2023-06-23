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
  // Check if signed in
  homePageLinks: (state) => state.homePageLinks,

};

const actions = {

};

const mutations = {
<<<<<<< HEAD
  // addPageLink: (state, value) => {
  //   state.homePageLinks.push(value);
=======
  // toggleErrorModal: (state, value) => {
  //   state.errorModal = value;
>>>>>>> 89fb234ff6b6b085dbd5be4e5ef27a1fcf6e1de5
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
