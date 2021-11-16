<script setup lang="ts">
import { ref } from "vue";

const percentage = ref();

const myNavigator = navigator as any;

if (myNavigator.getBattery) {
  myNavigator.getBattery().then((battery: any) => {
    percentage.value = battery.level * 100 + "%";
    battery.addEventListener("levelchange", function () {
      percentage.value = battery.level * 100 + "%";
    });
  });
} else {
  percentage.value = "Unknown";
}
</script>

<template>
  <div class="item" tabindex="0">
    <button class="label">
      <i
        style="font-size: 20px; color: var(--text)"
        class="bx bxs-battery-low"
      ></i>
    </button>

    <div class="dropdown">
      <div style="display: flex; justify-content: space-between">
        <p><b>Battery</b></p>
        <p class="gray">
          {{ percentage }}
        </p>
      </div>
      <p class="gray">Power Source: Battery</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./dropdown.scss";

.gray {
  font-size: 15px;
  color: var(--text-gray);
}
</style>
