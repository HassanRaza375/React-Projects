import React, { useEffect, useState } from "react";
import ProfileInfo from "../ProfileInfo";
import { useNavigate } from "react-router-dom";
import Searchbar from "../Searchbar";
const Navbar = () => {
  const navigate = useNavigate();
  const [token, settoken] = useState(null);
  useEffect(() => {
    const tokn = JSON.parse(localStorage.getItem("token"));
    settoken(tokn);
  }, []);
  const handleLogout = () => {
    localStorage.setItem("token", null);
    settoken(null);
    navigate("/login");
  };
  const [query, setquery] = useState("");
  const searchHandle = () => {
    alert(query);
  };
  const clearHandle = () => {
    setquery("");
  };
  return (
    <>
      <div className="bg-white drop-shadow py-2 px-6 flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-medium text-black py-2 md:inline-block hidden sm:hidden">
          Navbar
        </h2>
        <Searchbar
          clearHandle={clearHandle}
          searchHandle={searchHandle}
          onchange={({ target }) => setquery(target.value)}
          value={query}
        />
        <ProfileInfo lgoutreturn={handleLogout} token={token} />
      </div>
    </>
  );
};

export default Navbar;
