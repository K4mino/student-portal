import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import {store} from './store/index';
import './index.css';
import {CustomRoutes} from './routes/index';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <CustomRoutes/>
        </BrowserRouter>
      </Provider>
    </ChatContextProvider>
  </AuthContextProvider>
);

