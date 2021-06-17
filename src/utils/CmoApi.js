import axios from 'axios';
import { Link } from 'react-router-dom';

export const apiRequest = {

  getCmSecretraitListRequest : () => {
   return axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetCmSecretraitList/`)
    .then(info => {
      let object = [];
      info.data.table.forEach((item, i) => {
        object.push({
          designation: item.designation,
          emailID: item.emailID.replace(/\./g, '[dot]').replace(/\@/g, '[at]'),  // eslint-disable-line
          id: item.id,
          name: item.name,
          officeAddress: item.officeAddress,
          officerTel: item.officerTel
        })
      })
      return [...object]
    })
    .catch(error => {
      return false
    })
  },

  getJunchaupalCollectorRequest : (id) => 
    axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetJanchaupalCollectorData/${id}`)
    .then(info => {
      return info.data.table[0];
    }).catch(error => {
      return false
    }), 

  getLoksabhaRajyaSabhaVidhayakLetters : (id) =>  
    axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetLoksabhaRajyaSabhaVidhayakLetters/${id}`)
      .then(info => {
        console.log('getting response form')
        console.log(info.data)
        let object = [];
        info.data.table.forEach((item, i) =>
          object.push({
            sno: i + 1,
            appli_type: item.appli_type,
            completed: item.completed,
            ls_code:item.ls_code,
            pending:item.pending,
            sansad_code:item.sansad_code,
            sansad_name_h:item.sansad_name_h,
            total:item.total,
            vidhansabha_name:item.vidhansabha_name
          })
        );
        return object;
      }).catch(error => {
      return false
    }), 

  getDistrictAndHODApplication: ({category, applicantCategory, fromdate, todate, reportType}) => {
    return  axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetDistrictAndHODApplication/${category}/${applicantCategory}/${fromdate}/${todate}/${reportType}`)
    .then(info => {
      let object = [];
      info.data.table.forEach((item, i) =>
        object.push({
          sno: i + 1,
          category: item.category,
          curr_Completed_Letter: item.curr_Completed_Letter,
          curr_Pending_Letter: item.curr_Pending_Letter,
          curr_Total_Letter: item.curr_Total_Letter,
          ddl_app_cate: item.ddl_app_cate,
          district_ID: item.district_ID,
          district_Name: 
          (
            
            <Link to={`district_details/${item.district_ID}`}>
              {item.district_Name}
            </Link>
          ),
          from_date: item.from_date,
          to_date: item.from_date
        })
      );
      return object;
      // return row
    })
    .catch(error => {
      return false
    })
  },

  getDistrictHODDetailList : ({category, applicantCategory, districtCode, fromdate, todate, reportType}) => 
    axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetDistrictHODDetailList/${category}/${applicantCategory}/${districtCode}/${fromdate}/${todate}/${reportType}`)
    .then(info => {

      console.log(info.data.table)
      // return info.data.table;
      console.log(info)
      let object = [];
      info.data.table.forEach((item, i) =>{
        object.push({
          sno: i + 1,
          applicantCategory: item.applicantCategory,
          base_dept_code: item.base_dept_code,
          category:item.category,
          comp: item.comp,
          dept_name: item.dept_name,
          designation_id: item.designation_id,
          designation_sno: item.designation_sno,
          district_code: item.district_code,
          emp_desg: item.emp_desg,
          employee_code: item.employee_code,
          employee_name: item.employee_name,
          from_date: item.from_date,
          officeName: item.officeName,
          office_code: item.office_code,
          pending: item.pending,
          section_code: item.section_code,
          subDeptCode: item.subDeptCode,
          to_date: item.to_date,
          total: item.total
        });
        object.push({
         
          applicantCategory: item.applicantCategory,
          base_dept_code: item.base_dept_code,
          category:item.category,
          comp: item.comp,
        
          designation_id: item.designation_id,
          designation_sno: item.designation_sno,
          district_code: item.district_code,
          emp_desg: item.emp_desg,
          employee_code: item.employee_code,
          employee_name: item.emp_desg,
          from_date: item.from_date,
          officeName: item.officeName,
          office_code: item.office_code,
          pending: item.pending,
          section_code: item.section_code,
          subDeptCode: item.subDeptCode,
          to_date: item.to_date,
          total: item.total
        })
      });

      return object;
    })
    .catch(error => {
      return false
    }),

  
  getBaseDepartmentData : (fromdate=0, todate=0) =>  
    axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetBaseDepartmentData/${fromdate}/${todate}`)
      .then(info => {
        let object = [];
        info.data.table.forEach((item, i) =>
          object.push({
            sno: i + 1,
            dateFrom: item.dateFrom,
            dateTo: item.dateTo,
            dept_id: item.dept_id,
            dept_name: item.dept_name,
            samakshabhent: 
             (
              <Link to={`samakshbhet_details/${item.dept_id}`}>
                {item.samakshabhent}
              </Link>
             )
          })
        );
        return object;
      }).catch(error => {
      return false
    }), 

  getRecordBasedOnDate: ({ category, applicantCategory, fromdate, todate, reportType} ) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}GetDistrictAndHODApplication/${category}/${applicantCategory}/${fromdate}/${todate}/${reportType}`)
    .then(response => {
      console.log(response);
      return response
    })
    .catch((err) => {
      return false
    })
  },
  getRecordMainDepartmentBasedOnDate: ({ fromdate, todate}) => {
    axios.get(`${process.env.REACT_APP_BASE_URL}GetBaseDepartmentData/${fromdate}/${todate}`)
    .then(info => {
      console.log(info);
      return info
    })
    .catch(err => console.log(err))
  },

  // Report/GetDistrictwiseDepartmentlist/{category}/{department}/{fromdate}/{todate}

  getDistrictwiseDepartmentlist: ({department}) => {
   return axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetDistrictwiseDepartmentlist/005/${department}/0/0`)
    .then(info => {
      let object = [];
      info.data.table.forEach((item, i) =>
      object.push({
        sno: i + 1,
        district_ID : item.district_ID,
        district_Name: item.district_Name,
        basename: item.basename,
        totalletter: 
        (
          <Link to={`${item.base}/${item.district_ID}`}>
            {item.totalletter}
          </Link>
        ),
        totalpending: item.totalpending,
        totalCompleted: item.totalCompleted,
        code: item.code,
        base: item.base,
        from_date: item.from_date,
        to_date: item.to_date
      }));
    return object
    })
    .catch(err => {return false})
  },

 
  getOfficeDistrictDepartmentList : ({department, districtCode}) => {
    return axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetOfficeDistrictDepartmentList/005/${department}/${districtCode}/0/0`)
    .then(info => {
      let object = [];
      info.data.table.forEach((item, i) =>
      object.push({
        sno: i + 1,
        code: item.code,
        from_date: item.from_date,
        newOfficeCode: item.newOfficeCode,
        officeName: item.officeName,
        to_date: item.to_date,
        totalcompleted: item.totalcompleted,
        totalletter: item.totalletter,
        totalpending: item.totalpending
      }));
    return object
    })
    .catch(err => { return false})
  },

  // letter status api
  getLetterStatusByComplainId: (complaintID) => {
   return axios.get(`${process.env.REACT_APP_BASE_URL}Report/GetApplicationDetail/${complaintID}`)
    .then(info => {
      console.log(info.data.table[0])
      return info.data.table
    })
    .catch(err => {
      return false
    })
  }
}