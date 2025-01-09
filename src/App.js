import React, { useState } from 'react';
import countriesData from './data/countries'; // Import your countries data
import './styles/App.css'; // Optional CSS for styling

function App() {
  const [visited, setVisited] = useState([]); // List of visited countries
  const [searchQuery, setSearchQuery] = useState(''); // Search query

  // Filter countries based on the search query
  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle a country's "visited" state
  const toggleVisited = (countryCode) => {
    setVisited((prev) => {
      const isVisited = prev.includes(countryCode);
      if (isVisited) {
        return prev.filter((code) => code !== countryCode); // Remove from visited
      } else {
        return [...prev, countryCode]; // Add to visited
      }
    });
  };

  return (
    <div className="app-container">
      <h1>Countries Visited</h1>
      <p>Total: {visited.length}</p> {/* Display total count at the top */}
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
              visited.includes(country.code) ? 'selected' : ''
            }`}
            onClick={() => toggleVisited(country.code)}
          >
            <span className="flag">{country.flag}</span>
            <span className="name">{country.name}</span>
          </div>
        ))}
      </div>
      <div className="results">
        <h2>Your Visited Countries</h2>
        {visited.length === 0 ? (
          <p>No countries selected yet.</p>
        ) : (
          <ul>
            {visited.map((code) => {
              const country = countriesData.find((c) => c.code === code);
              return <li key={code}>{country.name}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;