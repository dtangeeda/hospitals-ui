import React, { useEffect, useState } from "react";
import ReactTable from "react-table";
import LoopCircleLoader from "./loader";
import { Link } from "react-router-dom";
import Back from "../images/back.svg";

export const Osu_Wexner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://medicalpriceindex.com/api/getPrices/osuwexner"
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
      Header: "Description",
      headerStyle: { textAlign: "left", paddingLeft: "2rem" },
      style: { paddingLeft: "2rem" },
      accessor: "description"
    },
    {
      Header: "Charge",
      headerStyle: { textAlign: "center" },
      accessor: "charge",
      style: { textAlign: "center" }
    }
  ];

  const filterCaseInsensitive = ({ id, value }, row) => {
    return row[id] ? row[id].toLowerCase().includes(value.toLowerCase()) : true;
  };

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
        <h1 style={{ textAlign: "center" }}>Osu Wexner Hospital Price List</h1>
      </div>
      {loading === false ? (
        <LoopCircleLoader />
      ) : (
        <ReactTable
          defaultPageSize={50}
          filterable
          defaultFilterMethod={filterCaseInsensitive}
          className="-striped -highlight"
          columns={columns}
          data={data.length ? data : []}
        ></ReactTable>
      )}
    </div>
  );
};
