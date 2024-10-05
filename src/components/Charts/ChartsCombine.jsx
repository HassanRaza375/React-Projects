import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
const ChartsCombine = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-6">
            <LineChart />
          </div>
          <div className="col-lg-6 flex justify-center">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsCombine;
