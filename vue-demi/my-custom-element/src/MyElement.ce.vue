<template>
  <p>{{ counter }}</p>
  <button @click="onClick">Click Me</button>
</template>

<script setup lang="ts">
import { ref } from 'vue-demi';

const counter = ref(0);

function onClick(): void {
  counter.value++;
}
</script>
