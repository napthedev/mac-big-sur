<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <TopBar />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background-image: url("/wallpaper.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
}

:root {
  --text: #fff;
  --text-transparent: #ffffff80;
  --text-gray: #bdc1c5;
  --top-bar: #1370ce80;
  --dropdown: #443f5fab;
  --dropdown-border: #ffffff3d;
  --dropdown-item-hover: #158ddddc;
  --divider: #d3d3d37c;
}
</style>
