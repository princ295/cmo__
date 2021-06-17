import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, CardTitle } from 'reactstrap';

import LayoutNew from "../LayoutNew";

const OfficeAddress = () => {

  const {t } = useTranslation('title_')
  return (
    <LayoutNew >
      <div className="container mt-5">
        <Card>
          <CardTitle>
            <h4 className="pl-3 pt-3 pb-2 border-bottom card__title">
              {t("cmoffice.title")}
            </h4>
          </CardTitle>
          <CardBody>
            <div className="card__body" >
              <h4 className="card__body-title">{t("cmoffice.karyalay")}</h4>
              <p>Civil Line. Raipur Chhattisgarh Pincode - 492001</p>

              <h4 className="card__body-title">{t("cmoffice.email")}</h4>
              <p>cmcg[at]gov[dot]in</p>

              <h4 className="card__body-title">{t("cmoffice.phone")}</h4>
              <p>0771-2331001</p>

              <h4 className="card__body-title">{t("cmoffice.fax")}</h4>
              <p>0771-2331000</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </LayoutNew>
  );
}
 
export default OfficeAddress;