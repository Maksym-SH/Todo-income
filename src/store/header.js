export default {
  state: {
    logoName: "Todo-Income",
    logoPath: require("@/assets/icon/logo.svg"),
    navLinks: [
      {
        name: "Головна",
        path: "/",
      },
      {
        name: "Про нас",
        path: "/aboutUc",
      },
      {
        name: "Калькулятор",
        path: "/calculate",
      },
      {
        path: "/todoList",
        name: "Список завдань",
      },
    ],
  },
  getters: {
    logoName(state) {
      return state.logoName;
    },
    logoPath(state) {
      return state.logoPath;
    },
    navLinks(state) {
      return state.navLinks;
    },
  },
};
