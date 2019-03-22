import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

import configureStore from './redux/store';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();

  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
