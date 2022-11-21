<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon> Hello World </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #heading>Hello World</template>
  </WelcomeItem>
</template>
