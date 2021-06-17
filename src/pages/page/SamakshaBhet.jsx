import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from 'reactstrap';
import { useParams } from "react-router";
import { apiRequest } from "../../utils/CmoApi";
import LayoutNew from "../LayoutNew";
import { MDBDataTable } from "mdbreact";
import { useTranslation } from "react-i18next";

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";
import WithHoc from "../../hoc/WithHoc";
import ExcelButton from "../../components/ExcelButton";
import { useCallback } from "react";


import swal from 'sweetalert';

const SamakshBhet = () => {

  const [listInfo, setListInfo] = useState([]);
  const {t, i18n} = useTranslation("title_")
  const { id } = useParams();
  
  const tabalData = {
    columns: i18n.language === "en" ? titleEn.samakshbhet.columns : titleHi.samakshbhet.columns,
    rows: listInfo
    // rows: []
  };


  const getDistrictwiseDepartmentlist = useCallback(async () => {
    const info = await apiRequest.getDistrictwiseDepartmentlist({department:id});
    if(info){
      setListInfo(info);  
    }
    else{
      setListInfo([]);  
      return swal("Oops!", "Something went wrong!", "error");
    }
  },[id])

  useEffect(() => {
    if(id){
      getDistrictwiseDepartmentlist();
    }
  }, [id, getDistrictwiseDepartmentlist])

  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
              {t("samakshbhet.title")}
           </h4>
         </CardTitle>
         <CardBody>
            <ExcelButton filename="SamakshBhetSheet"/> 
            <MDBDataTable
              responsive
              bordered
              hover
              id="table"
              data={tabalData}
              paging={true}
            //   sortable={false}
            />
         </CardBody>
         </Card>
      </div>
    </LayoutNew>
  );
}
 
export default WithHoc(SamakshBhet);

