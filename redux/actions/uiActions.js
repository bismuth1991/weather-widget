// action types
export const SET_LOADER = 'SET_LOADER';

// action creators
export const setLoader = ({ isLoading, feature }) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: isLoading,
  meta: {
    feature,
  },
});
