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
      {
        count: "500+",
        description: `розрахунків калькулятору`,
      },
    ],
  },
  getters: {
    statistics(state) {
      return state.statistics;
    },
  },
};
