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

import swal from 'sweetalert';

const TotalLetterDetails = () => {

  const [listInfo, setListInfo] = useState([]);
  const {t, i18n } = useTranslation("title_")

  const {id, district } = useParams();
  const tabalData = {
    columns: i18n.language === "en" ? titleEn.samakshbhetdetail.columns :  titleHi.samakshbhetdetail.columns,
    rows: listInfo
  };


  const getOfficeDistrictDepartmentList = async () => {
    const info = await apiRequest.getOfficeDistrictDepartmentList({department: id, districtCode: district});
    if(info){
      setListInfo(info);
    }else {
      setListInfo([]);
      return swal("Oops!", "Something went wrong!", "error");
    }
  }


  useEffect(() => {
    getOfficeDistrictDepartmentList();
  }, [district, id])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LayoutNew>
      <div className="container mt-5">
        <Card>
         <CardTitle>
           <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
              {t("samakshbhetdetail.title")}
           </h4>
         </CardTitle>
         <CardBody>
            <ExcelButton filename="DetailSheet"/>
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
 
export default WithHoc(TotalLetterDetails);

