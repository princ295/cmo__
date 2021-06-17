
import React, { useState } from 'react';


import { Row, Form, Button } from "react-bootstrap";
import { Col, Container } from 'reactstrap';


import { useForm } from "react-hook-form";

import { fadeInUpBig } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { useTranslation } from 'react-i18next';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeInUpBig, 'fadeInUpBig')
  }
}

const FormDateSection = ({ searchByDate }) => {

  const { handleSubmit, register } = useForm();
  const [visibal, setVisibal] = useState(false);
  const { t } = useTranslation("title_");
  
  const onSubmit = (data) => {
   searchByDate(data);
  }

  return (
    <React.Fragment>
      <Button style={{background: '#145195'}}
        onClick={() => setVisibal(!visibal)} 
        className="mb-4" 
        size="sm">
        {t("btn")}
      </Button>
      {visibal ?
        <Container>
          <StyleRoot>
            <form style={styles.bounce} onSubmit={handleSubmit(onSubmit)}>
    
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  {t("formdate")}
                </Form.Label>
                <Col sm="4">
                  <Form.Control ref={register} type="date" size="sm" name="fromdate"/>
                </Col>
                <Form.Label column sm="2">
                  {t("todate")}
                </Form.Label>
                <Col sm="4">
                  <Form.Control ref={register} type="date" size="sm" name="todate"/>
                </Col>
              </Form.Group>
              <div class="col-md-12 text-center">
                <Button type="submit" style={{background: '#145195'}}>{t("search")}</Button>
              </div>
            </form> 
            <hr/>
          </StyleRoot>
        </Container>
        : null
      }
    </React.Fragment>
  );
}
 
export default FormDateSection;