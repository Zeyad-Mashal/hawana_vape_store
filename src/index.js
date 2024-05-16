import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import globel_en from "./translation/globel_en.json";
import globel_ar from "./translation/globel_ar.json";
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
i18next.init({
  interpolation: { escapeValue: false },
  lng: "ar",
  resources: {
    ar: {
      globel: globel_ar
    },
    en: {
      globel: globel_en
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

