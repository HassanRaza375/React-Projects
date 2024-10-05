import React from "react";

const button = (props) => {
  const { title, events, value, color } = props;
  return (
    <>
      <button className={`btn btn-${color}`} onClick={() => events(value)}>
        {title}
      </button>
    </>
  );
};

export default button;
