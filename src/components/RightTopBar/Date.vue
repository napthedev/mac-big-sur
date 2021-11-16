<script setup lang="ts">
import { formatDate } from "../../shared/formatDate";
import { ref } from "vue";

const date = ref(formatDate());

setInterval(() => {
  date.value = formatDate();
}, 5000);
</script>

<template>
  <div>{{ date }}</div>
</template>
