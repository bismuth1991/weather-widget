import { setLoader } from '../../actions/uiActions';

import {
  API_ERROR,
  API_SUCCESS,
  apiRequest,
} from '../../actions/apiActions';

import {
  FORECAST,
  FETCH_FORECAST,
  setForecast,
} from '../../actions/forecastActions';

import transform from '../utils/dataTransform';


const forecastMiddleware = () => next => (action) => {
  next(action);

  switch (action.type) {
    case FETCH_FORECAST:
      next(apiRequest({
        url: 'https://api.openweathermap.org/data/2.5/forecast?zip=94102&appid=f47e1ea1fcd7dfc3392ea742b62c2dae&units=imperial',
        method: 'GET',
        feature: FORECAST,
        // dataTransformer: transform,
      }));

      next(setLoader({
        isLoading: true,
        feature: FORECAST,
      }));

      break;

    case `${FORECAST} ${API_SUCCESS}`:
      next(setForecast({
        forecastData: action.payload,
      }));

      next(setLoader({
        isLoading: false,
        feature: FORECAST,
      }));

      break;

    case `${FORECAST} ${API_ERROR}`:
      // next();

      next(setLoader({
        isLoading: false,
        feature: FORECAST,
      }));

      break;

    default:
      break;
  }
};

export default forecastMiddleware;
