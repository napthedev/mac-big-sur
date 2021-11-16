<script setup lang="ts">
import { Menu } from "../shared/constants";
import Date from "./RightTopBar/Date.vue";
import Battery from "./RightTopBar/Battery.vue";
import Wifi from "./RightTopBar/Wifi.vue";
</script>

<template>
  <div class="top-bar">
    <div class="left" tabindex="0">
      <div class="item" tabindex="0" v-for="item in Menu" :key="item.label">
        <button class="label" v-html="item.label"></button>

        <div class="dropdown">
          <div v-for="child in item.children">
            <button class="dropdown-child" v-if="typeof child === 'string'">
              {{ child }}
            </button>
            <div class="divider" v-if="child === null"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <Wifi />
      <Battery />
      <Date style="font-size: 14px; margin: 0 10px" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-bar {
  background: var(--top-bar);
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 10px;

  * {
    color: white;
  }
}

.left {
  display: flex;
  align-items: center;
  height: 100%;

  &:focus-within .item:hover .dropdown {
    opacity: 1;
    visibility: visible;
  }
}

.item {
  position: relative;

  &:hover .label {
    background: var(--text-transparent);
  }
}

.label {
  background: transparent;
  border: none;
  padding: 0 7px;
  height: 25px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: var(--text-transparent);
  }
}

.dropdown {
  position: absolute;
  left: -5px;
  top: 100%;
  width: max-content;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  border: 1px solid var(--dropdown-border);
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
  background: var(--dropdown);

  * {
    white-space: nowrap;
  }

  &-child {
    padding: 3px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 100%;
    text-align: left;

    &:hover {
      background: var(--dropdown-item-hover);
    }
  }
}

.divider {
  height: 1px;
  width: 100%;
  background: var(--divider);
  margin: 3px 0;
}

.right {
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
