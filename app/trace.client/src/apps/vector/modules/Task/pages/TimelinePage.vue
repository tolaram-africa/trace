<script setup lang="ts">
const contextOptions = {
  page: {
    title: 'Task Timeline',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="row items-start justify-start"></q-page>
  </page-wrapper>
</template>
