import React, { Suspense, lazy} from "react";
import { Redirect, Route, Switch } from "react-router";
import LoaderStatus from "../components/Loader";
const Home = lazy(() => import('../pages/page'));
const Department = lazy(() => import('../pages/page/Department'));
const DistrictApplication = lazy(() => import('../pages/page/DistrictApplication'));
const DistrictDetails = lazy(() => import('../pages/page/DistrictDetails'));
const LetterDescription = lazy(() => import('../pages/page/LetterDescription'));
const LokShabhaLetter = lazy(() => import('../pages/page/LokShabhaLetter'));
const MainDepartmentApplication = lazy(() => import('../pages/page/MainDepartmentApplication'));
const Ministerial = lazy(() => import('../pages/page/Ministerial'));
const MLALetter = lazy(() => import('../pages/page/MLALetter'));
const OfficeAddress = lazy(() => import('../pages/page/OfficeAddress'));
const OfficeComo = lazy(() => import('../pages/page/OfficeCmo'));
const RajyaSabhaLetter = lazy(() => import('../pages/page/RajyaSabha'));
const SamakshBhet = lazy(() => import('../pages/page/SamakshaBhet'));
const TotalLetterDetails = lazy(() => import('../pages/page/TotalLetterDetails'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

// lazy loading

const RouterOutLate = () => {
 
  return (
    <React.Fragment>
      <Suspense fallback={
        <div className="lazy__loader">
          <LoaderStatus />
        </div>
      }>
        <Switch>
          <Route path={["/","/cmocgdemo", "/home"]} component={Home} exact/>
          <Route path="/cmo_office" component={OfficeComo}/>
          <Route path="/office_address" component={OfficeAddress}/>
          <Route path="/ministerial" component={Ministerial}/>
          <Route path="/department" component={Department}/>
          <Route path="/lokshabha_letter" component={LokShabhaLetter}/>
          <Route path="/mla_letter" component={MLALetter}/>
          <Route path="/rajyasabha_etter" component={RajyaSabhaLetter}/>
          <Route path="/district_application" component={DistrictApplication}/>
          <Route path="/maindepartment_application" component={MainDepartmentApplication}/>
          <Route path="/letter_description/:id" component={LetterDescription}/>
          <Route path="/district_details/:id" component={DistrictDetails}/>
          <Route path="/samakshbhet_details/:id" exact component={SamakshBhet}/>
          <Route path="/samakshbhet_details/:id/:district" exact component={TotalLetterDetails}/> 
          {/* path="/user/manage/:id/:type */}
          <Route path='*' component={PageNotFound} exact/>
          {/* <Redirect exact={true} from="*" to="/page_not_found" /> */}
          <Redirect from="*" to="/"/>
        </Switch> 
      </Suspense>
    </React.Fragment>
  );
}
 
export default RouterOutLate;