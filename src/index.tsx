import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'containers';
import { store } from 'ducks';
import { DATABASE_NAME, openDatabase } from 'db';
import './index.sass';

openDatabase(DATABASE_NAME, 1);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
