
import React from "react";
import { StyleRoot } from 'radium';

import footer_one from "../assets/footer_one.jpg";
import footer_two from "../assets/footer_two.jpg";
import footer_three from "../assets/footer_three.jpg";
import footer_four from "../assets/footer_four.jpg";
import { Col, Row } from "react-bootstrap";

import logo from "../assets/logo_nicg.png";

const footerImage = [footer_one, footer_two, footer_three, footer_four]

const Footer = ()  => {

  return (
   <footer className="footer mt-5">
      <div className="container p-4">
     <StyleRoot>
       <div className="footer d-flex justify-content-center align-items-center mt-3 mb-5">
          {
            footerImage.map(item=>(
              <div key={Math.random()} className="mr-2 ml-1">
                <img className="footer__img" src={item} alt="foote images"/>     
              </div>
            ))
          }
        </div>
     </StyleRoot>
       <p className="footer__title mb-3 text-center">© Content Owned by Chief Minister Office of Chhattisgarh.</p>
       <Row>
         <Col md={10}>
          <p className="footer__subtext">
            All efforts have been made to make the information as accurate as possible. Chief Minister Office of Chhattisgarh or NIC, will not be 
            responsible for any damage caused by inaccuracy in the information available on this Website. Site Designed, Developed & Hosted By :
            <a rel="noreferrer" style={{color: '#fff', fontWeight: 'bold', textDecoration: 'none'}} href="https://chhattisgarh.nic.in/" target="_blank"> National Informatics Center, Chhattisgarh </a> 
          </p>
         </Col>
         <Col md={2}>
          <center>
            <img src={logo} alt="nic logo"/>
          </center>
         </Col>
       </Row>
     </div>
   </footer>
  )
}

export default Footer;