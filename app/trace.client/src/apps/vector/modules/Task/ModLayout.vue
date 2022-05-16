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
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
