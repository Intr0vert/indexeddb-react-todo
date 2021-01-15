import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { Provider } from 'react-redux';
import { App } from 'containers';
import { store } from 'ducks';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
