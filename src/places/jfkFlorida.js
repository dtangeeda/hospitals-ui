import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const JFK_Florida = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://medicalpriceindex.com/api/getPrices/jfkflorida";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);

  const columns = [
    {
      Header: "Procedure ID",
      headerStyle: { textAlign: "left", paddingLeft: "2rem" },
      style: { paddingLeft: "2rem" },
      accessor: "Procedure ID"
    },
    {
      Header: "Description",
      headerStyle: { textAlign: "left" },
      accessor: "Description"
    },
    {
      Header: "Price",
      headerStyle: { textAlign: "left" },
      accessor: "Amount"
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
          Welcome to JFK Florida Hospital Price List
        </h1>
      </div>
      <ReactTable columns={columns} data={data.length ? data : []}></ReactTable>
    </div>
  );
};
