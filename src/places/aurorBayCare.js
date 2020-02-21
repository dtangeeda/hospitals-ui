import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Back from "../images/back.svg";

export const Aurora_Bay_Care = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://medicalpriceindex.com/api/getPrices/aurorabaycare";
    fetch(url)
      .then(res => res.json())
      .then(responseData => {
        setData(responseData);
      });
  }, []);

  const columns = [
    {
      Header: "Charge Code",
      headerStyle: { textAlign: "left", paddingLeft: "2rem" },
      style: { paddingLeft: "2rem" },
      accessor: "charge_code"
    },
    {
      Header: "Service",
      headerStyle: { textAlign: "left" },
      accessor: "service"
    },
    {
      Header: "Price",
      headerStyle: { textAlign: "left" },
      accessor: "price"
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
        <h1 style={{ textAlign: "center" }}>
          Auror Bay Care Hospital Price List
        </h1>
      </div>

      <ReactTable
        columns={columns}
        data={data.length ? data : []}
        defaultPageSize={50}
        filterable
        className="-striped -highlight"
      ></ReactTable>
    </div>
  );
};
