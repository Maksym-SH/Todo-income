import Vue from "vue";
import Vuex from "vuex";
import header from "./header";
import card from "./cardSection.js";
import statistics from "./statistics.js";
import footer from "./footer.js";
import notebook from "./notebook.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    header,
    card,
    statistics,
    footer,
    notebook,
  },
});
