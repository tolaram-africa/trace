<script setup lang="ts">
import { IModule } from 'src/shared/libs/Menu';

const moduleItems: Array<IModule> = [];
</script>

<template>
  <layout-wrapper :module-items="moduleItems">
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
