import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import forecastReducer from './reducers/forecastReducer';
import uiReducer from './reducers/uiReducer';

import apiMiddleware from './middlewares/core/apiMiddleware';
import stateFreezer from './reducerEnhancers/stateFreezer';
import forecastMiddleware from './middlewares/feature/forecastMiddleware';
import dataTransformMiddleware from './middlewares/core/dataTransformMiddleware';

const rootReducer = combineReducers({
  entities: forecastReducer,
  ui: uiReducer,
});

const featureMiddlewares = [
  forecastMiddleware,
];

const coreMiddlewares = [
  apiMiddleware,
  dataTransformMiddleware,
  logger,
];

const configureStore = (preloadedState = {}) => createStore(
  stateFreezer(rootReducer),
  preloadedState,
  applyMiddleware(...featureMiddlewares, ...coreMiddlewares),
);

export default configureStore;
