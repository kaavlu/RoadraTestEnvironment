import Vuex from "vuex";
import Vue from "vue";
import home from "./modules/home";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    home
  },
});
