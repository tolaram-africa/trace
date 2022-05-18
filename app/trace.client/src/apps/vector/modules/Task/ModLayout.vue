<script setup lang="ts">
import { IModule } from '@/libs/Menu';
import vectorPaths from '@/vector/paths';

const moduleItems: Array<IModule> = [
  vectorPaths.task.activities,
  vectorPaths.task.timeline,
  vectorPaths.task.history,
  vectorPaths.task.request,
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <router-view />
  </layout-wrapper>
</template>
