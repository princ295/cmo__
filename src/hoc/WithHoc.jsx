
/* eslint-disable no-debugger, no-console */
import React, { useEffect } from 'react'

const WithHoc = Component => {

  return function WithHocComponent () {
    useEffect(() => {
      const btn = document.getElementById("button-download-as-xls");
      let tableItem = document.getElementsByClassName('dataTable')[0].lastElementChild;
      if(tableItem){
        tableItem.remove();
      }
      btn.style.background="#145195";
      btn.style.color="#fff"
    }, [])
    return <Component />
  }

} 
export default WithHoc;
/* eslint-enable no-alert, no-console */