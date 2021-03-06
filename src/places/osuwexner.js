import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

export const Osu_Wexner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.medicalpriceindex.com/api/getPrices/osuwexner";
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
      accessor: "description"
    },
    {
      Header: "Charge",
      headerStyle: {textAlign:'center'},
      accessor: "charge",
      style: {textAlign: 'center'},
    },
   
  ];

  return <ReactTable columns={columns} data={data.length? data : []}></ReactTable>;
};
