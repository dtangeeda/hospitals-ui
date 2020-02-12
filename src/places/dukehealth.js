import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

export const Duke_Health = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://medicalpriceindex.com/api/getPrices/dukehealth";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);


  const columns = [
    {
      Header: "Description",
      headerStyle: {textAlign:'left',paddingLeft: '2rem'},
      style: {paddingLeft: '2rem'},
      accessor: "Description",
    },
    {
      Header: "Uninsured Price",
      headerStyle: {textAlign:'left'},
      accessor: "Uninsured"
    },
    {
      Header: "Insurance Price",
      headerStyle: {textAlign:'left'},
      accessor: "Insurance"
    }
  ];

  return <ReactTable columns={columns} data={data.length? data : []}></ReactTable>;
};
