import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import PasswordInput from "../../components/Custom/PasswordInput";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/regx";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [erroname, setnameError] = useState("");
  const [error, setError] = useState(null);
  const [pass, setPass] = useState("");
  const [passerror, setpassError] = useState(null);
  const handleSubmit = async () => {
    if (validateEmail(email)) {
      setError(null);
    } else {
      setError("Error in Email");
    }
    if (!pass) {
      setpassError("Error in Password");
    } else {
      setpassError(null);
    }
    if (!erroname) {
      setnameError("Error in Name");
      return;
    } else {
      setnameError(null);
    }
    console.log(pass, email, name);
    if (!pass || !erroname) return;
    const obj = {};
    obj.email = email;
    obj.name = name;
    obj.password = pass;
    const res = await axios.post("http://localhost:3000/register", { ...obj });
    if (res.data.saved === true) {
      navigate("/login");
    }
    console.log(res);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mb-[10px]">
        <div className="mt-3 drop-shadow bg-slate-50 p-4 max-w-[500px] w-[100%] shadow-sm">
          <h2 className="text-center mb-5 text-[16px] font-bold">SignUp</h2>{" "}
          <div className="mb-5">
            <input
              type="text"
              className="border-solid border-2 border-purple-400 outline-none  p-3 text-[14px] h-[40px] w-full"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {erroname && (
              <span className="inline-block text-[12px] text-red-600">
                {erroname}
              </span>
            )}
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="border-solid border-2 border-purple-400 outline-none  p-3 text-[14px] h-[40px] w-full"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <span className="inline-block text-[12px] text-red-600">
                {error}
              </span>
            )}
          </div>
          <div className="mb-5">
            <PasswordInput
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            {passerror && (
              <span className="inline-block text-[12px] text-red-600">
                {passerror}
              </span>
            )}
          </div>
          <button
            className="bg-slate-700 w-full hover:bg-slate-600 mb-5 text-white p-2 border-r"
            onClick={() => handleSubmit()}
          >
            Create an account
          </button>
          <p className="text-[14px] text-center">
            Already have an account
            <Link to="/login" className="text-blue-400 ms-2">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
