import React from "react";
import logo from "../assets/logo-dark-travel.png";

import SwitchTextSize from "react-font-size-resizer";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import openBox from "../assets/open-box.svg";

const Header = ({children}) => {


  const {t, i18n } = useTranslation("pm_");

  const selectLangage = (value) => {
    value === "Hindi" ?  i18n.changeLanguage("hi") :  i18n.changeLanguage("en")
  }

  return (
    <React.Fragment>
      <div className="topbar">
        <div className="container"> 
        <ul className="topbar__list">
          {/* <li className="topbar__list-item topbar__mq pr-1">
            भारत सरकार
          </li>
          <li className="topbar__list-item pl-1">
            GOVERNMENT OF INDIA
          </li> */}
          <a className="mr-2" rel="noreferrer" href="https://www.facebook.com/ChhattisgarhCMO/"  target="_blank">
            <FacebookIcon color="primary"/>
          </a>
          <a rel="noreferrer" className="mr-2" href="https://twitter.com/ChhattisgarhCMO?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <TwitterIcon color="primary"/>
          </a>
        </ul>
     
        <ul className="topbar__list">
          <li className="topbar__list-item">
            <SwitchTextSize  style={{
              font: '10px'
            }}
              default={100} 
              step={20} 
              min={60} 
              max={150} 
              suffix={"%"} 
              store={localStorage}
              storeKey="SwitchTextSize" 
            />
          </li>
          
          <li className="topbar__list-item">
          <select className="form-select"  onChange={(e) => selectLangage(e.target.value) }>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
          </li>
        </ul>
        </div>
      </div>
      <div className="container">
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <img className="header__logo-img" src={logo} alt="Logo"/>
          </div>
        </Link>
        <div className="header__button d-flex">
          <a rel="noreferrer" href="https://cmrf.cg.gov.in/donate.html" target="_blank" className="btn header__button-donate" style={{
            background: '#145194',
            color: '#fff',
            fontWeight: 'bold',
          }}
          
          >
           <span className="header__button-text">&nbsp;&nbsp;{t("info.cmfund")}</span>
           <span>
             {/* <FavoriteIcon style={{
               height: 20,
               fontSize: 20
             }}/> */}
             <img src={openBox} height="40" width="70" alt="Donate fund"/>
           </span> 
          </a>
        </div>
      </header>
      </div>
      {children} 
    </React.Fragment>
  );
}
 
export default Header;