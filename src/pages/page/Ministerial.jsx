import React, { useState } from 'react';

import LayoutNew from "../LayoutNew";
import { Card, CardBody, CardTitle } from 'reactstrap';
import { MDBDataTable } from "mdbreact";

import FormSection from "../components/FormSection";
import { apiRequest } from "../../utils/CmoApi";
import { useTranslation } from "react-i18next";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import WithHoc from "../../hoc/WithHoc";
import ExcelButton from "../../components/ExcelButton";
import { useEffect } from 'react';

import swal from 'sweetalert';

const Ministerial = () => {

  const [data, steData] = useState([]);
  const {t, i18n } = useTranslation("title_");

  useEffect(() => {
    const getDistrictHODDetailList = async () => {
      let info = await apiRequest.getDistrictHODDetailList({
        category: '005', applicantCategory: 0, districtCode: 11, fromdate: 0, todate: 0, reportType: 3
      });
      if(info){
        steData(info);
      }else {
        steData([]);
        return swal("Oops!", "Something went wrong!", "error");
      }
    }
    getDistrictHODDetailList();
  },[])




  const getDataFromDate = async (data) => {
    let info = await apiRequest.getDistrictHODDetailList({
      category: '005', applicantCategory: 0, districtCode: 11, fromdate: data.fromdate, todate: data.todate, reportType: 3
    });
    steData(info);
  }

  const tabalData = {
    columns: i18n.language === "en" ? titleEn.minsteral.coloumn: titleHi.minsteral.coloumn,
    rows: data,
  };
  
  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
            {t("minsteral.title")}
           </h4>
         </CardTitle>
         <CardBody>
            <FormSection searchByDate={getDataFromDate}/> 
            <ExcelButton filename="ministerial"/>
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
 
export default WithHoc(Ministerial);