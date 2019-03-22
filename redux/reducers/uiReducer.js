import { SET_LOADER } from '../actions/uiActions';

const initialState = {
  loading: true,
};

const uiReducer = (state = initialState, action) => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
