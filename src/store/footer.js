export default {
  state: {
    textColor: "",
    bgColor: "",
    footerLogo: require("../assets/icon/logoBlack.svg"),
  },
  getters: {
    textColor(state) {
      return state.textColor;
    },
    bgColor(state) {
      return state.bgColor;
    },
    footerLogo(state) {
      return state.footerLogo;
    },
  },
  mutations: {
    CHANGE_PARAMS(state, payload) {
      state.bgColor = payload[0];
      state.textColor = payload[1];
      console.log(state.textColor, state.bgColor);
    },
  },
  actions: {
    callCheckParams({ commit }, payload) {
      commit("CHANGE_PARAMS", payload);
    },
  },
};
