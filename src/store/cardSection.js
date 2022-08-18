export default {
  state: {
    info: [
      {
        name: "Блокнот",
        path: require("../assets/img/notebook.svg"),
        description: "Запись данных которые нужно запомнить",
      },
      {
        name: "Задания",
        path: require("../assets/img/task.svg"),
        description: "Ведение задач, на разных ходах выполнения",
      },
    ],
  },
  getters: {
    info(state) {
      return state.info;
    },
  },
};
