import React, { useReducer, useState, useEffect, useRef } from "react";
import AddTodo from "../components/addTodo";
import AppName from "../components/appname";
import TodoItem from "../components/todoitem";
import { TodoContext } from "../store/store-todo-item";
import "bootstrap/dist/css/bootstrap.min.css";

// import Feirebase from "./firebase";
const todo = () => {
  const [editValues, setEditValues] = useState(null);
  const resucerfunction = (currentvalues, action) => {
    let newTodosItems = currentvalues;
    if (action.type === "New_Item") {
      newTodosItems = [...currentvalues, action.Payload];
    } else if (action.type === "Delete_Item") {
      newTodosItems = currentvalues.filter((e) => e.ItemName !== action.Id);
    }
    return newTodosItems;
  };

  const data = JSON.parse(localStorage.getItem("todoitemdata"));
  let [arrayitems, setarrayitems] = useState(...[data ? data : ""]);
  const [rTodos, dispatchTodo] = useReducer(
    resucerfunction,
    ...[data ? data : ""]
  );
  const AddEventHandler = (name, date, id) => {
    if (id) {
      const newobj = {
        ItemName: name || "xyz",
        ItemAdded_data: date || "2024",
      };
      const data = JSON.parse(localStorage.getItem("todoitemdata")).filter(
        (e) => e.ItemName !== id
      );
      const newarray = [...(data ? data : []), newobj];
      localStorage.setItem("todoitemdata", JSON.stringify(newarray));
      const addAction = {
        type: "New_Item",
        Payload: {
          ...newobj,
        },
      };
      dispatchTodo(addAction);
      setarrayitems(newarray);
      setEditValues(null);
    } else {
      const newobj = {
        ItemName: name || "xyz",
        ItemAdded_data: date || "2024",
      };
      const data = JSON.parse(localStorage.getItem("todoitemdata"));
      const newarray = [...(data ? data : []), newobj];
      localStorage.setItem("todoitemdata", JSON.stringify(newarray));
      const addAction = {
        type: "New_Item",
        Payload: {
          ...newobj,
        },
      };
      dispatchTodo(addAction);
      setarrayitems(newarray);
    }
  };

  const DeleteEvent = (id) => {
    const newarray = JSON.parse(localStorage.getItem("todoitemdata")).filter(
      (e) => {
        return e.ItemName === id ? "" : e;
      }
    );
    localStorage.setItem("todoitemdata", JSON.stringify(newarray));
    setarrayitems(newarray);
    const DeleteAction = {
      type: "Delete_Item",
      Payload: {
        Id: id,
      },
    };
    dispatchTodo(DeleteAction);
  };
  const EditEvent = (editvalues) => {
    setEditValues({ ...editvalues });
  };
  return (
    <TodoContext.Provider
      value={{ arrayitems, DeleteEvent, AddEventHandler, EditEvent }}
    >
      <div className="container-fluid bg-warning py-2 mb-3">
        <div className="row">
          <div className="col-12">
            <AppName title="My Todos" />
          </div>
        </div>
      </div>
      <AppName title="Record Found" />
      <AddTodo editValues={editValues} />
      <TodoItem />
      {/* <Feirebase /> */}
      {rTodos.length > 0
        ? rTodos.map((e, i) => {
            return (
              <AppName
                title={"Record Found =" + e.ItemName}
                fontsize={14 + i}
                tag="h3"
                key={i + Math.random()}
              />
            );
          })
        : ""}
    </TodoContext.Provider>
  );
};

export default todo;
