import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// translation
import homeEn from "./translate/en/home.json";
import homeHi from "./translate/hi/home.json";

import navbarEn from "./translate/en/navbar.json";
import navbarHi from "./translate/hi/navbar.json";

import pmHi from "./translate/hi/pm.json";
import pmEn from "./translate/en/pm.json";

import tableHi from "./translate/hi/table.json";
import tableEn from "./translate/en/table.json";

import titleHi from "./translate/hi/title.json";
import titleEn from "./translate/en/title.json";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store/store";


i18next.init({
  interpolation: {escapeValue: false},
  lng: "hi",
  resources: {
    en: {
      home_: homeEn,
      navbar_: navbarEn,
      pm_:pmEn,
      table: tableHi,
      title_: titleEn
    },
    hi: {
      home_: homeHi,
      navbar_: navbarHi,
      pm_: pmHi,
      table: tableEn,
      title_: titleHi
    }
  },
})

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Router 
      // basename="/cmocgdemo" 
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    {/* </SwitchTextSize> */}
  </I18nextProvider>,
  document.getElementById('root')
);
