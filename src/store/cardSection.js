export default {
  state: {
    info: [
      {
        name: "Блокнот",
        path: require("../assets/img/notebook.svg"),
        description: "Запис даних які потрібно запам'ятати",
      },
      {
        name: "Задачі",
        path: require("../assets/img/task.svg"),
        description: "Запис задач а також їх відстежування у ході виконання",
      },
    ],
  },
  getters: {
    info(state) {
      return state.info;
    },
  },
};
