// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// action creators
export const apiRequest = ({ url, method, data, feature }) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: {
    url,
    method,
    data,
  },
  meta: {
    feature,
  },
});

export const apiSuccess = (response, feature) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: {
    feature,
  },
});

export const apiError = (error, feature) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: {
    feature,
  },
});
