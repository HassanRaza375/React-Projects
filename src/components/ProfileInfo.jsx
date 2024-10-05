import React from "react";
import { getInitials } from "../utils/regx";

const ProfileInfo = ({ lgoutreturn, token }) => {
  return (
    <div className="flex items-center gap-[5px]">
      {!token && (
        <span
          className="text-[12px] text-blue-600 cursor-pointer"
          onClick={() => lgoutreturn()}
        >
          Login
        </span>
      )}
      {token && (
        <span className="flex justify-center h-[24px] w-[24px] items-center rounded-full bg-orange-300 text-[12px] p-[3px]">
          {getInitials("Hassan Raza")}
        </span>
      )}
      {token && (
        <div className="flex flex-col items-center">
          <span className="text-[12px]">{"Hassan Raza"}</span>
          <span
            className="text-[12px] text-blue-600 cursor-pointer"
            onClick={() => lgoutreturn()}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
