import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import {store} from './store/index';
import './index.css';
import {CustomRoutes} from './routes/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CustomRoutes/>
    </BrowserRouter>
  </Provider>
);
