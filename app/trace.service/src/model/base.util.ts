import { Geometry, Point, Polygon } from 'geojson';
import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';
import * as wkx from 'wkx';

export class GeometryTransformer implements ValueTransformer {
  to(geojson: Geometry) {
    return wkx.Geometry.parseGeoJSON(geojson).toWkt();
  }

  from(wkb: any) {
    return wkx.Geometry.parse(new Buffer(wkb, 'hex')).toGeoJSON();
  }
}

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
