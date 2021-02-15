import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

export const JFK_Florida = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.medicalpriceindex.com/api/getPrices/jfkflorida";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);


  const columns = [
    {
      Header: "Procedure ID",
      headerStyle: {textAlign:'left',paddingLeft: '2rem'},
      style: {paddingLeft: '2rem'},
      accessor: "Procedure ID",
    },
    {
      Header: "Description",
      headerStyle: {textAlign:'left'},
      accessor: "Description"
    },
    {
      Header: "Price",
      headerStyle: {textAlign:'left'},
      accessor: "Amount"
    }
  ];

  return <ReactTable columns={columns} data={data.length? data : []}></ReactTable>;
};
