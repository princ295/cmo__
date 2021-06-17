
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import PropTypes  from "prop-types";

// import { AiFillFileExcel  } from "react-icons/ai";


const ExcelButton = ({filename}) => {
  return (
    <div 
      //style={{float: 'right'}}
    >
      <ReactHTMLTableToExcel
        className="btn excelbtn"
        table="table"
        filename={filename}
        // buttonText={(
        //   <>
        //     <AiFillFileExcel size="2rem"/>
        //     <span className="ml-1">Download Into Excel</span>
        //   </>)}
        buttonText="Download Into Excel"
        sheet="Sheet"
      />
    </div>
  );
}

ExcelButton.prototype = {
  filename: PropTypes.string.isRequired
}
 
export default ExcelButton;