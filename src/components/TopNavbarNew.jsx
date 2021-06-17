import React from "react";
import { Navbar, Nav, NavDropdown, FormControl, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

// import topnavbarEn from "../translate/en/topnavbar.json";
// import topnavbarHi from "../translate/hi/topnavbar.json";
import { useTranslation } from "react-i18next";
import ModalBlock from "./ModalBlock";
import { useDispatch, useSelector } from "react-redux";
import { selectModalState } from "../store/modal/selector";
import { Label, Button } from "reactstrap";
import { setModalStatus } from "../store/modal/actionCreator";
import { useForm } from "react-hook-form";


import translate from "../translate/navSubMenuItem.json";

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const Schema = yup.object().shape({
  applicationId: yup.string().required()
})



const TopNavbarNew = () => {

  const { i18n } = useTranslation("");
  const dispatch = useDispatch();
  const modal = useSelector(selectModalState);

  const history = useHistory();
  const { handleSubmit, errors, register} = useForm({
    resolver: yupResolver(Schema)
  });

  const handleOnClickSamajhBhet = (data) => {
    dispatch(setModalStatus(undefined));
    history.push(`/letter_description/${data.applicationId}`);
  }

  const handleOnClickJunPratinidhi = (data) => {
    dispatch(setModalStatus(undefined));
    history.push(`/letter_description/${data.applicationId}`);
  }

  return (
    <>
      <nav className="topnav mt-2">
      {/* <Container> */}
        <Navbar collapseOnSelect expand="lg" bg="#145195" variant="light" style={{paddingLeft: 0, paddingRight: 0}}>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="mr-auto">
            {
              i18n.language==="en" ? 
              <>
                <Link key="1234" to="/cmocgdemo" className="nav-link">
                  Home
                </Link>
                <NavDropdown title="Chief Minister's Office" 
                  id="minister_element"
                  onMouseEnter={(e) => document.getElementById("minister_element").click()} 
                  aria-expanded="true">
                  {
                    translate.navSubItmeEn[0].map((item,index) => (
                      <Link key={index+"cmEn"} to={item.path} className="dropdown-item">
                        {item.item}
                      </Link> 
                    ))
                  }
                </NavDropdown>


                <NavDropdown title="Review of Applications" 
                  id="minister_samichha"
                  onMouseEnter={(e) => document.getElementById("minister_samichha").click()} 
                  className="show" 
                  aria-expanded="true">

                  <Link to="office_address"
                    style={{cursor: 'pointer'}}
                    onMouseEnter={(e) => document.getElementById("minister_samichha").click()}
                    onClick={() => dispatch(setModalStatus("application"))}
                    className="dropdown-item">
                    Letter status
                  </Link>
                  {
                    translate.navSubItmeEn[1].map((item, index) => (
                      <Link  to={item.path} key={index+"revirw"} className="dropdown-item">
                        {item.item}
                      </Link> 
                    ))
                  }
                </NavDropdown>


                <NavDropdown title="Public Representatives Letter" 
                  id="minister_pratinidhi"
                  onMouseEnter={(e) => document.getElementById("minister_pratinidhi").click()} 
                  className="show" 
                  aria-expanded="true">

                  <Link to="office_address"
                    style={{cursor: 'pointer'}}
                    onMouseEnter={(e) => document.getElementById("minister_pratinidhi").click()}
                    onClick={() => dispatch(setModalStatus("application"))}
                    className="dropdown-item">
                    Letter status
                  </Link>
                  {
                    translate.navSubItmeEn[2].map((item, index) => (
                      <Link  to={item.path} key={index+"rep"} className="dropdown-item">
                        {item.item}
                      </Link> 
                    ))
                  }
                </NavDropdown>


                <a key="5678" href="https://www.facebook.com/ChhattisgarhCMO/" rel="noreferrer" target="_blank" className="nav-link">
                  Chief Minister's Office Facebook
                </a>
                <a key="6789" href="https://janchaupal.cg.nic.in/" rel="noreferrer" target="_blank" className="nav-link">
                  Jan-Chaupa
                </a>
                <a key="7890" href="http://dprcg.gov.in/" rel="noreferrer" target="_blank" className="nav-link">
                  News
                </a>
              </> : 
              <>
                <Link key="1234" to="/home" className="nav-link">
                  मुख्य पृष्ठ
                </Link>

                <NavDropdown title="मुख्यमंत्री कार्यालय" 
                  id="minister_element"
                  onMouseEnter={(e) => document.getElementById("minister_element").click()} 
                  aria-expanded="true">
                  {
                    translate.navSubItmeHi[0].map((item,index) => (
                      <Link key={index+"cmHi"} to={item.path} className="dropdown-item">
                        {item.item}
                      </Link> 
                    ))
                  }
                </NavDropdown>

                <NavDropdown title="अनुप्रयोगों की समीक्षा" 
                  id="minister_samichha"
                  onMouseEnter={(e) => document.getElementById("minister_samichha").click()} 
                  className="show" 
                  aria-expanded="true">

                  <Link to="office_address"
                    style={{cursor: 'pointer'}}
                    onMouseEnter={(e) => document.getElementById("minister_samichha").click()}
                    onClick={() => dispatch(setModalStatus("application"))}
                    className="dropdown-item">
                    पत्र की स्थिति
                  </Link>
                  {
                    translate.navSubItmeHi[1].map((item, index) => (
                      <Link  to={item.path} key={index+"revirw"} className="dropdown-item">
                        {item.item}
                      </Link> 
                    ))
                  }
                </NavDropdown>

                <NavDropdown title="जनप्रतिनिधि पत्र" 
                  id="minister_pratinidhi"
                  onMouseEnter={(e) => document.getElementById("minister_pratinidhi").click()} 
                  className="show" 
                  aria-expanded="true">

                  <Link to="office_address"
                    style={{cursor: 'pointer'}}
                    onMouseEnter={(e) => document.getElementById("minister_pratinidhi").click()}
                    onClick={() => dispatch(setModalStatus("application"))}
                    className="dropdown-item">
                    पत्र की स्थिति
                  </Link>
                  {
                    translate.navSubItmeHi[2].map((item, index) => (
                      <Link  to={item.path} key={index+"rep"} className="dropdown-item">
                        {item.item}
                      </Link> 
                    ))
                  }
                </NavDropdown>

                <a key="5678" href="https://www.facebook.com/ChhattisgarhCMO/" rel="noreferrer" target="_blank" className="nav-link">
                  मुख्यमंत्री कार्यालय फेसबुक
                </a>
                <a key="6789" href="https://janchaupal.cg.nic.in/" rel="noreferrer" target="_blank" className="nav-link">
                  जन-चौपाल
                </a>
                <a key="7890" href="http://dprcg.gov.in/" rel="noreferrer" target="_blank" className="nav-link">
                  समाचार
                </a>
              </>
            }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      {/* </Container> */}
      </nav>
      <ModalBlock visibal={modal.visibal === 'application'} title="समक्ष भेंट के पत्र की स्थिति">
        <form onSubmit={handleSubmit(handleOnClickSamajhBhet)}>
          <Label> आवेदन क्रमांक - </Label> 
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Application Number"
              ref={register}
              name="applicationId"
            />
          </InputGroup>
          <small className="text-danger">
            {errors.applicationId?.message}
          </small>  
          <Button className="float-right" type="submit"> Find Out</Button>
        </form>
      </ModalBlock>

      <ModalBlock visibal={modal.visibal === 'application_jun'} title="जनप्रतिनिधियों के पत्र की स्थिति">
        <form onSubmit={handleSubmit(handleOnClickJunPratinidhi)}>
          <Label> आवेदन क्रमांक - </Label> 
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Application Number"
              ref={register}
              name="applicationId"
            />
          </InputGroup>
          <small className="text-danger">
            {errors.applicationId?.message}
          </small>  
          <Button className="float-right" type="submit"> Find Out</Button>
        </form>
      </ModalBlock>
    </>
  );
}
 
export default TopNavbarNew;