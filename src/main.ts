import App from "./App.vue";
import { createApp } from "vue";
import store from "./store";

createApp(App).use(store).mount("#app");
