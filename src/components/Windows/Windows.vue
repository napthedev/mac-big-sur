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
</script>

<template>
  <transition name="fade">
    <div
      v-if="windowIndex > 0"
      @mousedown="bringToFront"
      class="window"
      :style="{
        background: item.background,
        top: item.position.top,
        left: item.position.left,
        zIndex: windowIndex,
        boxShadow:
          windowIndex === maxWindowIndex
            ? '0 0 20px #1d1e1f'
            : '0 0 10px #1d1e1f',
      }"
      v-draggable="{
        bounds: 'parent',
        handle: '.head',
      }"
      @start="onDrag = true"
      @stop="onDrag = false"
    >
      <div class="head">
        <div class="actions-container">
          <span
            @click="closeApp"
            class="action"
            style="background: #ff0000"
          ></span>
          <span class="action" style="background: #ffff00"></span>
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

      <item.component v-if="item.type === 'component'" />
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
  transition: box-shadow 0.3s, opacity 0.3s;
  margin-top: 27px;

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

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
