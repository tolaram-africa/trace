import {
  Geometry as DefaultGeometry,
  Point,
  Polygon,
  Feature,
  MultiPolygon,
  MultiPoint,
  LineString,
  MultiLineString,
} from 'geojson';

// NOTE: https://docs.microsoft.com/en-us/azure/azure-maps/extend-geojson
export interface CircleFeature extends Feature {
  geometry: Point;
  properties: {
    subType: 'Circle';
    radius: number;
  };
}

export interface RectangleFeature extends Feature {
  geometry: Polygon;
  properties: {
    subType: 'Rectangle';
  };
}

export type PolygonFeature = Feature & {
  geometry: Polygon;
};

export type MultiPolygonFeature = Feature & {
  geometry: MultiPolygon;
};

export type MultiPointFeature = Feature & {
  geometry: MultiPoint;
};

export type LineStringFeature = Feature & {
  geometry: LineString;
};

export type MultiLineStringFeature = Feature & {
  geometry: MultiLineString;
};

export type GeometryFeature = Feature & {
  geometry: DefaultGeometry;
};

export {
  Point,
  Polygon,
  Feature,
  Position,
  BBox,
  FeatureCollection,
  MultiPolygon,
  MultiPoint,
  LineString,
  MultiLineString,
  GeometryCollection,
  GeoJsonObject,
  GeoJsonProperties,
} from 'geojson';

export type CustomFeature =
  | MultiPointFeature
  | CircleFeature
  | RectangleFeature
  | PolygonFeature
  | MultiPolygonFeature
  | LineStringFeature
  | MultiLineStringFeature;

export type Geometry = DefaultGeometry | CustomFeature | GeometryFeature;

export enum GeometryType {
  FEATURE = 'Feature',
  POINT = 'Point',
  CIRCLE = 'Circle',
  MULTIPOINT = 'MultiPoint',
  LINESTRING = 'LineString',
  MULTILINESTRING = 'MultiLineString',
  RECTANGLE = 'Rectangle',
  POLYGON = 'Polygon',
  MULTIPOLYGON = 'MultiPolygon',
  GEOMETRYCOLLECTION = 'GeometryCollection',
}
