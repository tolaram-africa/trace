<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import {
  LMap,
  LControlLayers,
  LControlZoom,
  LTileLayer,
} from '@vue-leaflet/vue-leaflet';
import { computed, onMounted, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';
import { useMapState } from './composables';
import '@/css/leaflet.scss';

const $q = useQuasar();
const mapState = useMapState();
const {
  mapReady,
  mapReference,
  mapInstance,
  currentZoomValue,
  currentCenterValue,
  mapOptions,
  mapTiles,
  currentTileLayer,
} = storeToRefs(mapState);
const {
  onInitialize,
  onMapZoomStart,
  onMapZoomEnd,
  onCenterUpdate,
  onZoomUpdate,
  onMapReady,
} = mapState;

onInitialize();

const isBrowser = computed(() => typeof window !== 'undefined');
onBeforeMount(async () => {
  if (isBrowser.value) {
    /**
    let Loader: any;
    ({ Loader } = require('@googlemaps/js-api-loader'));
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });
    await loader.load();
     */
  }
});

onMounted(() => {
  if (isBrowser) {
  }
});

defineExpose({ mapReference, mapInstance, mapTiles, currentTileLayer });
</script>

<script lang="ts">
export default {
  name: 'MapCore',
};
</script>

<template>
  <l-map
    v-show="mapReady"
    ref="mapReference"
    :useGlobalLeaflet="false"
    :zoom="currentZoomValue"
    :center="currentCenterValue"
    :options="mapOptions"
    :zoomAnimation="true"
    :markerZoomAnimation="true"
    style="z-index: 0"
    @zoomstart="onMapZoomStart"
    @zoomend="onMapZoomEnd"
    @update:center="onCenterUpdate"
    @update:zoom="onZoomUpdate"
    @ready="onMapReady"
    v-bind="$attrs"
  >
    <!-- Standard tile layers -->
    <template v-for="(tile, tileIndex) in mapTiles">
      <l-tile-layer
        v-if="!tile.custom"
        :key="tileIndex"
        :url="tile.url"
        :name="tile.name"
        :visible="tile.visible || tile.id === currentTileLayer.id"
        layer-type="base"
      ></l-tile-layer>
    </template>

    <slot name="first"></slot>
    <l-control-zoom
      :position="$q.platform.is.mobile ? 'topleft' : 'topright'"
    />
    <slot></slot>
    <l-control-layers />
    <slot name="last"></slot>
  </l-map>
</template>
