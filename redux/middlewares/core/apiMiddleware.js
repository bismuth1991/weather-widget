import axios from 'axios';
import {
  API_REQUEST,
  apiSuccess,
  apiError,
} from '../../actions/apiActions';

const request = (url, method = 'GET', data) => (
  axios.request({
    url,
    method,
    data,
  })
);

const apiMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const { feature } = action.meta;
    const { url, method, data } = action.payload;

    request(url, method, data)
      .then(response => dispatch(apiSuccess(response.data, feature)))
      .catch(error => dispatch(apiError(error, feature)));
  }
};

export default apiMiddleware;
