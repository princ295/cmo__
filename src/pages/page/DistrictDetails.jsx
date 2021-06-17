
// district_details
import React, { useEffect, useState } from 'react';

import { FormGroup } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";

import { Card, CardBody, CardTitle, Label } from "reactstrap";

import LayoutNew from '../LayoutNew';
import { useParams } from 'react-router';
import { apiRequest } from '../../utils/CmoApi';

const DistrictDetails = () => {

  const [data, setData] = useState([])
  const { id } = useParams();

  useEffect(() => {
    if(id){
      let info = apiRequest.getDistrictHODDetailList({
        category: '005', applicantCategory: id, districtCode: 11, fromdate: 0, todate: 0, reportType: 1
      })
      console.log(data)
      setData(info)
    }
  },[id,data]) 


   return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
              विभागाध्यक्ष स्तर पर समक्ष भेंट श्रेणी के आवेदनों की संक्षिप्त स्थिति
           </h4>
         </CardTitle>
         <CardBody>
            <FormGroup>
             <Row>
               <Col sm={2} md={2} >
                 <Label>श्रेणी - श्रेणी</Label>
               </Col>
               <Col sm={2}>
                 {/* <Label>पत्र क्रमांक -</Label> */}
               </Col>
               <Col sm={2}>
                 <Label>जिला - district</Label>
               </Col>
               <Col sm={2}>
                 {/* <Label>पत्र क्रमांक -</Label> */}
               </Col>
               <Col sm={2}>
                 <Label>आवेदन का प्रकार -</Label>
               </Col>
               <Col sm={2}>
                 {/* <Label>पत्र क्रमांक -</Label> */}
               </Col>
             </Row>
            </FormGroup>
         </CardBody>
        </Card>
      </div>
    </LayoutNew> 
   );
}
 
export default DistrictDetails;