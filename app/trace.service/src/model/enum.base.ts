export enum AlertType {
  PUSH = 'push',
  WEB = 'web',
  EMAIL = 'email',
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  ALL = 'all',
}

export enum ReoccurUnit {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export type Color = {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
  white: string;
};

// TODO: Use conditional elimination to decide types
// TODO: Auto persist COUNTY,CITY,STATE,COUNTRY
export enum LocationAutoType {
  CUSTOM = 'custom',
  ROAD = 'road',
  SUBURB = 'suburb',
  COUNTY = 'county',
  CITY = 'city',
  STATE = 'state',
  COUNTRY = 'country',
}

export enum GeometryType {
  POINT = 'Point',
  MULTIPOINT = 'MultiPoint',
  LINESTRING = 'LineString',
  MULTILINESTRING = 'MultiLineString',
  POLYGON = 'Polygon',
  MULTIPOLYGON = 'MultiPolygon',
  GEOMETRYCOLLECTION = 'GeometryCollection',
}

export enum FuelOption {
  GAS = 'gas',
  ELECTRIC = 'electric',
  HYDROGEN = 'hydrogen',
  LPG = 'lpg',
  CNG = 'cng',
  DIESEL = 'diesel',
  OTHER = 'other',
}

export enum FuelCalculationType {
  PER_BEACON = 'per_beacon',
  PER_DISTANCE = 'per_distance',
  PER_HOUR = 'per_hour',
  PER_DAY = 'per_day',
  PER_MONTH = 'per_month',
  PER_MANUAL = 'per_manual',
}
