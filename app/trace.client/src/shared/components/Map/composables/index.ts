import { ref, computed, onUnmounted, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { ITileLayer } from '@/libs/Map/Map';
import { TileLayers } from '@/libs/Map/TileLayers';

/*
const googleLayerFix = (event: any): void => {
  Array.from(document.styleSheets).forEach((sheet) => {
    const node: any = sheet.ownerNode;
    if (node && node.href && node.href.includes('fonts.googleapis.com')) {
      node.parentElement.removeChild(node);
    }
  });
};
*/

export const useMapState = defineStore('app.map', () => {
  const config = process.env;
  const mapReady = ref<boolean>(false);
  const mapReference = ref();
  const mapInstance = ref();
  const mapOptions = ref();
  const minimumZoom = ref<number>(5);
  const maximumZoom = ref<number>(21);
  const currentTileLayer = ref();
  const currentZoomValue = ref<number>(5);
  const currentCenterValue = ref<Array<number>>([0, 0]);
  const measurmentUnit = ref<string>('metric');
  const mapTiles = ref<Array<ITileLayer>>(TileLayers);
  const mapReadyTimeout = ref();
  const mapResizeTimeout = ref();

  const currentCenter = computed<Array<number>>(() => currentCenterValue.value);
  const currentZoom = computed<number>(() => currentZoomValue.value);
  const showTooltip = computed<boolean>(() => {
    if (mapOptions.value !== null) {
      const showAtValue = mapOptions.value.selectionZoom - 1;
      return currentZoomValue.value >= showAtValue;
    }
    return false;
  });

  /* Functions */
  const onInitialize = () => {
    minimumZoom.value = Number(config.DEFAULT_MAP_MIN_ZOOM);
    maximumZoom.value = Number(config.DEFAULT_MAP_MAX_ZOOM);
    currentCenterValue.value = config.DEFAULT_MAP_CENTER.split(',').map(Number);
    currentZoomValue.value = Number(config.DEFAULT_MAP_ZOOM);

    const options = {
      zoomSnap: 0.5,
      zoomControl: false,
      attributionControl: false,
      layerId: config.DEFAULT_MAP_LAYER,
      zoom: currentZoomValue.value,
      minZoom: minimumZoom.value,
      maxZoom: maximumZoom.value,
      center: currentCenterValue.value,
      selectionZoom: Number(config.DEFAULT_MAP_SELECT_ZOOM),
      // TODO: Later add maxBounds: config.DEFAULT_MAP_BOUNDS,
      preferCanvas: true,
    };
    const layerId = options.layerId;
    const defaultTileLayer = TileLayers.filter((item) => {
      return item.id === layerId;
    }, layerId)[0];

    currentTileLayer.value = defaultTileLayer || TileLayers[0];
    mapOptions.value = options;
  };

  const onMapReady = async () => {
    await nextTick();
    if (mapReference.value !== null) {
      mapInstance.value = mapReference.value.leafletObject;

      mapReadyTimeout.value = setTimeout(() => {
        mapReady.value = true;
        mapResizeTimeout.value = setTimeout(() => {
          mapInstance.value.invalidateSize();
          mapInstance.value.setView(
            currentCenterValue.value,
            currentZoomValue.value
          );
        }, 50);
      }, 20);

      /** Events hooks for google layers font fix */
      // mapInstance.value.on('load', googleLayerFix);
      // mapInstance.value.on('viewreset', googleLayerFix);
      // mapInstance.value.on('mousemove', googleLayerFix);
      // mapInstance.value.on('baselayerchange', (event: any) => {
      //   setTimeout(() => {
      //     googleLayerFix(event);
      //   }, 3000);
      // });
    }
  };

  const onCenterUpdate = (center: Array<number>): void => {
    currentCenterValue.value = center;
  };

  const onZoomUpdate = (zoom: number): void => {
    currentZoomValue.value = zoom;
  };

  const onMarkerActions = (): void => {
    // Live Tracking Markers checks
  };

  const onMapZoomStart = (): void => {
    // TODO: Capture required event
  };
  useMapState;
  const onMapZoomEnd = (): void => {
    // TODO: Capture required event
  };

  onUnmounted(() => {
    clearTimeout(mapReadyTimeout.value);
    clearTimeout(mapResizeTimeout.value);
  });

  return {
    mapReady,
    mapReference,
    mapInstance,
    minimumZoom,
    maximumZoom,
    currentZoom,
    currentZoomValue,
    currentCenter,
    currentCenterValue,
    mapOptions,
    mapTiles,
    currentTileLayer,
    measurmentUnit,
    showTooltip,
    /* Functions */
    onMapReady,
    onInitialize,
    onMapZoomStart,
    onMapZoomEnd,
    onCenterUpdate,
    onMarkerActions,
    onZoomUpdate,
  };
});
