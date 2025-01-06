// src/App.js

import React, { useState } from 'react';
import countriesData from './data/countries';
import { WorldMap } from './components/WorldMap';

function App() {
  const [visited, setVisited] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [includeInCount, setIncludeInCount] = useState(true);

  // OPTIONAL: if you want a text search filter, you can add state for that:
  // const [searchValue, setSearchValue] = useState('');

  // Handle dropdown selection
  const handleSelect = (e) => {
    const code = e.target.value;
    const found = countriesData.find((c) => c.code === code);
    setSelectedCountry(found || null);
    setIncludeInCount(true); // Reset checkbox each time a new country is selected
  };

  // Save the visit
  const handleSaveVisit = () => {
    if (!selectedCountry) return;

    // Check if already visited
    const alreadyVisited = visited.some((v) => v.code === selectedCountry.code);

    if (!alreadyVisited) {
      setVisited((prev) => [
        ...prev,
        {
          ...selectedCountry,
          included: includeInCount,
        },
      ]);
    } else {
      // If already in visited, update the included status
      setVisited((prev) =>
        prev.map((v) =>
          v.code === selectedCountry.code
            ? { ...v, included: includeInCount }
            : v
        )
      );
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>WIBI - Where I've Been Inclusive</h1>

      <div style={{ marginBottom: '20px' }}>
        {/* Simple dropdown */}
        <select onChange={handleSelect} value={selectedCountry?.code || ''}>
          <option value="">-- Select a country --</option>
          {countriesData.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="includeInCount" style={{ marginRight: '8px' }}>
            <input
              id="includeInCount"
              type="checkbox"
              checked={includeInCount}
              onChange={() => setIncludeInCount((prev) => !prev)}
            />
            Include in country count?
          </label>
          <button type="button" onClick={handleSaveVisit}>
            Save visit
          </button>
        </div>
      )}

      {/* Display the WorldMap, highlighting visited countries */}
      <WorldMap visited={visited} />

      {/* Optional: Show a list of visited countries */}
      <h2>Visited Countries</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {visited.map((v) => (
          <li key={v.code}>
            {v.name} | Included: {v.included ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
