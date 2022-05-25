<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, reactive, onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapState } from '@/components/Map/composables';
import * as L from 'leaflet';
import MapBasic from 'src/shared/components/Map/MapBasic.vue';
import 'leaflet-switch-basemap';
import 'leaflet-switch-basemap/src/L.switchBasemap.css';
import Geocoder from 'leaflet-control-geocoder';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import 'lrm-mapzen';
import 'leaflet-easybutton';
import 'leaflet-easybutton/src/easy-button.css';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';

// TODO: Wrap some marker with cluster
// import 'leaflet.markercluster/dist/leaflet.markercluster.js';
// import 'leaflet.markercluster/dist/MarkerCluster.css';
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

// TODO: Use layer groups to add markers to the map

const mapState = useMapState();
const { mapInstance, mapTiles, currentTileLayer } = storeToRefs(mapState);
const { onMapReady } = mapState;
type ILayer = {
  id?: string;
  layer: L.TileLayer | any;
  icon: string;
  name: string;
  option?: any;
};
const tiledMapTiles = ref<Array<ILayer>>([]);
const contextOptions = {
  page: {
    title: 'Object Monitor',
  },
};

onBeforeMount(async () => {
  if (typeof window !== 'undefined') {
    let Loader: any;
    ({ Loader } = await import('@googlemaps/js-api-loader'));
    const loader = new Loader({
      apiKey: process.env.GOOGLE_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });
    await loader.load();
  }
});

mapTiles.value.forEach((tilex) => {
  const layer: ILayer = {
    id: tilex.id,
    layer: !tilex.custom
      ? L.tileLayer(String(tilex.url), {})
      : L.gridLayer.googleMutant({
          trafficLayer: true,
          ...tilex.options,
        }),
    icon: './map/tile-0.png',
    name: tilex.name,
    option: tilex,
  };

  if (tilex.custom) layer.layer.addGoogleLayer(String(tilex.layerType));
  tiledMapTiles.value.push(layer);
});

const geofence = ref([]);
const routeInstance = ref();
const routeCreateEnabled = reactive({
  show: false,
  trigger: false,
});
const routeMarkers = ref<Array<any>>([]);
const routeSourceDestination = ref<Array<[number, number]>>([]);

