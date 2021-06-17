
import { Card, CardBody, CardTitle } from "reactstrap";
import LayoutNew from "../LayoutNew";

import React, { useEffect, useState } from 'react'
import { apiRequest } from "../../utils/CmoApi";
import { MDBDataTable } from "mdbreact";
import FormDateSection from "../components/FormDateSection";
import { useTranslation } from "react-i18next";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import WithHoc from "../../hoc/WithHoc";
import ExcelButton from "../../components/ExcelButton";
import swal from 'sweetalert';

const MainDepartmentApplication = () => {

  const [baseDepartmentData, setBaseDepartmentData] = useState([]);
  const {t, i18n} = useTranslation("title_");

  const tabalData = {
    columns: i18n.language === "en" ? titleEn.maindepartment.coloumn : titleHi.maindepartment.coloumn ,
    rows: baseDepartmentData
  };

   useEffect(() => {
    const getBaseDepartmentData =async () => {
      let info = await apiRequest.getBaseDepartmentData();
      if(info){
        setBaseDepartmentData(info);
      }
      else{
        setBaseDepartmentData([]);
        return swal("Oops!", "Something went wrong!", "error");
      }
    }
    getBaseDepartmentData();
   }, [])

  const getDataFromDate = async (data) => {
    const info = await apiRequest.getRecordMainDepartmentBasedOnDate(data);
    if(info){
      setBaseDepartmentData(info);
    }
    else{
      setBaseDepartmentData([]);
      return swal("Oops!", "Something went wrong!", "error");
    }
  }

  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
             {t("maindepartment.title")}
           </h4>
         </CardTitle>
         <CardBody>
          <FormDateSection searchByDate={getDataFromDate}/>
          <ExcelButton filename="MainDepartmentSheet"/>
          <MDBDataTable
            responsive
            bordered
            hover
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
 
export default WithHoc(MainDepartmentApplication);