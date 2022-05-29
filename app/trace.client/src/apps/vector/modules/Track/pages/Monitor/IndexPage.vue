<script setup lang="ts">
import { LControl } from '@vue-leaflet/vue-leaflet';
import MapLive from '@/components/Map/MapLive.vue';
import TrackPanelWindow from '../../components/TrackPanelWindow.vue';

const contextOptions = {
  page: {
    title: 'Object Monitor',
  },
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="row">
      <map-live class="col" style="height: 100vh">
        <l-control :disable-scroll-propagation="true" position="topleft">
          <track-panel-window />
        </l-control>
      </map-live>
    </q-page>
  </page-wrapper>
</template>
