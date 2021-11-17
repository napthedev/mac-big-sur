import App from "./App.vue";
import { DraggableDirective } from "@braks/revue-draggable";
import { createApp } from "vue";
import store from "./store";

createApp(App)
  .use(store)
  .directive("draggable", DraggableDirective)
  .mount("#app");
