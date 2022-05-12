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

const moduleSubItems = [
  {
    title: 'Sample 0',
    icon: 'bi-columns-gap',
    color: 'accent',
    name: 'vec.task',
    class: '',
  },
  {
    title: 'Sample 1',
    icon: 'bi-graph-up-arrow',
    color: 'accent',
    name: 'vec.overview.trends',
    class: '',
  },
  {
    title: 'Sample 3',
    icon: 'bi-graph-up-arrow',
    color: 'accent',
    name: 'vec.track',
    class: '',
  },
  {
    title: 'Sample 4',
    icon: 'bi-graph-up-arrow',
    color: 'accent',
    name: 'vec.overview',
    class: '',
  },
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <layout-sub-wrapper :items="moduleSubItems">
      <div class="row justify-center items-start">
        <router-view />
      </div>
    </layout-sub-wrapper>
  </layout-wrapper>
</template>
