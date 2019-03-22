import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

import entitiesReducer from './reducers/forecastReducer';
import uiReducer from './reducers/uiReducer';

import apiMiddleware from './middlewares/core/apiMiddleware';
import stateFreezer from './reducerEnhancers/stateFreezer';
import forecastMiddleware from './middlewares/feature/forecastMiddleware';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
});

const featureMiddlewares = [
  forecastMiddleware,
];

const coreMiddlewares = [
  apiMiddleware,
  logger,
];

const configureStore = (preloadedState = {}) => createStore(
  stateFreezer(rootReducer),
  preloadedState,
  applyMiddleware(...featureMiddlewares, ...coreMiddlewares),
);

export default configureStore;
