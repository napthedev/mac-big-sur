<script setup lang="ts">
import { TopBarMenu } from "../shared/constants";
</script>

<template>
  <div class="left" tabindex="0">
    <div class="item" tabindex="0" v-for="item in TopBarMenu" :key="item.label">
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
</template>

<style scoped lang="scss">
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
  border-radius: 5px;
  overflow: hidden;
  padding: 5px;
  background: var(--dropdown);
  border: 1px solid var(--border);

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
</style>
