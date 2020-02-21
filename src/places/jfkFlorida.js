import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Back from "../images/back.svg";
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
    <div style={{ margin: "5vh 0", padding: "2rem" }}>
      <Router>
        <Link to="/">
          <span style={{ margin: "4rem 0rem", fontsize: "1rem" }}>
            <img src={Back} height="10" width="20" /> Back
          </span>
        </Link>
      </Router>
      <div
        className="ui container"
        style={{ margin: " 0 auto", textAlign: "center", padding: "3rem" }}
      >
        <h1 style={{ textAlign: "center" }}>JFK Florida Hospital Price List</h1>
      </div>
      <ReactTable
        defaultPageSize={50}
        filterable
        className="-striped -highlight"
        columns={columns}
        data={data.length ? data : []}
      ></ReactTable>
    </div>
  );
};
