import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";

import CarousalOne from "../../assets/s1 (1).jpg";
import CarousalTwo from "../../assets/poster.jfif";

import cmImg from "../../assets/cmImage.PNG";

import Layout from '../Layout';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {apiRequest} from "../../utils/CmoApi";
import LoaderStatus from '../../components/Loader';
import swal from 'sweetalert';

const item = [
  {
    item: CarousalOne,
    text: "Some Text"
  },
  {
    item: CarousalTwo,
    text: "Some Text"
  },
]

const Home = () => {

  const { t } = useTranslation("home_");
  const [janchaupal, SetJunchaupal] = useState({});
  const [collectorJanchaupal, setColleCtorJanchaupal] = useState({});

  const [loader, setLoader] = useState(false);

  const getJunchaupalCollectorRequest = async () => {
    setLoader(true)
    let info = await apiRequest.getJunchaupalCollectorRequest('001');
    if(info){
       SetJunchaupal(info);
    }else{
      setLoader(false)
      return swal("Oops!", "Something went wrong!", "error");
    }
    info = await apiRequest.getJunchaupalCollectorRequest('003');
    await setColleCtorJanchaupal(info);
    await setLoader(false)
  }

  React.useEffect( () => {
    getJunchaupalCollectorRequest();
  },[]) 

  return (
    <Layout>
      <Carousel>
        {
          item.map(item => (
            <Carousel.Item key={Math.random()}>
            <img
              className="d-block w-100 h-50"
              src={item.item}
              alt="First slide"
            />
            </Carousel.Item>
          ))
        }
      </Carousel>
      <div className="bg__image">
      <div className="container pt-5 mt-3">
       <Row>
         <Col sm={6} md={4}>
         <div className="item">
          {
            loader ? 
              <div style={{height: '100%', display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                <LoaderStatus />
              </div>:
              <>
                <div className="item__title">
                  <h2 className="pb-2">{t("datajanchaupal.Jan-Chaupal")}</h2>
                </div>
                <div className="item__body mt-3">
                  <div className="item__content">
                    <h4>{t("datajanchaupal.pending")}</h4>
                    <h4>{janchaupal.pending}</h4>
                  </div>
                  <div className="item__content">
                    <h4>
                    {t("datajanchaupal.completed", { framework: "React" })}{" "}
                    </h4>
                    <h4>{janchaupal.completed}</h4>
                  </div>
                  <div className="item__content">
                    <h4>{t("datajanchaupal.total")}</h4>
                    <h4>{janchaupal.total}</h4>
                  </div>
                  <div className="item__content"></div>
                  <div className="item__content"></div>
                </div>
              </>
            }
          </div>
         </Col>
         <Col sm={6} md={4}>
            <div className="item">
              { loader ?
                <div style={{height: '100%', display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
                  <LoaderStatus />
                </div>:
                <>
                  <div className="item__title">
                    <h2 className="pb-2">{t("datacollectorjanchaupal.Jan-Chaupal")}</h2>
                  </div>
                  <div className="item__body mt-3">
                    <div className="item__content">
                      <h4>{t("datacollectorjanchaupal.pending")}</h4>
                      <h4>{collectorJanchaupal.pending}</h4>
                    </div>
                    <div className="item__content">
                      <h4>{t("datacollectorjanchaupal.completed")}</h4>
                      <h4>{collectorJanchaupal.completed}</h4>
                    </div>
                    <div className="item__content">
                      <h4>{t("datacollectorjanchaupal.total")}</h4>
                      <h4>{collectorJanchaupal.total}</h4>
                    </div>
                    <div className="item__content"></div>
                    <div className="item__content"></div>
                  </div>
                </>
            }
            </div>
         </Col>
         <Col sm={12} md={4}>
          <div className="item__pm">
          <img className="img-thumbnail" src={cmImg} alt="foote images"/>     
            {/* <img src={cmImg} alt="cm photo" className="img-thumbnail"  height="200" width="200"/> */}
            <div>
              <p className="pm-info mb-0">
                <b>Shri Bhupesh Baghel</b>
              </p>
              <small id="pm-of">Honorable Chief Minister</small>
            </div>
          </div>
         </Col>
       </Row>
      </div>
      </div>
    </Layout>
  );
}
 
export default Home;