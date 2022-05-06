<script setup lang="ts">
const moduleItems = [
  {
    title: 'Overview',
    icon: 'bi-columns-gap',
    color: 'accent',
    name: 'vec.overview.dashboard',
    class: '',
  },
  {
    title: 'Trends',
    icon: 'bi-graph-up-arrow',
    color: 'accent',
    name: 'vec.overview.trends',
    class: '',
  },
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
