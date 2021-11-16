<script setup lang="ts">
import { ref } from "vue";

const isOnline = ref(window.navigator.onLine);

window.addEventListener("online", () => (isOnline.value = true));
window.addEventListener("offline", () => (isOnline.value = false));
</script>

<template>
  <div class="item" tabindex="0">
    <button class="label">
      <i
        v-if="isOnline"
        style="font-size: 20px; color: var(--text)"
        class="bx bx-wifi"
      ></i>
      <i
        v-if="!isOnline"
        style="font-size: 20px; color: var(--text)"
        class="bx bx-wifi-off"
      ></i>
    </button>

    <div class="dropdown">
      <div style="display: flex; justify-content: space-between">
        <p><b>Wifi</b></p>
        <p class="gray">
          <div :class="{toggle: true, active: isOnline}">
          </div>
        </p>
      </div>
      <p class="gray">
        You are{{ isOnline ? "" : " not" }} connected to the internet
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./dropdown.scss";

.toggle {
  width: 40px;
  height: 22px;
  border-radius: 50px;
  border: 1px solid #7a7a7e;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    right: auto;
  }
}
.active {
  background:#1866DF;

  &::before {
    left: auto;
    right: 0;
  }
}
</style>
