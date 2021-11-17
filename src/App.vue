<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import Dock from "./components/Dock.vue";
import { wallpapers } from "./shared/constants";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const backgroundUrl = computed(() => wallpapers[store.state.wallpaperIndex]);
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
  --text: #fff;
  --text-transparent: #ffffff80;
  --text-gray: #bdc1c5;
  --bg: #1b1b1d4d;
  --border: #d3d3d33b;
  --dropdown: #1b1b1dda;
  --dropdown-item-hover: #158ddddc;
  --divider: #d3d3d37c;
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
