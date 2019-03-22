import React from 'react';

import ForecastItem from './ForecastItem';

const ForecastPane = ({ forecastData }) => (
  <ul>
    {forecastData.map(forecastItem => (
      <li key={forecastItem.dt}>
        <ForecastItem {...forecastItem} />
      </li>
    ))}
  </ul>
);

export default ForecastPane;
