const state = {
  
  values: [
     {
      id: "reservePrice",
      name: "Reserve price",
      value: 25000,
      details: null,
      desc: "Confirm the reserve price",
     },
     {
      id: "leaseCompany",
      name: "Lease company",
      value: "US Bank",
      details: null,
      desc: "Confirm the loan information",
     },
     {
      id: "exteriorPhoto",
      name: "Exterior Photo",
      value: "https://d3r93en13fywbg.cloudfront.net/sellListings/6490e189b80460329660d64c/93e762bf-8ff2-4a05-86b5-5a5947b07a72.jpeg",
      details: null,
      desc: "Review the photo above and add a description of any damage you see",
     },

  ]
};

const getters = {
  values: (state) => state.values,
};

const actions = {

};

const mutations = {
  // updateStatus: (state, value) => {
  //   state.currentStatus = value;
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
