import React from 'react';
import { Provider } from 'react-redux';
import { instanceOf } from 'prop-types';

import AppContaier from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppContaier />
  </Provider>
);

export default Root;

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};
