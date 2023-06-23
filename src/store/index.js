import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home";
import utilities from "./modules/utilities";
import profile from "./modules/profile";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    home,
    profile,
    utilities
  },
});
