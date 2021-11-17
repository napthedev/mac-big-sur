<script setup lang="ts">
import LeftTopBar from "./LeftTopBar.vue";
import RightTopBar from "./RightTopBar/RightTopBar.vue";
</script>

<template>
  <div class="top-bar">
    <LeftTopBar />
    <RightTopBar />
  </div>
</template>

<style scoped lang="scss">
.top-bar {
  background: var(--bg);
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  z-index: 999999;
}
</style>
