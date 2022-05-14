<script setup lang="ts">
import vectorMenus from '@/vector/paths';
const moduleItems = [
  vectorMenus.overview.dashboard,
  vectorMenus.overview.trends,
];
</script>

<template>
  <!--
    <layout-wrapper :module-items="moduleItems">
    <layout-sub-wrapper :items="moduleSubItems">
      <div class="row justify-center items-start">
        <router-view />
      </div>
    </layout-sub-wrapper>
  </layout-wrapper>
  -->
  <layout-wrapper :module-items="moduleItems">
    <q-page class="row items-center justify-evenly">
      <router-view />
    </q-page>
  </layout-wrapper>
</template>
