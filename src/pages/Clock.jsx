import React, { useEffect, useState } from "react";

const Clock = () => {
  useEffect(() => {
    const date = new Date();
    const datetimmer = setTimeout(() => {
      const timeDate =
        date.toLocaleDateString() + " : " + date.toLocaleTimeString();
      SetNewClock(timeDate);
    }, 1000);
    return () => {
      clearTimeout(datetimmer);
    };
  });
  const [currentClock, SetNewClock] = useState("");
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center font-bold">Time and Date </h1>
        </div>
        <div className="col-12">
          <p className="text-center">{currentClock}</p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
