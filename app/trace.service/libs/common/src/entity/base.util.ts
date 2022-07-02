import { Geometry, Point, Polygon } from 'geojson';
import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';
import * as wkx from 'wkx';

export type Circle = Point & {
  properties?: {
    subType: 'Circle';
    radius: number;
  };
};

export type Rectangle = Polygon & {
  properties?: {
    subType: 'Rectangle';
  };
};

export type GeometryExtended = Geometry | Circle | Rectangle;
export class GeometryTransformer implements ValueTransformer {
  to(geojson: GeometryExtended | undefined | null | string) {
    return !geojson ? geojson : wkx.Geometry.parseGeoJSON(geojson).toWkt();
  }

  from(wkb: any | undefined | null | string) {
    return !wkb ? wkb : wkx.Geometry.parse(Buffer.from(wkb, 'hex')).toGeoJSON();
  }
}
