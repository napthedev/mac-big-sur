<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref("");
const handleFormSubmit = () => {
  if (!inputValue.value.trim()) return;

  if (
    /(?:^|[ \t])((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/gm.test(
      inputValue.value
    )
  ) {
    if (inputValue.value.startsWith("http")) {
      window.open(inputValue.value);
    } else {
      window.open(`//${inputValue.value}`);
    }
  } else {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(inputValue.value)}`
    );
  }

  inputValue.value = "";
};
</script>
<template>
  <div class="container">
    <img src="/google.png" alt="" />
    <form @submit.prevent="handleFormSubmit">
      <input type="text" placeholder="Search..." v-model="inputValue" />
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 500px;
  height: 400px;

  img {
    width: auto;
    height: 80px;
  }
  input {
    width: 300px;
    height: 40px;
    border-radius: 50px;
    padding: 0 20px;
    color: #000;
  }
}
</style>
