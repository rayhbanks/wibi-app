// src/components/WorldMap.js

import React from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// This TopoJSON file often uses ISO_A2 property for country codes
const GEO_URL =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

export function WorldMap({ visited }) {
  return (
    <div style={{ width: '100%', maxWidth: 800, margin: 'auto' }}>
      <ComposableMap>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryCode = geo.properties.ISO_A2;
              // Check if this country is visited AND included
              const isVisited = visited.some(
                (item) => item.code === countryCode && item.included
              );

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isVisited ? '#42a5f5' : '#e0e0e0',
                      stroke: '#607d8b',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

WorldMap.propTypes = {
  visited: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      included: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
