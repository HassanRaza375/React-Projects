import React from "react";

const container = (props) => {
  return <div className="max-256">{props.children}</div>;
};

export default container;
