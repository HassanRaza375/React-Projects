import React, { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import PasswordInput from "../../components/Custom/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/regx";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [passerror, setpassError] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      navigate("/Home");
    }
  }, [navigate]);

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
    const obj = {};
    obj.email = email;
    obj.password = pass;
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        ...obj,
      });
      console.log(res);
      navigate("/Home");
      localStorage.setItem("token", JSON.stringify(res.data.token));
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="mt-3 drop-shadow bg-slate-50 p-4 max-w-[500px]">
          <h2 className="text-center mb-5 text-[16px] font-bold">Login</h2>
          <div className="mb-5">
            <input
              type="email"
              className="border-solid border-2 border-purple-400 outline-none  p-3 text-[12px] h-[40px] w-full"
              placeholder="enter email"
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
            Login
          </button>
          <p>
            Not register yet{" "}
            <Link to="/signup" className="text-blue-400 text-[14px]">
              create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
