import { ITileLayer } from './Map';

const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN;

export const TileLayers: Array<ITileLayer> = [
  {
    id: 'open.street',
    name: 'Open Street',
    custom: false,
    visible: false,
    attribution: '',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    id: 'mapbox.streets',
    name: 'MapBox Streets',
    custom: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },
  {
    // TODO: add night mode option with style: navigation-night-v1
    id: 'mapbox.traffic',
    name: 'MapBox Traffic',
    custom: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },
  {
    id: 'mapbox.satellite',
    name: 'MapBox Satellite',
    custom: false,
    visible: false,
    url: `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`,
    attribution: '',
  },

  {
    id: 'google.streets',
    name: 'Google Streets',
    custom: true,
    layerType: 'base',
    visible: false,
    options: {
      type: 'roadmap',
      maxZoom: 21,
    },
  },
  {
    id: 'google.traffic',
    name: 'Google Traffic',
    custom: true,
    layerType: 'TrafficLayer',
    visible: false,
    options: {
      type: 'roadmap',
      maxZoom: 21,
    },
  },
  {
    id: 'google.satellite',
    name: 'Google Satelite',
    custom: true,
    layerType: 'base',
    visible: false,
    options: {
      type: 'satellite',
      maxZoom: 21,
    },
  },
  {
    id: 'google.terrain',
    name: 'Google Terrain',
    custom: true,
    layerType: 'base',
    visible: false,
    options: {
      type: 'terrain',
      maxZoom: 21,
    },
  },
  {
    id: 'google.hybrid', //   custom: true,
    name: 'Google Hybird',
    custom: true,
    layerType: 'base',
    visible: false,
    options: {
      type: 'hybrid',
      maxZoom: 21,
    },
  },
];

export default TileLayers;
