export const FORECAST = '[Forecast]';

export const FETCH_FORECAST = `${FORECAST} FETCH`;
export const SET_FORECAST = `${FORECAST} SET`;

export const setForecast = ({ forecastData }) => ({
  type: SET_FORECAST,
  payload: forecastData,
  meta: {
    feature: FORECAST,
  },
});
