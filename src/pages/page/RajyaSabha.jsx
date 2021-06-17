import { Card, CardBody, CardTitle } from "reactstrap";
import LayoutNew from "../LayoutNew";

import React, {useEffect , useState} from 'react';
import { MDBDataTable } from "mdbreact";
import { apiRequest } from "../../utils/CmoApi";
import { useTranslation } from "react-i18next";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import WithHoc from "../../hoc/WithHoc";
import ExcelButton from "../../components/ExcelButton";

import swal from 'sweetalert';


const RajyaSabhaLetter = () => {

  const [rajyaSabhaData, setRajyaSabhaData] = useState([]);
  const { t, i18n } = useTranslation("title_");

  const getLoksabhaRajyaSabhaVidhayakLetters = async () => {
    let info = await apiRequest.getLoksabhaRajyaSabhaVidhayakLetters('04');

    if(info){
      setRajyaSabhaData(info);
    }
    else{
      setRajyaSabhaData([]);
      return swal("Oops!", "Something went wrong!", "error");
    }
  }

  useEffect(() => {
    getLoksabhaRajyaSabhaVidhayakLetters();
  },[]) 


 
  const tabalData = {
    columns: i18n.language === "en" ? titleEn.rajyasabha.columns : titleHi.rajyasabha.columns,
    rows: rajyaSabhaData
  };

  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
              {t("rajyasabha.title")}
           </h4>
         </CardTitle>
         <CardBody>
           <ExcelButton filename="RajyaShabha"/>
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
 
export default WithHoc(RajyaSabhaLetter);