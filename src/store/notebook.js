export default {
  state: {
    note: "",
    noteTitle: "",
    saveNotes: [],
    darkTheme: true,
  },
  getters: {
    note(state) {
      return state.note;
    },
    noteTitle(state) {
      return state.noteTitle;
    },
    saveNotes(state) {
      return state.saveNotes;
    },
    darkTheme(state) {
      return state.darkTheme;
    },
  },
  mutations: {
    CHANGE_NOTE(state, payload) {
      state.note = payload;
      localStorage.note = payload;
    },
    CHANGE_NOTE_TITLE(state, payload) {
      state.noteTitle = payload;
      localStorage.title = payload;
    },
    SAVE_NOTES(state) {
      state.saveNotes.push({
        note: state.note ?? "",
        noteTitle: state.noteTitle ?? "",
      });
      state.note = state.noteTitle = "";
      localStorage.save = JSON.stringify(state.saveNotes);
      localStorage.removeItem("title"), localStorage.removeItem("note");
    },
    RETURN_NODES_LIST(state, payload) {
      state.saveNotes = payload;
    },
    SELECT_SAVE_NOTE(state, payload) {
      state.note = state.saveNotes[payload].note;
      state.noteTitle = state.saveNotes[payload].noteTitle;
    },
    DELETE_SAVE_NOTE(state, payload) {
      state.saveNotes.splice(payload, 1);
      localStorage.save = JSON.stringify(state.saveNotes);
    },
    CHANGE_DARK_THEME(state) {
      state.darkTheme = !state.darkTheme;
      localStorage.theme = state.darkTheme;
    },
  },
  actions: {
    callChangeNote({ commit }, payload) {
      commit("CHANGE_NOTE", payload);
    },
    callChangeNoteTitle({ commit }, payload) {
      commit("CHANGE_NOTE_TITLE", payload);
    },
    callSaveNotes({ commit }, payload) {
      commit("SAVE_NOTES", payload);
    },
    callReturnNodesList({ commit }, payload) {
      commit("RETURN_NODES_LIST", payload);
    },
    callSelectSaveNote({ commit }, payload) {
      commit("SELECT_SAVE_NOTE", payload);
    },
    callDeleteSaveNote({ commit }, payload) {
      commit("DELETE_SAVE_NOTE", payload);
    },
    callChangeDarkTheme({ commit }) {
      commit("CHANGE_DARK_THEME");
    },
  },
};
