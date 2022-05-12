<script setup lang="ts">
const contextOptions = {
  page: {
    title: 'Task Activities',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-btn
      label="Extend Save path"
      :to="{ name: 'vec.task.activities.sample' }"
    />
    <router-view></router-view>
  </page-wrapper>
</template>
