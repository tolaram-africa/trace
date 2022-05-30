<script setup lang="ts">
import { IModule } from '@/libs/Menu';
import vectorPaths from '@/vector/paths';

const moduleItems: Array<IModule> = [
  vectorPaths.billing.summary,
  vectorPaths.billing.order,
  vectorPaths.invoice.root,
  vectorPaths.billing.override,
  vectorPaths.billing.manifest,
];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
