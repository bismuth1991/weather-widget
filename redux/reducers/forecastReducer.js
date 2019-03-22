import { SET_FORECAST } from '../actions/forecastActions';

const initialState = {};

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST:
      return action.payload;
    default:
      return state;
  }
};

export default forecastReducer;