const mapIsReady = async () => {
  await onMapReady();

  const geocoder = new Geocoder({
    defaultMarkGeocode: false,
  });

  geocoder.on('markgeocode', (e: any) => {
    mapInstance.value.fitBounds(e.geocode.bbox);
  });
  geocoder.addTo(mapInstance.value);

  // Map geofence
  mapInstance.value.pm.addControls({
    position: 'topleft',
    drawCircle: true,
    marker: true,
    circlemarker: true,
    polyline: true,
  });

  mapInstance.value.on('pm:drawstart', ({ workingLayer }: any) => {
    geofence.value = [];
    workingLayer.on('pm:vertexadded', (e: any) => {
      const value = e.target.getLatLngs();
      geofence.value = value;
    });
  });

  mapInstance.value.on('pm:drawend', () => {
    console.log(geofence.value);
  });

  mapInstance.value.on('click', (e: any) => {
    if (!routeCreateEnabled.trigger) return;
    if (routeSourceDestination.value.length === 2)
      routeSourceDestination.value = [];
    const latlng = [e.latlng.lat, e.latlng.lng] as [number, number];
    routeSourceDestination.value.push(latlng);

    const marker = L.marker(latlng, {
      title: 'Sample',
      draggable: false,
    });

    marker.addTo(mapInstance.value);
    routeMarkers.value.push(marker);

    if (routeSourceDestination.value.length === 2) {
      routeMarkers.value.forEach(function (marker) {
        mapInstance.value.removeLayer(marker);
      });
      routeMarkers.value = [];
      if (routeInstance.value !== undefined) {
        routeInstance.value.remove();
        routeInstance.value = null;
      }

      routeInstance.value = L.Routing.control({
        router: L.Routing.mapzen('API_KEY', {
          serviceUrl: process.env.API_ROUTING_SERVER + '/route?',
          timeout: 45 * 1000,
          costing: 'truck',
          costing_options: {
            truck: {
              shortest: false,
              top_speed: 40,
              weight: 40,
              axle_load: 40,
              use_highways: 1,
            },
          },
          directions_options: {
            language: 'en-US',
          },
        }),
        formatter: new L.Routing.mapzenFormatter(),
        geocoder: L.Control.Geocoder.nominatim({
          serviceUrl: process.env.API_GEOCODING_SERVER,
        }),
        collapsible: false,
        summaryTemplate:
          '<div style="background-color: #ededed; padding: 0.3rem; border: 1px solid #7f7f7f; border-radius: 8px"><div style="font-size: 2.4; font-weight: 700">{name}</div><div style="font-size: 0.5; font-weight: 100; color: dodgerblue"><span>{distance}</span> <span>{time}</span></div></div>',
        routeWhileDragging: false,
        useZoomParameter: false,
        showAlternatives: false,
        waypoints: [
          L.latLng(routeSourceDestination.value[0]),
          L.latLng(routeSourceDestination.value[1]),
        ],
      });

      // routeInstance.value.on('routeselected', function (e) {
      //   // var coord = e.route.coordinates;
      //   // var instr = e.route.instructions;
      // });

      routeInstance.value.addTo(mapInstance.value);
      if (!routeCreateEnabled.show) routeInstance.value.hide();
    }
    // End route trigger
  });

  const routeStateToggle = L.easyButton({
    states: [
      {
        stateName: 'route-diabled',
        title: 'Route Disabled',
        icon: '<i class="q-icon bootstrap-icons bi-compass" style="font-size: 1.25rem; color: #000"></i>',
        onClick: (control) => {
          control.state('route-enabled');
          routeCreateEnabled.trigger = true;
          if (routeInstance.value !== undefined) {
            routeInstance.value.remove();
          }
        },
      },
      {
        stateName: 'route-enabled',
        title: 'Route Enabled',
        icon: '<i class="q-icon bootstrap-icons bi-compass-fill" style="font-size: 1.25rem; color: #000"></i>',
        onClick: (control) => {
          control.state('route-diabled');
          if (routeInstance.value !== undefined && routeCreateEnabled.trigger) {
            routeInstance.value.hide();
            routeInstance.value.remove();
          }
          routeCreateEnabled.trigger = false;
        },
      },
    ],
  });

  const routeListToggle = L.easyButton({
    states: [
      {
        stateName: 'route-steps-diabled',
        title: 'Route Steps',
        icon: '<i class="q-icon bootstrap-icons bi-map" style="font-size: 1.25rem; color: #000"></i>',
        onClick: (control) => {
          control.state('route-steps-enabled');
          routeCreateEnabled.show = true;
          if (routeInstance.value) routeInstance.value.show();
        },
      },
      {
        stateName: 'route-steps-enabled',
        title: 'Route Steps',
        icon: '<i class="q-icon bootstrap-icons bi-map-fill" style="font-size: 1.25rem; color: #000"></i>',
        onClick: (control) => {
          control.state('route-steps-diabled');
          routeCreateEnabled.show = false;
          routeMarkers.value.forEach(function (marker) {
            mapInstance.value.removeLayer(marker);
          });
          if (routeInstance.value) routeInstance.value.hide();
        },
      },
    ],
  });

  const routeBar = L.easyBar([routeStateToggle, routeListToggle]);
  routeBar.addTo(mapInstance.value);

  tiledMapTiles.value.map((layerInstance) => {
    if (currentTileLayer.value.id === layerInstance.id) {
      layerInstance.layer.addTo(mapInstance.value);
    }
  });

  interface L {
    basemapsSwitcher: any;
  }

  L.basemapsSwitcher(tiledMapTiles.value, {
    position: 'bottomright',
  }).addTo(mapInstance.value);
};
</script>

<template>
  <page-wrapper :options="contextOptions">
    <q-page class="row">
      <map-basic
        class="col"
        style="height: 100vh"
        @ready="mapIsReady"
      ></map-basic>
    </q-page>
  </page-wrapper>
</template>
