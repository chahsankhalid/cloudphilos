import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import global_en from './translation/en/global.json'
import global_de from './translation/de/global.json'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    de: {
      global: global_de
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter >
  <I18nextProvider i18n = {i18next}>
    <App />
    </I18nextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
