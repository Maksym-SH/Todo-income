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
        name: "Калькулятор",
        path: "/calculate",
      },
      {
        name: "Блокнот",
        path: "/notebook",
      },
      {
        name: "Список завдань",
        path: "/todoList",
      },
      {
        name: "Про нас",
        path: "/aboutUc",
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
