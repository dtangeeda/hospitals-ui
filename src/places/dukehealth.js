import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
      headerStyle: { textAlign: "left", paddingLeft: "2rem" },
      style: { paddingLeft: "2rem" },
      accessor: "Description"
    },
    {
      Header: "Uninsured Price",
      headerStyle: { textAlign: "left" },
      accessor: "Uninsured"
    },
    {
      Header: "Insurance Price",
      headerStyle: { textAlign: "left" },
      accessor: "Insurance"
    }
  ];

  return (
    <div>
      <div
        className="ui container"
        style={{ margin: "5vh 0", padding: "2rem" }}
      >
        <Router>
          <Link to="/">
            <span style={{ margin: "4rem 2rem", fontsize: "1rem" }}>Home </span>
          </Link>
        </Router>
        <h1 style={{ textAlign: "center" }}>
          Welcome to Duke Health Hospital Price List
        </h1>
      </div>
      <ReactTable columns={columns} data={data.length ? data : []}></ReactTable>
    </div>
  );
};
