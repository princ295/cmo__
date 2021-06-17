import { Card, CardBody, CardTitle } from "reactstrap";
import LayoutNew from "../LayoutNew";

import React, {useEffect, useState} from 'react'
import { apiRequest } from "../../utils/CmoApi";
import { MDBDataTable } from "mdbreact";
import FormSection from "../components/FormSection";
import { useTranslation } from "react-i18next";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import WithHoc from "../../hoc/WithHoc";
import ExcelButton from "../../components/ExcelButton";

import swal from 'sweetalert';

const DistrictApplication = () => {

  const [departmentData, setDepartmentData] = useState([]);
  const {t, i18n} = useTranslation("title_");
 
  const tabalData = {
    columns: i18n.language === "en" ? titleEn.district.coloumn :  titleHi.district.coloumn ,
    rows: departmentData
  };

  const getDistrictAndHODApplication = async () => {
    const info = await apiRequest.getDistrictAndHODApplication({ category: '005', applicantCategory: 0, fromdate: 0, todate: 0, reportType: 2});
    if(info){
      setDepartmentData(info);
    }
    else {
      setDepartmentData([]);
      return swal("Oops!", "Something went wrong!", "error");
    }
  }

  useEffect(() => {
    getDistrictAndHODApplication();
  }, [])

  const getDataFromDate = async (data) => {
    const info = await apiRequest.getRecordBasedOnDate({category: "005", 
     applicantCategory: 0, 
     fromdate: data.fromdate, 
     todate: data.todate,
     reportType: 1
    })
    if(info){
      setDepartmentData(info)
    }
    else {
      setDepartmentData([])
      return swal("Oops!", "Something went wrong!", "error");
    }
  }

  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
              {t("district.title")}
           </h4>
         </CardTitle>
         <CardBody>
           <FormSection searchByDate={getDataFromDate}/>
           <ExcelButton filename="District"/>
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
 
export default WithHoc(DistrictApplication);