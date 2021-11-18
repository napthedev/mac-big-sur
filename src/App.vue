<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import Dock from "./components/Dock.vue";
import { wallpapers, themes } from "./shared/constants";
import { useStore } from "vuex";
import { computed, watch } from "vue";

const store = useStore();

const backgroundUrl = computed(() => wallpapers[store.state.wallpaperIndex]);

const currentTheme = computed(() => store.state.theme);

localStorage.setItem("theme", currentTheme.value);
document.documentElement.setAttribute(
  "data-theme",
  themes[store.state.theme].attr
);

watch(
  () => store.state.theme,
  () => {
    document.documentElement.setAttribute(
      "data-theme",
      themes[store.state.theme].attr
    );
  }
);
</script>

<template>
  <transition name="fade">
    <img id="wallpaper" :key="backgroundUrl.url" :src="backgroundUrl.url" />
  </transition>
  <TopBar />
  <Dock />
</template>

<style lang="scss">
:root {
  --text: #000;
  --text-transparent: #00000080;
  --text-gray: #666469;
  --bg: #8193af6b;
  --border: #d3d3d33b;
  --dropdown: #ffffffe0;
  --dropdown-item-hover: #4b99fd;
  --divider: #d3d3d37c;
  --application-background: #ffffff;
}
@media (prefers-color-scheme: dark) {
  :root {
    --text: #fff;
    --text-transparent: #ffffff80;
    --text-gray: #bdc1c5;
    --bg: #1b1b1d4d;
    --border: #d3d3d33b;
    --dropdown: #1b1b1dda;
    --dropdown-item-hover: #4b99fd;
    --divider: #d3d3d37c;
    --application-background: #262226;
  }
}
[data-theme="light"] {
  --text: #000;
  --text-transparent: #00000080;
  --text-gray: #666469;
  --bg: #8193af6b;
  --border: #d3d3d33b;
  --dropdown: #ffffffe0;
  --dropdown-item-hover: #4b99fd;
  --divider: #d3d3d37c;
  --application-background: #ffffff;
}
[data-theme="dark"] {
  --text: #fff;
  --text-transparent: #ffffff80;
  --text-gray: #bdc1c5;
  --bg: #1b1b1d4d;
  --border: #d3d3d33b;
  --dropdown: #1b1b1dda;
  --dropdown-item-hover: #4b99fd;
  --divider: #d3d3d37c;
  --application-background: #262226;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--text);
  user-select: none;
}

body,
#app {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
}

#wallpaper {
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
}
i {
  color: #ffffff !important;
}
.fade {
  &-enter-active,
  &-leave-active {
    transition: 0.5s;
    opacity: 1;
  }

  &-enter-from,
  &-leave-to {
    transition: 0.5s;
    opacity: 0;
  }
}
</style>
