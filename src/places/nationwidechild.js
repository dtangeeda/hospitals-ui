import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import LoopCircleLoader from "./loader";
import { Link } from "react-router-dom";
import Back from "../images/back.svg";

export const Nationwide_Child = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://medicalpriceindex.com/api/getPrices/nationwidechildrens"
      );
      res
        .json()
        .then(res => {
          setData(res);
          setLoading(true);
        })
        .catch(err => console.log(err));
    }

    fetchData();
  }, []);

  const columns = [
    {
      Header: "Service",
      headerStyle: { textAlign: "left", paddingLeft: "2rem" },
      style: { paddingLeft: "2rem" },
      accessor: "service"
    },
    {
      Header: "Price",
      headerStyle: { textAlign: "left" },
      accessor: "price"
    },
    {
      Header: "Service Type",
      headerStyle: { textAlign: "left" },
      accessor: "service_type"
    }
  ];

  return (
    <div style={{ margin: "5vh 0", padding: "2rem" }}>
      <Link to="/">
        <span style={{ margin: "4rem 0rem", fontsize: "1rem" }}>
          <img src={Back} height="10" width="20" alt="back" /> Back
        </span>
      </Link>
      <div
        className="ui container"
        style={{ margin: " 0 auto", textAlign: "center", padding: "3rem" }}
      >
        <h1 style={{ textAlign: "center" }}>
          Nation Wide Child Hospital Price List
        </h1>
      </div>
      {loading === false ? (
        <LoopCircleLoader />
      ) : (
        <ReactTable
          defaultPageSize={50}
          filterable
          className="-striped -highlight"
          columns={columns}
          data={data.length ? data : []}
        ></ReactTable>
      )}
    </div>
  );
};
