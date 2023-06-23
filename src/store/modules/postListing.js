const state = {
  sellAppListing: {
    firstName: 'John',
    lastName: 'Smith',
    vehicle: {
      make: 'Volkswagen',
      model: 'Golf'
    },
    status: 'created'
  }
};

const getters = {
  sellAppListing: (state) => state.sellAppListing,
};

const actions = {

};

const mutations = {
  updateSellAppListingStatus: (state, value) => {
    state.sellAppListing.status = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
