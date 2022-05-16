<script setup lang="ts">
import { IModule } from '@/libs/Menu';
import vectorPaths from '@/vector/paths';

const moduleItems: Array<IModule> = [
  vectorPaths.resource.summary,
  vectorPaths.resource.location,
  vectorPaths.resource.route,
  vectorPaths.resource.asset,
  vectorPaths.resource.product,
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
