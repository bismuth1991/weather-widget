import { SET_FORECAST, FORECAST } from '../../actions/forecastActions';
import transform from '../utils/dataTransform';

const dataTransformMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type === SET_FORECAST && !action.hasTransformed) {
    dispatch({ type: `${FORECAST} TRANSFORM_DATA` });

    const transformedData = transform(action.payload);
    next({
      ...action,
      payload: transformedData,
      hasTransformed: true,
    });
  } else {
    next(action);
  }
};

export default dataTransformMiddleware;
