import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Use this GeoJSON file for the map
const geoUrl =
  'https://raw.githubusercontent.com/johan/world.geo.json/refs/heads/master/countries.geo.json';

const WorldMap = ({ visited }) => {
  return (
    <ComposableMap
      projectionConfig={{ scale: 160 }}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isVisited = visited.some(
              (country) => country.code === geo.properties.ISO_A2
            );

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isVisited ? '#007aff' : '#EEE'}
                stroke="#DDD"
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#F53', outline: 'none' },
                  pressed: { outline: 'none' },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default WorldMap;