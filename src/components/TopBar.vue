<script setup lang="ts">
import { Menu } from "../shared/constants";
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

    <div></div>
  </div>
</template>

<style scoped>
.top-bar {
  background: #1370ce80;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.top-bar * {
  color: white;
}

.left {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 10px;
}

.item {
  position: relative;
}

.item:hover .label,
.label:hover {
  background: #ffffff80;
}

.label {
  background: transparent;
  border: none;
  padding: 0 7px;
  height: 25px;
  transition: 0.3s;
  cursor: pointer;
}

.left:focus-within .item:hover .dropdown {
  opacity: 1;
  visibility: visible;
}

.dropdown {
  position: absolute;
  left: 0;
  top: 100%;
  width: max-content;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  border: #d3d3d3;
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  background: #3c404399;
}

.dropdown * {
  white-space: nowrap;
}

.dropdown-child {
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
}

.dropdown-child:hover {
  background: #158ddddc;
}

.divider {
  height: 1px;
  width: 100%;
  background: #d3d3d37c;
  margin: 3px 0;
}
</style>
