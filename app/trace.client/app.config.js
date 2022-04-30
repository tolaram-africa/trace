/** Default configuration loader */
require('dotenv').config();

let env = process.env;
if (env.MODE === undefined) {
  require('dotenv').config({ path: './.env.development' });
  env = process.env;
}

// const defaultCoords = [12.726085, 2.654738];
const defaultServerHost = 'http://localhost:4567';
/*
const convertToCoords = (coords) => {
  if (!coords) return defaultCoords;
  const [lat, lng] = coords.split(',').map(Number);
  return [lat, lng];
};
*/

module.exports = {
  API_SECRET: env.API_SECRET || 'secret',
  PORT: env.PORT || 4568,
  BASE_URL: env.BASE_URL || 'http://localhost:4568/',
  API_ROOT: env.API_ROOT || `${defaultServerHost}/api/v1/`,
  API_STORAGE: env.API_STORAGE || `${defaultServerHost}/api/storage/v1/`,
  API_AUTH: env.API_AUTH || `${defaultServerHost}/api/auth/v1/`,

  APP_NAME: env.APP_NAME || 'Trace',
  APP_ID: env.APP_ID || 'ng.trace.vector',
  APP_DESCRIPTION: env.APP_DESCRIPTION || 'Trace',
  APP_THEME_COLOR: env.APP_THEME_COLOR || '#3949ab',
  APP_PAGE_TITLE: env.APP_PAGE_TITLE || 'Trace',

  /* API access tokens */
  GOOGLE_API_KEY: env.GOOGLE_API_KEY || 'secret',
  MAPBOX_ACCESS_TOKEN: env.MAPBOX_ACCESS_TOKEN || 'secret',

  /* Maps configurations */
  DEFAULT_MAP_LAYER: env.DEFAULT_MAP_LAYER || 'open.street',
  // DEFAULT_MAP_CENTER: convertToCoords(process.env.DEFAULT_MAP_CENTER),
  // DEFAULT_MAP_BOUNDS: convertToCoords(process.env.DEFAULT_MAP_BOUNDS),
  DEFAULT_MAP_ZOOM: env.DEFAULT_MAP_ZOOM || 6,
  DEFAULT_MAP_MIN_ZOOM: env.DEFAULT_MAP_MIN_ZOOM || 5,
  DEFAULT_MAP_MAX_ZOOM: env.DEFAULT_MAP_MAX_ZOOM || 21,
  DEFAULT_MAP_SELECT_ZOOM: env.DEFAULT_MAP_SELECT_ZOOM || 15,
};
