<script setup lang="ts">
import { DockMenu } from "../shared/constants";
import { ref } from "vue";

const imageSize = 48;

const dockRef = ref(null);

addEventListener("mousemove", (e) => {
  const onHover = dockRef.value?.contains(e.target as any);

  const dockIcons = document.querySelectorAll(
    ".dock-icon"
  ) as NodeListOf<HTMLImageElement>;

  dockIcons.forEach((element: HTMLImageElement) => {
    const left =
      element.getBoundingClientRect().left +
      element.getBoundingClientRect().width / 2;

    const maxDistance = 300;

    const distance = Math.abs(e.clientX - left);

    let sizeToChange =
      distance < maxDistance && onHover
        ? imageSize + (maxDistance - distance) * 0.15 + "px"
        : imageSize + "px";

    element.style.width = sizeToChange;
    element.style.height = sizeToChange;
  });
});
</script>

<template>
  <div ref="dockRef" class="dock">
    <div v-for="item in DockMenu" :key="item.name" :data-tooltip="item.name">
      <img class="dock-icon" :src="item.icon" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dock {
  position: fixed;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  gap: 13px;
  background: var(--top-bar);
  border: 1px solid var(--border);
  padding: 10px;
  border-radius: 20px;
  height: 76px;

  img {
    width: 48px;
    height: 48px;
    border-radius: 15%;
    cursor: pointer;
    transition: 0.1s;
  }
}
[data-tooltip] {
  position: relative;

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -40px;
    color: #fff;
    background: var(--dropdown);
    white-space: nowrap;
    width: max-content;
    padding: 3px 7px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
}
</style>
