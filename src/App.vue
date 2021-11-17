<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import Dock from "./components/Dock.vue";
</script>

<template>
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

body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
}

#app {
  background-image: url("/wallpaper.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
