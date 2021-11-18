<script setup lang="ts">
import { wallpapers, themes } from "../../shared/constants";
import { useStore } from "vuex";
import { computed, watch } from "vue";

const store = useStore();

const wallpaperIndex = computed(() => store.state.wallpaperIndex);

const changeWallpaper = (index: number) => {
  store.commit("changeWallpaper", index);
};

const currentTheme = computed(() => store.state.theme);

localStorage.setItem("theme", currentTheme.value);
document.documentElement.setAttribute(
  "data-theme",
  themes[store.state.theme].attr
);

watch(
  () => store.state.theme,
  () => {
    document.documentElement.setAttribute(
      "data-theme",
      themes[store.state.theme].attr
    );
  }
);

const changeTheme = (theme: number) => {
  store.commit("changeTheme", theme);
};
</script>

<template>
  <div class="container">
    <h1>Themes</h1>
    <div class="theme-container">
      <div
        v-for="(theme, index) in themes"
        :key="theme.name"
        class="theme-item"
        @click="changeTheme(index)"
      >
        <img
          :class="{ 'blue-border': currentTheme === index }"
          :src="theme.thumbnail"
          alt=""
        />
        <p
          :style="{
            color: currentTheme === index ? '#1e90ff' : '',
          }"
        >
          {{ theme.name }}
        </p>
      </div>
    </div>
    <h1>Wallpapers</h1>
    <div class="wallpaper-container">
      <div
        class="wallpaper-item"
        v-for="(wallpaper, index) in wallpapers"
        :key="wallpaper.url"
        @click="changeWallpaper(index)"
      >
        <img
          :class="{ 'blue-border': wallpaperIndex === index }"
          :src="wallpaper.thumbnail"
          alt=""
        />
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
  padding: 20px;
  * {
    transition: 0.3s;
  }
  img {
    height: 76px;
    width: auto;
    border: 2px solid transparent;
  }
  p {
    text-align: center;
  }
  h1 {
    font-size: 20px;
    margin: 20px 0;
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
.theme {
  &-container {
    display: flex;
    justify-content: space-between;
  }
  &-item {
    cursor: pointer;
    img {
      height: 76px;
      object-fit: cover;
      border: 2px solid transparent;
    }
  }
}
.blue-border {
  border: 2px solid #1e90ff !important;
}
</style>
