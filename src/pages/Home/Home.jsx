import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import NoteCard from "../../components/NoteCard";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PinnedActions } from "../../store/pinnedNotes";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [arratag, setarratag] = useState([]);
  const [notesData, setNotesData] = useState([]);
  const [action, setaction] = useState(false);
  const tagsitem = useRef("");
  const content = useRef();
  const title = useRef();

  useEffect(() => {
    getAllNotes();
  }, [action]);

  const getAllNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    setNotesData(res.data);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handletags = () => {
    if (tagsitem.current.value === "") {
      return;
    }
    setarratag([...arratag, tagsitem.current.value]);
    tagsitem.current.value = "";
  };
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/notes/${id}`);
      alert(res.data.message);
      setaction(true);
    } catch (err) {
      alert(err.response.message);
    }
  };
  const handleEdit = (id) => {
    alert(id);
  };
  const handlePin = async (id) => {
    try {
      const res = await axios.post("http://localhost:3000/pinnednotes", {
        ID: id,
      });
      if (res.data) {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handlesumbit = async () => {
    const obj = {};
    obj.title = title.current.value;
    obj.content = content.current.value;
    obj.tags = arratag.toString();
    obj.date = new Date().toISOString();
    console.log(obj);
    const res = await axios.post("http://localhost:3000/notes", { ...obj });
    console.log(res);
    getAllNotes();
    handleClose();
    title.current.value = "";
    content.current.value = "";
    setarratag([]);
  };
  const removetag = (idx) => {
    const updatedtags = arratag.filter((e, i) => i !== idx);
    setarratag(updatedtags);
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-3">
        <div className="my-3">
          <button
            onClick={() => navigate("/pinned-Items")}
            className="border border-red-300 bg-red-400 p-2 rounded-md text-[14px] text-white"
          >
            See pinned
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {notesData.map((e) => {
            return (
              <NoteCard
                key={e._id + 1}
                data={e}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handlePin={handlePin}
              />
            );
          })}
        </div>
      </div>
      <div
        onClick={handleShow}
        className="cursor-pointer ds hover:bg-blue-500 p-[10px] h-[40px] w-[40px] rounded-full fixed bottom-[20px] right-[20px] bg-blue-600 text-white flex justify-center items-center"
      >
        <FaPlus />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 flex flex-col">
            <label htmlFor="title" className="mb-2 text-[12px] text-slate-500">
              Title
            </label>
            <input
              type="text"
              ref={title}
              placeholder="Title"
              className="text-[12px] text-slate-500"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="title" className="mb-2 text-[12px] text-slate-500">
              Content
            </label>
            <textarea
              type="text"
              ref={content}
              placeholder="Content"
              className="text-[12px] text-slate-500"
            ></textarea>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="title" className="mb-2 text-[12px] text-slate-500">
              Tags
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Content"
                className="text-[12px] text-slate-500 w-full"
                ref={tagsitem}
              />
              <button
                onClick={() => handletags()}
                className="bg-orange-500 text-[14px] p-2 text-white rounded-[4px]"
              >
                Add
              </button>
            </div>
            <div>
              <span className="text-[12px]">
                tags list:
                {arratag?.map((e, i) => {
                  return (
                    <span
                      key={e + i}
                      className="position-relative bg-orange-400 py-1 px-2 my-4 mx-2 text-white rounded-md"
                    >
                      {e}
                      <span className="position-absolute top-[-2px] right-[-10px]">
                        <IoMdClose
                          className="cursor-pointer text-slate-950 hover:text-slate-500"
                          onClick={() => removetag(i)}
                        />
                      </span>
                    </span>
                  );
                })}
              </span>
            </div>
            <div className="py-3 text-center">
              <button
                className="p-2 bg-slate-600 max-w-[300px] w-full rounded-md border border-blue-500 text-white"
                onClick={handlesumbit}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
