<script setup lang="ts">
import MapLive from '@/components/Map/MapLive.vue';

const contextOptions = {
  page: {
    title: 'Object Monitor',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="row">
      <map-live class="col" style="height: 100vh"></map-live>
    </q-page>
  </page-wrapper>
</template>
