<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import { useStore } from "vuex";

const { item } = defineProps(["item"]);

const requestFullScreen = () => {
  if (document.fullscreen) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }
};

const onDrag = ref(false);

const top = ref(item.position.top);
const left = ref(item.position.left);

const headRef = ref();

const store = useStore();
const windowIndex = computed(() => store.state.windowIndexes[item.name]);

const maxWindowIndex = computed(() => store.state.maxWindowIndex);

const bringToFront = () => {
  store.commit("increaseMaxWindowIndex");
  store.commit("changeWindowIndex", {
    name: item.name,
    value: store.state.maxWindowIndex,
  });
};
const closeApp = () => {
  store.commit("changeWindowIndex", {
    name: item.name,
    value: 0,
  });
};
const minimizeWindow = () => {
  store.commit("changeWindowIndex", {
    name: item.name,
    value: -1,
  });
};

const dragStart = (e: MouseEvent) => {
  onDrag.value = true;

  const target = headRef.value as HTMLDivElement;

  const topDistance = e.clientY - target.getBoundingClientRect().top;
  const leftDistance = e.clientX - target.getBoundingClientRect().left;

  const handler = (e: MouseEvent) => {
    if (onDrag.value && e.clientY > 30 && e.clientY < innerHeight - 30) {
      top.value = `${e.clientY - topDistance}px`;
      left.value = `${e.clientX - leftDistance}px`;
    }
  };

  window.addEventListener("mousemove", handler);

  window.addEventListener("mouseup", () => {
    onDrag.value = false;
    removeEventListener("mousemove", handler);
  });
};
</script>

<template>
  <transition name="zoom">
    <div
      v-if="windowIndex !== 0"
      class="window"
      @mousedown="bringToFront"
      :style="{
        background: item.background,
        top,
        left,
        zIndex: windowIndex,
        boxShadow:
          windowIndex === maxWindowIndex
            ? '0 0 20px #1d1e1f'
            : '0 0 10px #1d1e1f',
        opacity: windowIndex === -1 ? '0' : '',
        visibility: windowIndex === -1 ? 'hidden' : 'visible',
      }"
    >
      <div class="head" @mousedown="dragStart" ref="headRef">
        <div class="actions-container">
          <span
            @click="closeApp"
            class="action"
            style="background: #ff0000"
          ></span>
          <span
            @click="minimizeWindow"
            class="action"
            style="background: #ffff00"
          ></span>
          <span
            @click="requestFullScreen"
            class="action"
            style="background: #00ff00"
          ></span>
        </div>
        <div
          class="label"
          :style="{
            color: item.color || 'var(--text)',
          }"
        >
          {{ item.name }}
        </div>
        <div></div>
      </div>

      <div v-if="item.type === 'iframe'">
        <iframe
          :src="item.iframe.url"
          :width="item.iframe.width"
          :height="item.iframe.height"
          :style="{
            pointerEvents:
              onDrag || windowIndex !== maxWindowIndex ? 'none' : 'initial',
          }"
          frameborder="0"
        ></iframe>
      </div>

      <template v-if="item.type === 'component'">
        <component :is="item.component" />
      </template>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.window {
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, opacity 0.3s, transform 0.3s;

  .head {
    display: flex;
    padding: 6px;

    & > div {
      flex: 1;
    }

    .actions-container {
      display: flex;
      gap: 5px;
    }

    .action {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .label {
      text-align: center;
      font-size: 13px;
      pointer-events: none;
      user-select: none;
    }
  }
}

.zoom {
  &-enter-active,
  &-leave-active {
    opacity: 1;
    transform: scale(1);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
