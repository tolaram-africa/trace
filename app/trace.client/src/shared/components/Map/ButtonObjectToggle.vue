<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import * as L from 'leaflet';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';
import { useMapState } from '@/components/Map/stores';

const barTimeout = ref();
const mapState = useMapState();
const { mapInstance, mapPluginReady } = storeToRefs(mapState);
const getIcon = (fill: string) => {
  return `<i class="q-icon bootstrap-icons bi-${fill}" style="font-size: 1.25rem; color: #000"></i>`;
};

onMounted(async () => {
  if (mapPluginReady.value) {
    await nextTick();
    const trafficToggle = L.easyButton({
      states: [
        {
          stateName: 'traffic-disabled',
          title: 'Traffic disabled',
          icon: getIcon('stoplights'),
          onClick: (control) => {
            /** */
          },
        },
        {
          stateName: 'traffic-enabled',
          title: 'Traffic enabled',
          icon: getIcon('stoplights-fill'),
          onClick: (control) => {
            /** */
          },
        },
      ],
    });

    const clusterToggle = L.easyButton({
      states: [
        {
          stateName: 'cluster-enabled',
          title: 'Cluster enabled',
          icon: getIcon('diagram-3'),
          onClick: (control) => {
            /** */
          },
        },
        {
          stateName: 'cluster-disabled',
          title: 'Cluster disabled',
          icon: getIcon('diagram-3-fill'),
          onClick: (control) => {
            /** */
          },
        },
      ],
    });

    const labelToggle = L.easyButton({
      states: [
        {
          stateName: 'hide-labels',
          title: 'Hide labels',
          icon: getIcon('fonts'),
          onClick: (control) => {
            /** */
          },
        },
        {
          stateName: 'show-labels',
          title: 'Show labels',
          icon: getIcon('fonts'),
          onClick: (control) => {
            /** */
          },
        },
      ],
    });

    const trailToggle = L.easyButton({
      states: [
        {
          stateName: 'trail-enabled',
          title: 'Hide Trail',
          icon: getIcon('arrow-up-right-circle-fill'),
          onClick: (control) => {
            /** */
          },
        },
        {
          stateName: 'trail-disabled',
          title: 'Show Trail',
          icon: getIcon('arrow-up-right-circle'),
          onClick: (control) => {
            /** */
          },
        },
      ],
    });

    const locationToggle = L.easyButton({
      states: [
        {
          stateName: 'location-disabled',
          title: 'Traffic disabled',
          icon: getIcon('pin'),
          onClick: (control) => {
            /** */
          },
        },
        {
          stateName: 'location-enabled',
          title: 'Traffic enabled',
          icon: getIcon('pin-fill'),
          onClick: (control) => {
            /** */
          },
        },
      ],
    });

    const routeBar = L.easyBar(
      [trafficToggle, clusterToggle, labelToggle, trailToggle, locationToggle],
      {
        position: 'bottomright',
      }
    );
    barTimeout.value = setTimeout(() => {
      routeBar.addTo(mapInstance.value);
    }, 500);
  }
});

onBeforeUnmount(() => {
  mapPluginReady.value = false;
  clearTimeout(barTimeout.value);
});
</script>

<script lang="ts">
export default {
  name: 'ButtonObjectToggle',
};
</script>

<template>
  <span v-show="false"></span>
</template>
