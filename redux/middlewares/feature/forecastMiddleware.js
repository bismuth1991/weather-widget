import { setLoader } from '../../actions/uiActions';

import {
  API_ERROR,
  API_SUCCESS,
  apiRequest,
} from '../../actions/apiActions';

import {
  FORECAST,
  FETCH_FUTURE_FORECAST,
  setForecast,
  FETCH_TODAY_FORECAST,
} from '../../actions/forecastActions';

const forecastMiddleware = () => next => (action) => {
  next(action);

  switch (action.type) {
    case FETCH_FUTURE_FORECAST:
      next(apiRequest({
        // url: `https://api.openweathermap.org/data/2.5/forecast?zip=${action.payload}&APPID=f47e1ea1fcd7dfc3392ea742b62c2dae&units=imperial`,
        url: `api.openweathermap.org/data/2.5/forecast?zip=${action.payload}`,
        method: 'GET',
        feature: FORECAST,
      }));

      next(setLoader({
        isLoading: true,
        feature: FORECAST,
      }));

      break;

      // case FETCH_TODAY_FORECAST:
      //   next(apiRequest({
      //     url: `https://api.openweathermap.org/data/2.5/forecast?zip=${action.payload}&APPID=f47e1ea1fcd7dfc3392ea742b62c2dae&units=imperial`,
      //     method: 'GET',
      //     feature: FORECAST,
      //   }));

      //   next(setLoader({
      //     isLoading: true,
      //     feature: FORECAST,
      //   }));

      //   break;

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
