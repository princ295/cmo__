import React, {useEffect, useState} from 'react';

import { MDBDataTable } from "mdbreact";
import { Card, CardBody, CardTitle } from 'reactstrap';

import LayoutNew from "../LayoutNew";
import { useTranslation } from 'react-i18next';

import titleEn from "../../translate/en/title.json";
import titleHi from "../../translate/hi/title.json";

import ExcelButton from '../../components/ExcelButton';
import { apiRequest } from '../../utils/CmoApi';
import WithHoc from '../../hoc/WithHoc';

import swal from 'sweetalert';

const OfficeComo = () => {

  const { i18n } = useTranslation();
  const [data, setData] = useState([])

  const getCmSecretraitListRequest = async () => {
    let info = await apiRequest.getCmSecretraitListRequest();
    if(info){
      setData(info);
    }else{
      setData([])
      return swal("Oops!", "Something went wrong!", "error");
    }
  }

  useEffect(() => {
    getCmSecretraitListRequest();
  }, [])

  const tabalData = {
    columns: i18n.language === "en" ? titleEn.secretariat.coloumn: titleHi.secretariat.coloumn,
    rows: data,
  };

  return (
    <LayoutNew>
      <div className="container mt-5">
       <Card>
        <CardTitle>
          <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
            CM SECRETARIAT
          </h4>
        </CardTitle>
        <CardBody>
          <ExcelButton filename="CmoSheet"/>
          <MDBDataTable
            responsive
            bordered
            hover
            id="table"
            data={tabalData}
            paging={false}
            sortable={false}
          />
        </CardBody>
      </Card>
      </div>
    </LayoutNew>  
  );
}
 
export default WithHoc(OfficeComo);