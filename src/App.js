import React, { useState } from 'react';
import countriesData from './data/countries';
import WorldMap from './components/WorldMap';
import './styles/App.css'; // Custom CSS for Apple-inspired styling.

function App() {
  const [visited, setVisited] = useState([]); // List of visited countries
  const [view, setView] = useState('select'); // View: 'select' or 'map'
  const [searchQuery, setSearchQuery] = useState(''); // Search query

  // Filter countries based on the search query
  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle a country's "visited" state
  const toggleVisited = (countryCode) => {
    setVisited((prev) => {
      const isVisited = prev.some((c) => c.code === countryCode);

      if (isVisited) {
        return prev.filter((c) => c.code !== countryCode);
      } else {
        const country = countriesData.find((c) => c.code === countryCode);
        return [...prev, { ...country, included: true }];
      }
    });
  };

  const handleSave = () => setView('map');
  const handleBackToSelect = () => setView('select');

  return (
    <div className="app-container">
      {view === 'select' ? (
        <div className="select-view">
          <h1>Select Countries You've Visited</h1>
          <input
            type="text"
            placeholder="Search countries..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="countries-list">
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                className={`country-item ${
                  visited.some((c) => c.code === country.code) ? 'selected' : ''
                }`}
                onClick={() => toggleVisited(country.code)}
              >
                <span className="flag">{country.flag}</span>
                <span className="name">{country.name}</span>
              </div>
            ))}
          </div>
          <button className="save-button" onClick={handleSave}>
            Save and View Map
          </button>
        </div>
      ) : (
        <div className="map-view">
          <button className="back-button" onClick={handleBackToSelect}>
            ⏎ Back to Selection
          </button>
          <WorldMap visited={visited} />
        </div>
      )}
    </div>
  );
}

export default App;