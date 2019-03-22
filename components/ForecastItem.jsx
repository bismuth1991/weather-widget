import React from 'react';
import { string, number } from 'prop-types';

const ForecastItem = ({
  dtText,
  status,
  high,
  low,
  humidity,
  wind,
  rain,
}) => (
  <div>
    <h2>{dtText}</h2>
    <p>{status}</p>
    <p>
      {`High: ${high}`}
      &deg;
    </p>
    <p>
      {`Low: ${low}`}
      &deg;
    </p>
    <p>{`Humidity: ${humidity}%`}</p>
    <p>{`Wind: ${wind}mph`}</p>
    <p>{`Rain: ${rain}% chance`}</p>
  </div>
);

ForecastItem.propTypes = {
  dtText: string.isRequired,
  status: string.isRequired,
  high: number.isRequired,
  low: number.isRequired,
  humidity: number.isRequired,
  wind: number.isRequired,
  rain: number.isRequired,
};

export default ForecastItem;
