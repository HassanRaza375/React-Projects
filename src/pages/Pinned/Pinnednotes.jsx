import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/Navbar";
import NoteCard from "../../components/NoteCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Pinnednotes = () => {
  const navigate = useNavigate();
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    getALlNotes();
  }, []);
  const getALlNotes = async () => {
    const res = await axios.get("http://localhost:3000/pinnednotes");
    const res2 = await axios.get("http://localhost:3000/notes");
    const temparray = res2.data.filter((item) => res.data.includes(item._id));
    setNotesData(temparray);
  };
  return (
    <>
      <Navbar />
      <section className="py-2 my-2">
        <div className="grid grid-cols-1 p-2">
          <button
            className="bg-purple-500 rounded-lg border-purple-100 text-yellow-100 p-2 w-full"
            onClick={() => navigate("/Home")}
          >
            GO Back
          </button>
        </div>
      </section>
      {
        <div className="container mx-auto p-3">
          <h1 className="pb-4">Pined Notes</h1>
          <div className="grid grid-cols-3">
            {notesData?.map((e) => {
              return <NoteCard key={e._id + 1} data={e} />;
            })}
          </div>
        </div>
      }
    </>
  );
};

export default Pinnednotes;
