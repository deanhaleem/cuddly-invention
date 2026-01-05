<template>
  <div>
    <table v-if="displayedResources.length">
      <slot name="table-header-row" />
      <slot name="table-body-row" />
      <slot
        v-for="(resource, index) in displayedResources"
        :key="index"
        :name="`table-body-row-${index}`" />
    </table>
    <h1 v-else>Nothing to display</h1>
  </div>
</template>

<script setup lang="ts" generic="T">
const displayedResources = defineModel<T[]>({
  default: [],
});
</script>
