export default {
  state: {
    statistics: [
      {
        count: "1000+",
        description: `завдань було створено`,
      },
      {
        count: "10000+",
        description: `нотаток було оброблено`,
      },
    ],
  },
  getters: {
    statistics(state) {
      return state.statistics;
    },
  },
};
