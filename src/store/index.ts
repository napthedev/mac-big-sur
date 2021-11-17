import { DockMenu } from "../shared/constants";
import { createStore } from "vuex";

export default createStore({
  state: {
    maxWindowIndex: 0,
    windowIndexes: DockMenu.filter((item) => item.type !== "link").reduce(
      (acc, current) => {
        acc[current.name] = 0;
        return acc;
      },
      {} as any
    ),
  },
  mutations: {
    increaseMaxWindowIndex: (state) => state.maxWindowIndex++,
    changeWindowIndex: (state, payload) =>
      (state.windowIndexes[payload.name] = payload.value),
  },
});
