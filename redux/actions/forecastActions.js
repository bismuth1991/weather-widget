export const FORECAST = '[Forecast]';

export const FETCH_TODAY_FORECAST = `${FORECAST} FETCH_TODAY`;
export const FETCH_FUTURE_FORECAST = `${FORECAST} FETCH_FUTURE`;
export const SET_FORECAST = `${FORECAST} SET_DATA`;
export const TRANSFORM_FORCAST_DATA = `${FORECAST} DATA_TRANSFORM`;

export const setForecast = ({ forecastData }) => ({
  type: SET_FORECAST,
  payload: forecastData,
  meta: {
    feature: FORECAST,
  },
});

export const transformData = ({ data }) => ({
  type: TRANSFORM_FORCAST_DATA,
  payload: data,
});

export const fetchFutureForecast = zipCode => ({
  type: FETCH_FUTURE_FORECAST,
  payload: zipCode,
});

export const fetchTodayForecast = zipCode => ({
  type: FETCH_TODAY_FORECAST,
  paload: zipCode,
});
