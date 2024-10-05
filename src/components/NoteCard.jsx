import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ImPushpin } from "react-icons/im";

import { BsThreeDotsVertical } from "react-icons/bs";

const NoteCard = ({ data, handleDelete, handleEdit, handlePin }) => {
  return (
    <>
      <div className="bg-slate-400 rounded-[4px] shadow-lg p-3 max-w-[400px]">
        <div className="flex justify-between items-center">
          <h1 className="m-1 text-[14px] font-bold">{data?.title}</h1>
          <div>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <BsThreeDotsVertical />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => handleEdit(data._id)}
                  className="text-[12px] flex items-center"
                >
                  <MdEdit className="me-2" />
                  Edit
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={() => handleDelete(data._id)}
                  className="text-[12px] flex items-center"
                >
                  <MdOutlineDeleteOutline className="me-2" />
                  Delete
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={() => handlePin(data._id)}
                  className="text-[12px] flex items-center"
                >
                  <ImPushpin className="me-2" />
                  Pin This
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <hr />
        <h2 className="my-3 text-[14px] font-bold">#Tags</h2>
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {data.tags?.split(",").map((e) => {
            return (
              <span
                key={e + 2}
                className="rounded-full bg-white text-[12px] px-4 py-1"
              >
                {e}
              </span>
            );
          })}
        </div>
        <hr />
        <h2 className="mt-3 text-[14px] font-bold">Content</h2>
        <p className="text-[12px] mb-0">{data.content}</p>
        <hr />
        <div className="flex justify-end mt-2">
          <small>{data.date}</small>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
