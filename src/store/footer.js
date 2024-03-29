export default {
  state: {
    footerLogo: require("../assets/icon/logo.svg"),
    contact: [
      {
        image: require("../assets/icon/instagram.svg"),
        name: "Instagram",
        link: "https://www.instagram.com/_mak.s0n/",
        title: `Instagram`,
      },
      {
        image: require("../assets/icon/facebook.svg"),
        name: "Facebook",
        link: "https://m.facebook.com/profile.php?lst=100031921784039%3A100031921784039%3A1647855977",
        title: `Facebook`,
      },
      {
        image: require("../assets/icon/github.svg"),
        name: "GitHub",
        link: "https://m.facebook.com/profile.php?lst=100031921784039%3A100031921784039%3A1647855977",
        title: `Посмотреть проект в GitHub`,
      },
    ],
  },
  getters: {
    contact(state) {
      return state.contact;
    },
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
};
