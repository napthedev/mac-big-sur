<script setup lang="ts">
import Windows from "../components/Windows/Windows.vue";
import { DockMenu } from "../shared/constants";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();

const imageSize = 48;

let dockIcons: NodeListOf<HTMLImageElement>;
onMounted(() => {
  dockIcons = document.querySelectorAll(
    ".dock-icon"
  ) as NodeListOf<HTMLImageElement>;
});

const mouseMoveHandler = (e: MouseEvent) => {
  dockIcons.forEach((element: HTMLImageElement) => {
    const left =
      element.getBoundingClientRect().left +
      element.getBoundingClientRect().width / 2;

    const maxDistance = 300;

    const distance = Math.abs(e.clientX - left);

    let sizeToChange =
      distance < maxDistance
        ? imageSize + (maxDistance - distance) * 0.15 + "px"
        : imageSize + "px";

    element.style.width = sizeToChange;
  });
};

const mouseLeaveHandler = () => {
  dockIcons.forEach((element: HTMLImageElement) => {
    element.style.width = imageSize + "px";
  });
};

const clickHandler = (name: string) => {
  const item = DockMenu.find((i) => i.name === name);

  if (item?.type === "link") {
    window.open(item.link);
  } else if (item?.type === "iframe") {
    openApp(name);
  } else if (item?.type === "component") {
    openApp(name);
  }
};

const openApp = (name: string) => {
  store.commit("increaseMaxWindowIndex");
  store.commit("changeWindowIndex", {
    name: name,
    value: store.state.maxWindowIndex,
  });
};

const windowIndexes = computed(() => store.state.windowIndexes);
</script>

<template>
  <div
    class="dock"
    @mousemove="mouseMoveHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <div
      v-for="item in DockMenu"
      :key="item.name"
      :data-tooltip="item.name"
      :class="{
        opened:
          windowIndexes[item.name] !== 0 &&
          typeof windowIndexes[item.name] !== 'undefined',
      }"
    >
      <img
        @click="clickHandler(item.name)"
        class="dock-icon"
        :src="item.icon"
        alt=""
      />
    </div>
  </div>
  <template v-for="item in DockMenu.filter((i) => i.type !== 'link')">
    <Windows :item="item" />
  </template>
</template>

<style scoped lang="scss">
.dock {
  position: fixed;
  left: 50%;
  bottom: 10px;
  z-index: 999999;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  gap: 13px;
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 10px;
  border-radius: 20px;
  height: 76px;
  transition: 0.3s;

  img {
    width: 48px;
    height: auto;
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
    background: var(--dropdown);
    border: 1px solid var(--border);
    white-space: nowrap;
    width: max-content;
    padding: 3px 7px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
}

.opened {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -5px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #ffffff;
    transform: translateX(-50%);
  }
}
</style>
