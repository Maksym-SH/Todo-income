export default {
  state: {
    logoName: "Todo-Income",
    logoPath: require("@/assets/icon/logo.svg"),
    navLinks: [
      {
        name: "Главная",
        path: "/",
      },
      {
        name: "Блокнот",
        path: "/notebook",
      },
      {
        name: "Список заданий",
        path: "/todoList",
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
