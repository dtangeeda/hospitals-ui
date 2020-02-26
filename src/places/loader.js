import React from "react";
import { LoopCircleLoading } from "react-loadingg";

const LoopCircleLoader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}
    >
      <LoopCircleLoading />
      <p style={{ paddingTop: "5rem", fontWeight: "bold", color: "#00adb5" }}>
        Loading ...
      </p>
    </div>
  );
};

export default LoopCircleLoader;
