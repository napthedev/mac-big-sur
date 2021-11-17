<script setup lang="ts">
import { wallpapers } from "../../shared/constants";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const wallpaperIndex = computed(() => store.state.wallpaperIndex);
const wallpaperUrl = computed(() => wallpapers[wallpaperIndex.value]);

const changeWallpaper = (index: number) => {
  store.commit("changeWallpaper", index);
};
</script>

<template>
  <div class="container">
    <div class="wallpaper-container">
      <div
        class="wallpaper-item"
        v-for="(wallpaper, index) in wallpapers"
        :key="wallpaper.url"
        @click="changeWallpaper(index)"
      >
        <img :src="wallpaper.url" alt="" />
        <p
          :style="{
            color: index === wallpaperIndex ? '#1e90ff' : '',
          }"
        >
          {{ wallpaper.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 500px;
  height: 400px;
  overflow-y: auto;

  img {
    height: 76px;
    width: auto;
  }
  p {
    text-align: center;
  }
}
.wallpaper {
  &-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  &-item {
    cursor: pointer;
  }
}
</style>
