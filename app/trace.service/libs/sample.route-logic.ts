/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-empty-function */
// const fetch = require('node-fetch');
/*
const polyline = require('@mapbox/polyline');
const turf = require('@turf/turf');
const fs = require('fs');

const options = {
  locations: [
    {
      lat: 6.8167,
      lon: 3.42691,
    },
    {
      lat: 9.14494,
      lon: 7.53636,
    },
  ],
  directions_type: 'none',
  costing: 'truck',
  costing_options: {
    truck: {
      shortest: true,
      top_speed: 45,
      weight: 40,
      axle_load: 40,
      use_highways: 1,
    },
  },
};

fetch('http://localhost:4568/api/routing/route', {
  method: 'POST',
  body: JSON.stringify(options),
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((json) => {
    const poyline = json.trip.legs[0].shape;
    const line = polyline.decode(poyline, 6);
    const geoJSON = polyline.toGeoJSON(poyline, 6);
    const turfLine = turf.lineString(line);
    const point = turf.point([7.3812, 3.8998]);
    const snapped = turf.nearestPointOnLine(turfLine, point);
    const nearestPoint = turf.pointToLineDistance(point, turfLine);
    const percentage = (snapped.properties.index / line.length) * 100;

    const maxTolerance = 4;
    console.log('Percentage - 0:', Math.round(percentage) + '%');
    console.log('On Route:', Math.round(nearestPoint) < maxTolerance);
    console.log('Nearest route distance:', Math.round(nearestPoint));

    const gs2Line = geoJSON.coordinates;
    const newLine = gs2Line.slice(snapped.properties.index, gs2Line.length + 1);
    const turfNewLine = turf.lineString(newLine);
    const totalDist = turf.length(turfLine);
    const coveredDist = totalDist - turf.length(turfNewLine);
    const percentage1 = (coveredDist / totalDist) * 100;
    console.log('Percentage - 1: ', Math.round(percentage1) + '%');
    console.log('Covered distance: ', Math.round(coveredDist) + 'km');
    console.log('Total distance: ', Math.round(totalDist) + 'km');

    let nextValue = 0;
    const averageRange = Math.floor(newLine.length / 9);

    const reduct = (total, value, index) => {
      if (index === nextValue) {
        nextValue += averageRange;
        total.push(value);
      }
      return total;
    };
    const lastPoint = newLine[newLine.length - 1];
    const newLineArray = newLine.reduce(reduct, []);
    newLineArray.push(lastPoint);
    console.log(newLineArray);

    const start = turf.point(snapped.geometry.coordinates);
    const isPointOnLine = turf.booleanPointOnLine(start, turfLine, {
      ignoreEndVertices: true,
    });
    console.log('isPointOnLine', isPointOnLine);

    fs.writeFile('test_poyline.txt', poyline, () => {});
    fs.writeFile('test_geojson.json', JSON.stringify(geoJSON), () => {});
    fs.writeFile('test_snapped.json', JSON.stringify(snapped), () => {});
    fs.writeFile('test_sliced.json', JSON.stringify(turfNewLine), () => {});
  })
  .catch((err) => console.log(err));
*/
