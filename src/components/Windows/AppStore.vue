<script setup lang="ts">
const openAppStore = () => {
  window.open("https://appstore.com");
};
</script>
<template>
  <div class="container">
    <img src="/dock/appstore.png" alt="" />
    <button @click="openAppStore">Open App Store</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;
  height: 400px;

  img {
    width: 128px;
    height: 128px;
  }

  button {
    background: #1e90ff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>
