import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import generateStore from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = generateStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();