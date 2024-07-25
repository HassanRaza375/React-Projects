import React, { useContext, useEffect } from "react";
import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoContext } from "../store/store-todo-item";

const addTodo = ({ editValues }) => {
  const { Todos, DeleteEvent, AddEventHandler, EditEvent } =
    useContext(TodoContext);
  // const [todoName, setTodoName] = useState("");
  // const [tododate, setTododate] = useState("");
  // const handleNameChange = (e) => {
  //   setTodoName(e.target.value);
  // };
  // const handleDateChange = (e) => {
  //   setTododate(e.target.value);
  // };
  const todoName = useRef();
  const tododate = useRef();
  const todoID = useRef();
  const handleaddbuttonclicked = () => {
    AddEventHandler(
      todoName.current.value,
      tododate.current.value,
      todoID.current.value
    );
    todoName.current.value = "";
    tododate.current.value = "";
    todoID.current.value = null;
    // setTodoName("");
    // setTododate("");
  };
  useEffect(() => {
    if (editValues) {
      todoName.current.value = editValues.ItemName;
      tododate.current.value = editValues.ItemAdded_data;
      todoID.current.value = editValues.ItemName;
    }
  }, [editValues]);
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-lg-4">
          <input type="hidden" ref={todoID} />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here"
            ref={todoName}
          />
        </div>
        <div className="col-lg-4">
          <input type="date" ref={tododate} className="form-control" />
        </div>
        <div className="col-lg-4">
          <button
            className="btn btn-success"
            onClick={() => handleaddbuttonclicked()}
          >
            <IoMdAdd />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default addTodo;
