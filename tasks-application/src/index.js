import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Store persist:
import { store } from '../src/Redux/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
