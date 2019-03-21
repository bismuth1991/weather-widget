import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(
    <App />,
    root,
  );
});
