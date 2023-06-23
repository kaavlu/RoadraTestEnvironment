import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home";
import utilities from "./modules/utilities";
import postListing from "./modules/postListing";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    home,
    postListing,
    utilities,
  },
});
