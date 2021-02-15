import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

export const UVa_Health = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.medicalpriceindex.com/api/getPrices/uvahealth";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);


  const columns = [
  
    {
      Header: "Service",
      headerStyle: {textAlign:'left',paddingLeft: '2rem'},
      style: {paddingLeft: '2rem'},
      accessor: "service",
    },
    {
      Header: "Billing Term",
      headerStyle: {textAlign:'left'},
      accessor: "billing_term",
    },
    {
      Header: "Price",
      headerStyle: {textAlign:'left'},
      accessor: "price",

    },
    {
      Header: "Service Type",
      headerStyle: {textAlign:'left'},
      accessor: "service_type",

    }
    
  ];

  return <ReactTable columns={columns}   data={data.length? data : []} ></ReactTable>;
};
