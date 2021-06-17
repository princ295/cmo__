import React from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import navbarEn from "./../translate/en/navbar.json";
import navbarHi from "./../translate/hi/navbar.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const menuItem = [
  {
    item: "Home",
    path: "/home"
  },
  {
    item: "Cm Profile", 
    subItem: [
      {item :"Chief Ministers Secretariat",path: "/cmo_office"}, 
      {item: "Chief Minister's Office Address", path: "/office_address"},
    ]
  },
  {
    item: "Chief Minister's Office Facebook",
    path: "https://www.facebook.com/ChhattisgarhCMO/"
  },{
    item: "Jan-Chaupal",
    path: "https://janchaupal.cg.nic.in/"
  },{
    item: "News",
    path: "http://dprcg.gov.in/"
  },
]

const TopNavbar = () => {

  const [topnav, setTopNav] = React.useState(true)
  const { t, i18n } = useTranslation("navbar_");

  // const { t, i18n} = useTranslation("home_");


  const navigateToNewTab = () => {
    window.open("", '_blank');
  }

  const changeHandlerTrue = (e) => {
    setTopNav(true)
  }

  const changeHandlerFalse = (e) => {
    setTopNav(false)
  }

  return (
    <nav className="topnav mt-2">
      <Navbar collapseOnSelect expand="lg" bg="#145195" variant="light" style={{paddingLeft: 0, paddingRight: 0}}>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="">

      <Nav className="mr-auto">
        {
          i18n.language==="en"?
          navbarEn.menuItem_.map((item,index) => {
            return(
             <React.Fragment>
                { 
                  !item.subItem ? 
                  <>
                    {
                      (item.path.includes('facebook') || item.path.includes('janchaupal') ||  item.path.includes('dprcg') )? 
                        <a href={`${item.path}`} target="_blank" className="nav-link">
                          {item.item}
                        </a>
                      : <Link to={`${item.path}`} className="nav-link">
                         <span  onClick={(e) => changeHandlerTrue(e)}> {item.item} </span>
                        </Link>
                    }
                  </>
                  : (
                      item.subItem ? 
                      <NavDropdown 
                      //  onChange={(e) => changeHandlerFalse(e)}
                       title={`${item.item} ----prince`} className="show" id="collasible-nav-dropdown" aria-expanded="true">{
                      item.subItem.map((item) => (
                        <Link onClick={changeHandlerFalse} to={item.path} className="dropdown-item">
                          {item.item}-----hello
                        </Link>
                      ))}
                      </NavDropdown>
                  : null
                 )
                }
             </React.Fragment>
            )
          }) :  navbarHi.menuItem_.map((item,index) => {
            return(
             <React.Fragment>
                { 
                  !item.subItem ? 
                  <>
                    {
                      (item.path.includes('facebook') || item.path.includes('janchaupal') ||  item.path.includes('dprcg') )? 
                        <a href={`${item.path}`} target="_blank" className="nav-link">
                          {item.item} ========
                        </a>
                      : <Link to={`${item.path}`} className="nav-link">
                         <span  onClick={(e) => changeHandlerTrue(e)}> {item.item}========= </span>
                        </Link>
                    }
                  </>
                  : (
                      item.subItem ? 
                      <NavDropdown  onChange={(e) => changeHandlerFalse(e)} title={`${item.item}`} className="show" id="collasible-nav-dropdown" aria-expanded="true">{
                      item.subItem.map((item) => (
                        <Link onClick={changeHandlerFalse} to={item.path} className="dropdown-item">
                          {item.item}
                        </Link>
                      ))}
                      </NavDropdown>
                  : null
                 )
                }
             </React.Fragment>
            )
          })
        }

      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </nav>
  );
}
 
export default TopNavbar;