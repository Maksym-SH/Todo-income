export default {
  state: {
    todo: [],
    inProgress: [],
    done: [],
    taskName: "",
    subtasks: [],
    subtaskItem: "",
  },
  getters: {
    todo(state) {
      return state.todo;
    },
    inProgress(state) {
      return state.inProgress;
    },
    done(state) {
      return state.done;
    },
    subtasks(state) {
      return state.subtasks;
    },
    subItem(state) {
      return state.subtaskItem;
    },
  },
  mutations: {
    CLEAR_DATA(state) {
      state.taskName = state.subtaskItem = "";
      state.subtasks = [];
    },
    CREATE_TASK(state) {
      state.todo.unshift({
        title: state.taskName,
        subTitle: state.subtasks.length !== 0 ? state.subtasks : "empty",
      });
      console.log(state.todo);
      state.taskName = "";
      state.subtasks = [];
      localStorage.todo = JSON.stringify(state.todo);
    },
    CHANGE_TASK_NAME(state, payload) {
      state.taskName = payload;
    },
    CHANGE_SUB_ITEM(state, payload) {
      state.subtaskItem = payload;
    },
    CHANGE_PROGRESS(state, payload) {
      let [from, to, index] = payload;
      if (from === "todo" && to === "inProgress") {
        state.inProgress.unshift(state.todo[index]);
        state.todo.splice(index, 1);
      } else if (from === "inProgress" && to === "done") {
        state.done.unshift(state.inProgress[index]);
        state.inProgress.splice(index, 1);
      } else if (from === "done" && to === "delete") {
        state.done.splice(index, 1);
      } else if (from === "inProgress" && to === "todo") {
        state.todo.unshift(state.inProgress[index]);
        state.inProgress.splice(index, 1);
      }
      localStorage.todo = JSON.stringify(state.todo);
      localStorage.inProgress = JSON.stringify(state.inProgress);
      localStorage.done = JSON.stringify(state.done);
    },
    SUBTASK_DONE(state, payload) {
      let [indexArray, indexList] = payload;
      state.inProgress[indexArray].subTitle[indexList].done =
        !state.inProgress[indexArray].subTitle[indexList].done;
      localStorage.inProgress = JSON.stringify(state.inProgress);
    },
    CHANGE_SUBTASK(state) {
      let objectDone = {
        name: state.subtaskItem,
        done: false,
      };
      state.subtasks.push(objectDone);
      state.subtaskItem = "";
    },
    UPDATE_LIST(state) {
      if (localStorage.todo) {
        state.todo = JSON.parse(localStorage.todo);
      }
      if (localStorage.inProgress) {
        state.inProgress = JSON.parse(localStorage.inProgress);
      }
      if (localStorage.done) {
        state.done = JSON.parse(localStorage.done);
      }
    },
  },
  actions: {
    callChangeSubTask({ commit }) {
      commit("CHANGE_SUBTASK");
    },
    callChangeClear({ commit }) {
      commit("CLEAR_DATA");
    },
    callSubItem({ commit }, payload) {
      commit("CHANGE_SUB_ITEM", payload);
    },
    callCreateTask({ commit }) {
      commit("CREATE_TASK");
    },
    callChangeTaskName({ commit }, payload) {
      commit("CHANGE_TASK_NAME", payload);
    },
    callUpdateList({ commit }) {
      commit("UPDATE_LIST");
    },
    callSubtaskDone({ commit }, payload) {
      commit("SUBTASK_DONE", payload);
    },
    callChangeProgress({ commit }, payload) {
      commit("CHANGE_PROGRESS", payload);
    },
  },
};
