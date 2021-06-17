
import { MDBDataTable } from 'mdbreact';
import React, {useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { apiRequest } from '../../utils/CmoApi';
import LayoutNew from '../LayoutNew';

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import WithHoc from '../../hoc/WithHoc';
import ExcelButton from '../../components/ExcelButton';


import swal from 'sweetalert';


const MLALetter = () => {

  const [malData, setMalData] = useState([]);
  const {t, i18n} = useTranslation("title_");

  const tabalData = {
    columns: i18n.language === "en" ? titleEn.mla.columns : titleHi.mla.columns,
    rows: malData
  };

  useEffect(() => {
    const getLoksabhaRajyaSabhaVidhayakLetters = async () => {
      let info = await apiRequest.getLoksabhaRajyaSabhaVidhayakLetters('02');
      if(info){
        setMalData(info);
      }else{
        setMalData([]);
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
            {t("mla.title")}
          </h4>
        </CardTitle>
        <CardBody>
          <ExcelButton filename="MLASheet"/>
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
 
export default WithHoc(MLALetter);