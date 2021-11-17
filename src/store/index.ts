import { createStore } from "vuex";

export default createStore({
  state: {
    maxWindowIndex: 0,
  },
  mutations: {
    increaseMaxWindowIndex: (state) => state.maxWindowIndex++,
  },
  actions: {},
});
