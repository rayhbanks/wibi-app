import React from 'react';
import PropTypes from 'prop-types';


export function CountryList({ countries, onToggleInclude }) {
  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            <label htmlFor={`country-${country.code}`}>
              <input
                id={`country-${country.code}`}
                type="checkbox"
                checked={country.included}
                onChange={() => onToggleInclude(country.code)}
              />
              {country.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      included: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleInclude: PropTypes.func.isRequired,
};
