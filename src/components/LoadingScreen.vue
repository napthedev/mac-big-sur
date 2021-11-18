<script setup lang="ts"></script>

<template>
  <div class="loading">
    <i class="bx bxl-apple"></i>
    <div class="loading-bar"></div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  i {
    font-size: 130px;
    color: #ffffff;
  }

  &-bar {
    width: 150px;
    height: 4px;
    background: #424242;
    border-radius: 5px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 4px;
      background: #ffffff;
      border-radius: 5px;
      animation: loading 1.5s ease-in-out;
    }
  }
}
@keyframes loading {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
