/**
 *
 * MapContainer
 *
 */

import React from 'react';
import { feature } from 'topojson-client';
import { geoMercator } from 'd3-geo';
import Map from '../Map';
import topoJSON from '../../data/hong-kong.topo';
import markerData from '../../data/public-housing-marker-data';

export default function MapContainer() {
  const mapWidth = 800;
  const mapHeight = 680;
  const projection = geoMercator()
    .rotate([-114.1095, -22.3964])
    .scale(70000)
    .translate([mapWidth / 2, mapHeight / 2]);
  const topoJSONFeatures = feature(topoJSON, topoJSON.objects['hong-kong']).features;
  const countryStyles = {
    fill: 'white',
    stroke: 'black',
    strokeWidth: 0.5
  };
  const markerStyles = {
    fill: 'black',
    stroke: 'black',
    r: 1
  };

  return (
    <div>
      <Map
        width={mapWidth}
        height={mapHeight}
        projection={projection} 
        topoJSONFeatures={topoJSONFeatures}
        countryStyles={countryStyles}
        markerData={markerData}
        markerStyles={markerStyles} />
    </div>
  );
}