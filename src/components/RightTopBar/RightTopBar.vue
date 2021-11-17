<script setup lang="ts">
import Date from "./Date.vue";
import Battery from "./Battery.vue";
import Wifi from "./Wifi.vue";
</script>

<template>
  <div class="right">
    <Wifi />
    <Battery />
    <Date style="font-size: 14px; margin: 0 10px" />
  </div>
</template>

<style scoped>
.right {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
