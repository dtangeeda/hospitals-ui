import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

export const MVH_Ohio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://medicalpriceindex.com/api/getPrices/mvhohio";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);


  const columns = [
    {
      Header: "Field1",
      headerStyle: {textAlign:'left',paddingLeft: '2rem'},
      style: {paddingLeft: '2rem'},
      accessor: "field1",
    },
    {
      Header: "Miami Valley Hospital",
      headerStyle: {textAlign:'left'},
      accessor: "Miami Valley Hospital"
    },
    {
      Header: "Field3",
      headerStyle: {textAlign:'left'},
      accessor: "field3"
    },
    {
      Header: "Field3",
      headerStyle: {textAlign:'left'},
      accessor: "field3"
    },
    {
      Header: "Field5",
      headerStyle: {textAlign:'left'},
      accessor: "field5"
    }
  ];

  return <ReactTable columns={columns} data={data.length? data : []}></ReactTable>;
};
