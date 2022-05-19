import { ref, reactive, computed, nextTick } from 'vue';
import { ITileLayer } from '@/libs/Map/Map';
import { TileLayers } from '@/libs/Map/TileLayers';

const googleLayerFix = (event: any): void => {
  Array.from(document.styleSheets).forEach((sheet) => {
    const node: any = sheet.ownerNode;
    if (node && node.href && node.href.includes('fonts.googleapis.com')) {
      node.parentElement.removeChild(node);
    }
  });
};

export const useMapState = reactive({
  mapReady: false,
  mapReference: null,
  mapInstance: null,
  mapOptions: null,
  minimumZoom: 5,
  maximumZoom: 21,
  currentTileLayer: null,
  currentZoomValue: 5,
  currentZoom: computed<number>(() => useMapState.currentZoomValue),
  currentCenterValue: [0, 0] as Array<number>,
  currentCenter: computed<Array<number>>(() => useMapState.currentCenterValue),
  measurmentUnit: 'metric',
  mapTiles: TileLayers as ITileLayer[],
  showTooltip: computed<boolean>(() => {
    if (useMapState.mapOptions !== null) {
      const showAtValue = useMapState.mapOptions.selectionZoom - 1;
      return useMapState.currentZoomValue >= showAtValue;
    }
    return false;
  }),
  /* Functions */
  onInitialize: () => {
    const config = process.env;
    const options = {
      zoomSnap: 0.5,
      zoomControl: false,
      attributionControl: false,
      layerId: config.DEFAULT_MAP_LAYER,
      zoom: config.DEFAULT_MAP_ZOOM,
      minZoom: config.DEFAULT_MAP_MIN_ZOOM,
      maxZoom: config.DEFAULT_MAP_MAX_ZOOM,
      center: config.DEFAULT_MAP_CENTER,
      maxBounds: config.DEFAULT_MAP_BOUNDS,
      selectionZoom: config.DEFAULT_MAP_SELECT_ZOOM,
    };
    const layerId = options.layerId;
    const defaultTileLayer = TileLayers.filter((item) => {
      return item.id === layerId;
    }, layerId)[0];

    useMapState.currentTileLayer = defaultTileLayer || TileLayers[0];
    useMapState.mapOptions = options;
  },
  onMapReady: async (event: any) => {
    await nextTick();

    useMapState.mapInstance = useMapState.mapReference.leafletObject;
    useMapState.mapReady = true;
    console.log(useMapState.mapInstance);

    useMapState.mapInstance.on('load', () => {
      console.log('Map loaded');
    });
    if (1 === 1) {
      // useMapState.mapInstance = mapReference.value.mapObject;
      // /** Events hooks for google layers font fix */
      // useMapState.mapInstance.on('load', googleLayerFix);
      // useMapState.mapInstance.on('viewreset', googleLayerFix);
      // useMapState.mapInstance.on('mousemove', googleLayerFix);
      // useMapState.mapInstance.on('baselayerchange', (event: any) => {
      //   setTimeout(() => {
      //     googleLayerFix(event);
      //   }, 3000);
      // });
    }
  },
  onCenterUpdate: (center: Array<number>): void => {
    useMapState.currentCenterValue = center;
  },
  onZoomUpdate: (zoom: number): void => {
    useMapState.currentZoomValue = zoom;
  },
  onMarkerActions: (): void => {
    // Live Tracking Markers checks
    // useMarkerState.onZoomMarkerLive();
  },

  onMapZoomStart: (): void => {
    // TODO: Capture required event
  },

  onMapZoomEnd: (): void => {
    useMapState.onMarkerActions();
  },
}) as any;
