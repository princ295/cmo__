import LayoutNew from "./LayoutNew";

// justify-content-start
const PageNotFound = () => {
  return (
    <LayoutNew>
      <div className="container mt-5"> 
        <div className="d-flex justify-content-center align-item-center">
          <img src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png" alt="Page Not Found" className="page_not-found"/>
        </div>
      </div>
    </LayoutNew>
  );
}
 
export default PageNotFound;