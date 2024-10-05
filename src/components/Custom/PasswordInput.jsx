import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const PasswordInput = ({ onChange, placeholder, value }) => {
  const [type, settype] = useState(false);
  const handleToggle = () => {
    settype(!type);
  };
  return (
    <div className="bg-transparent border-solid border-2 pe-3 flex items-center border-purple-400  h-[40px] text-[14px]  w-full">
      <input
        type={type ? "password" : "text"}
        className="w-full h-[100%] p-3 outline-none border-none focus:border-none focus:ring-0 text-[12px]"
        placeholder={placeholder || "password"}
        value={value}
        onChange={onChange}
      />
      {type ? (
        <FaRegEyeSlash
          size={18}
          className="cursor-pointer"
          onClick={() => handleToggle()}
        />
      ) : (
        <FaRegEye
          className="cursor-pointer"
          size={18}
          onClick={() => handleToggle()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
