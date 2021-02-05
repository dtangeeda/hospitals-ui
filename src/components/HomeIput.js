import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../styles/homeInput.css";
const onSearch = (value) => console.log(value);

export default function homeInput() {
  return (
    <div>
      <label className="search-label">Search by city/hospital</label>
      <Input
        placeholder="Search"
        onSearch={onSearch}
        style={{ height: "40px" }}
        prefix={<SearchOutlined />}
      />
    </div>
  );
}
