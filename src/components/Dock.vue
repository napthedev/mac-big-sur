<script setup lang="ts">
import { DockMenu } from "../shared/constants";
</script>

<template>
  <div class="dock">
    <div v-for="item in DockMenu" :key="item.name">
      <img :src="item.icon" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dock {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  gap: 13px;
  background: var(--top-bar);
  padding: 10px;
  border-radius: 20px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 15%;
  }
}
</style>
