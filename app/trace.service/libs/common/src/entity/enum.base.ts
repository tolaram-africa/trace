export enum ServiceLevel {
  VECTOR,
  DIRECT,
  CUSTOMER,
  ALL,
}

export enum AlertType {
  PUSH = 'push',
  WEB = 'web',
  EMAIL = 'email',
  SMS = 'sms',
  WHATSAPP = 'whatsapp',
  ALL = 'all',
}

export enum PeriodUnit {
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
  CRON = 'cron',
}

export enum SizeUnit {
  CARTON = 'carton',
  PACKAGE = 'package',
  PIECE = 'piece',
  CREATE = 'create',
  BAGS = 'bags',
  KILOGRAM = 'kilogram',
  GRAM = 'gram',
  MILLIGRAM = 'milligram',
  LITRE = 'litre',
  MILLILITRE = 'millilitre',
  ALL = 'all',
}

export enum WeightUnit {
  KILOGRAM = 'kilogram',
  GRAM = 'gram',
  MILLIGRAM = 'milligram',
  POUND = 'pound',
}

export enum DimensionUnit {
  CENTIMETER = 'centimeter',
  METER = 'meter',
  INCH = 'inch',
  FEET = 'feet',
  YARD = 'yard',
}

export enum AreaUnit {
  SQUARE_METER = 'square_meter',
  SQUARE_CENTIMETER = 'square_centimeter',
  SQUARE_INCH = 'square_inch',
  SQUARE_FEET = 'square_feet',
  SQUARE_YARD = 'square_yard',
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
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
  DISABLED = 'disabled',
  PER_BEACON = 'per_beacon',
  PER_DISTANCE = 'per_distance',
  PER_HOUR = 'per_hour',
  PER_DAY = 'per_day',
  PER_MONTH = 'per_month',
  PER_MANUAL = 'per_manual',
}

export enum BankAccountType {
  CHECKING = 'checking',
  SAVINGS = 'savings',
  CURRENT = 'current',
  BUSINESS = 'business',
  CREDIT = 'credit',
  LOAN = 'loan',
  INVESTMENT = 'investment',
  OTHER = 'other',
}
