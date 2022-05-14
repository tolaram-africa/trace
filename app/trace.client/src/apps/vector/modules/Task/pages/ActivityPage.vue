<script setup lang="ts">
const contextOptions = {
  page: {
    title: 'Task Activities',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <router-view></router-view>
  </page-wrapper>
</template>
