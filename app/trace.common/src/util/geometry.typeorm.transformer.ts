// import { Geometry } from 'geojson';
// import { ValueTransformer } from 'typeorm/decorator/options/ValueTransformer';
// import * as wkx from 'wkx';

// export class GeometryTransformer implements ValueTransformer {
//   to(geojson: Geometry | undefined | null | string) {
//     if (!geojson) return geojson;
//     let object: Geometry;
//     if (typeof geojson === 'string') object = JSON.parse(geojson);
//     else object = geojson;

//     return wkx.Geometry.parseGeoJSON(object).toWkt();
//   }

//   from(wkb: any | undefined | null | string) {
//     return !wkb ? wkb : wkx.Geometry.parse(Buffer.from(wkb, 'hex')).toGeoJSON();
//   }
// }
