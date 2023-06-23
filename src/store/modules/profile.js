const state = {
  currentStatus: 'headingToRestaurant',
  // Possible statuses:
  // processingOrder
  // headingToRestaurant
  // headingToYou
  // orderComplete 

  firstName: "Kevin",
  lastName: "McDaniel",
  dasherPhone: "+12069639132",
  order: {
    restaurant: "Albertsons",
    order: "Fish Tacos"
  }
};

const getters = {
  currentStatus: (state) => state.currentStatus,

};

const actions = {

};

const mutations = {
  updateStatus: (state, value) => {
    state.currentStatus = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
