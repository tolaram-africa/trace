<script setup lang="ts">
import MapCore from 'src/shared/components/Map/MapCore.vue';
const contextOptions = {
  page: {
    title: 'Object Monitor',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page>
      <map-core class="full" style="height: 100vh"></map-core>
    </q-page>
  </page-wrapper>
</template>
