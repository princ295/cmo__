import LayoutNew from "../LayoutNew";
import { Card, CardBody, CardTitle } from "reactstrap";

import {React, useEffect,useState} from 'react'
import { apiRequest } from "../../utils/CmoApi";
import { MDBDataTable } from "mdbreact";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";
import { useTranslation } from "react-i18next";

import WithHoc from "../../hoc/WithHoc";
import ExcelButton from "../../components/ExcelButton";


import swal from 'sweetalert';

const LokShabhaLetter = () => {

  const [lokSabhaData, setLokSabhaData] = useState([]);
  const {t, i18n} = useTranslation("title_");

  const tabalData = {
    columns: i18n.language === "en" ? titleEn.loksabha.columns : titleHi.loksabha.columns ,
    rows: lokSabhaData
  };

  useEffect(() => {
   const getLoksabhaRajyaSabhaVidhayakLetters = async () => {
    let info = await apiRequest.getLoksabhaRajyaSabhaVidhayakLetters('03');
    if(info){
      setLokSabhaData(info);
    }else {
      setLokSabhaData([]);
      return swal("Oops!", "Something went wrong!", "error");
    }
   }
   getLoksabhaRajyaSabhaVidhayakLetters();
  }, [])

  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
             {t("loksabha.title")}
           </h4>
         </CardTitle>
         <CardBody>
           <ExcelButton filename="LokShabhaSheet"/>
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
 
export default WithHoc(LokShabhaLetter);