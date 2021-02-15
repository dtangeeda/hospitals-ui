import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

export const Aurora_Bay_Care = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.medicalpriceindex.com/api/getPrices/aurorabaycare";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);


  const columns = [
  
    {
      Header: "Charge Code",
      headerStyle: {textAlign:'left',paddingLeft: '2rem'},
      style: {paddingLeft: '2rem'},
      accessor: "charge_code",
    },
    {
      Header: "Service",
      headerStyle: {textAlign:'left'},
      accessor: "service",
    },
    {
      Header: "Price",
      headerStyle: {textAlign:'left'},
      accessor: "price",

    },
    
  ];

  return <ReactTable columns={columns}   data={data.length? data : []} ></ReactTable>;
};
