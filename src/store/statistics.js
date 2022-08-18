export default {
  state: {
    statistics: [
      {
        count: "1000+",
        description: `заданий было создано`,
      },
      {
        count: "10000+",
        description: `заметок было обработано`,
      },
    ],
  },
  getters: {
    statistics(state) {
      return state.statistics;
    },
  },
};
