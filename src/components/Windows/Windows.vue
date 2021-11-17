<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useStore } from "vuex";

const { item } = defineProps(["item"]);

const requestFullScreen = () => {
  if (document.fullscreen) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }
};

const store = useStore();

const windowIndex = ref(0);

const increaseIndex = () => {
  store.commit("increaseMaxWindowIndex");

  windowIndex.value = store.state.maxWindowIndex;
};
</script>

<template>
  <div
    @mousedown="increaseIndex"
    class="window"
    :style="{
      background: item.background,
      top: item.position.top,
      left: item.position.left,
      zIndex: windowIndex,
    }"
  >
    <div class="head">
      <span class="action" style="background: #ff0000"></span>
      <span class="action" style="background: #ffff00"></span>
      <span
        @click="requestFullScreen"
        class="action"
        style="background: #00ff00"
      ></span>
    </div>

    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
      "
      v-if="item.type === 'iframe'"
    >
      <iframe
        :src="item.iframe.url"
        :width="item.iframe.width"
        :height="item.iframe.height"
        frameborder="0"
      ></iframe>
    </div>

    <item.component v-if="item.type === 'component'" />
  </div>
</template>

<style scoped lang="scss">
.window {
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 15px #1d1e1f;

  .head {
    display: flex;
    gap: 5px;
    padding: 6px;

    .action {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}
</style>
