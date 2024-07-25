import React, { useContext } from "react";
import { TodoContext } from "../store/store-todo-item";
import { MdOutlineDelete } from "react-icons/md";

const todoitem = (props) => {
  const arrayitems = useContext(TodoContext);
  return (
    <>
      {arrayitems.length > 0 ? (
        arrayitems.map((e, idx) => (
          <div className={"container py-2"} key={e.ItemAdded_data + idx}>
            <div className="row mb-2">
              <div className="col-lg-4">{e.ItemName}</div>
              <div className="col-lg-4">{e.ItemAdded_data}</div>
              <div className="col-lg-4">
                <button
                  className="btn btn-danger"
                  onClick={() => props.handleDel(e.ItemName)}
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <AppName title="No Record Found" />
      )}
    </>
  );
};

export default todoitem;
