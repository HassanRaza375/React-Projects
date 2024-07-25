import React, { useContext } from "react";
import { TodoContext } from "../store/store-todo-item";
const appname = (props) => {
  const { arrayitems } = useContext(TodoContext);
  return (
    <h1
      className="display-4 fw-bold text-center mb-0"
      style={{ fontSize: props.fontsize + "px" }}
    >
      {props.title || "Todo Project"} = ({arrayitems.length})
    </h1>
  );
};

export default appname;
