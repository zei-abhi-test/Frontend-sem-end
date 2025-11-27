import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './Context/UserContext.jsx';
import {Provider} from "react-redux"
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </Provider>
);
