import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { Provider } from 'react-redux';
import { App } from 'containers';
import { store } from 'ducks';
import { DATABASE_NAME, openDatabase } from 'db';

openDatabase(DATABASE_NAME, 1);

const jej = async () => {};

jej();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
