
import React, { useEffect, useState } from 'react';

import { FormGroup } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Card, CardBody, CardTitle, Label } from "reactstrap";
import { apiRequest } from "../../utils/CmoApi";
import LayoutNew from "../LayoutNew";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import { useTranslation } from 'react-i18next';
import ExcelButton from '../../components/ExcelButton';
import { MDBDataTable } from 'mdbreact';
import WithHoc from '../../hoc/WithHoc';

import swal from 'sweetalert';

const LetterDescription = () => {

  const [application, setApplication] = useState({});
  const [loader, setLoader] = useState(undefined);
  const [data, setData] = useState([])
  const {t, i18n } = useTranslation("title_");

  const { id } = useParams();

  useEffect(() => {
    const getLetterStatusByComplainId = async () => {
      const info = await apiRequest.getLetterStatusByComplainId(id);
      if(info.length){
        setApplication(pre => {
          return {...pre, ...info[0]}
        });
        setData(info);
        setLoader(true)
      }
      else{
        setLoader(false) 
        return swal("Oops!", "Something went wrong!", "error");
      }
    }
    getLetterStatusByComplainId();
  },[id, loader])



  
  // useEffect(async () => {
  //   (function fun() {
  //     getLetterStatusByComplainId();
  //   })()
  // }, [])


  const tabalData = {
    columns: i18n.language === "en" ? titleEn.cgnicin.coloumn: titleHi.cgnicin.coloumn,
    rows: data,
  };
  
  return (
    <LayoutNew>
      <div className="container mt-5">
      <Card>
       <CardTitle>
        <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
         {t("patra")}
        </h4>
        </CardTitle>
       <CardBody>
         
             <FormGroup>
              <Row>
                <Col sm={2} md={2} >
                  <Label>पत्र क्रमांक -</Label>
                </Col>
                <Col sm={4}>
                  <Label>{application.complaintID}</Label>
                </Col>
                <Col sm={2}>
                  <Label>दिनांक -</Label>
                </Col>
                <Col sm={4}>
                  <Label>{application.datetimestamp}</Label>
                </Col>
              </Row>
              <Row>
                <Col sm={2} md={2} >
                  <Label>आवेदक का नाम -</Label>
                </Col>
                <Col sm={4}>
                  <Label>{application.name}</Label>
                </Col>
                <Col sm={2}>
                  <Label>आवेदक का जिला -</Label>
                </Col>
                <Col sm={4}>
                  <Label>{application.dist_name}</Label>
                </Col>
                </Row>
                <Row>
                <Col sm={2} md={2} >
                  <Label>आवेदक का पता -</Label>
                </Col>
                <Col sm={4}>
                  <Label>{application.address}</Label>
                </Col>
                </Row>
                <Row>
                <Col sm={2} md={2} >
                  <Label>विषय -</Label>
                </Col>
                <Col sm={4}>
                  <Label>{application.subject}</Label>
                </Col>
                </Row>
              </FormGroup>
              <hr/>
              <h6 className="mb-4"><b> कार्यवाही विवरण </b></h6>

              <FormGroup>
              <Row>
                <Col sm={2} md={2} >
                  <Label>पत्र की स्थिति -</Label>
                </Col>
                <Col sm={4}>
                  {/* <Label>पत्र क्रमांक -</Label> */}
                </Col>
                {/* <Col sm={2}>
                  <Label>अधिकारी का पद -</Label>
                </Col>
                <Col sm={4}>
                  <Label>पत्र क्रमांक -</Label>
                </Col> */}
              </Row>
              <Row>
                {/* <Col sm={2} md={2} >
                  <Label>विभाग का नाम -</Label>
                </Col>
                <Col sm={4}>
                  <Label>पत्र क्रमांक -</Label>
                </Col> */}
              </Row>
            </FormGroup>
            <ExcelButton filename="cgnicin"/>
            <MDBDataTable
              responsive
              bordered
              //  hover
              id="table"
              data={tabalData}
              paging={true}
              sortable={false}
             />
         
       </CardBody>
      </Card>
      </div>
    </LayoutNew>
  );
}
 
export default WithHoc(LetterDescription);