import React from "react";
import { MdOutlineClear } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ value, onchange, searchHandle, clearHandle }) => {
  return (
    <>
      <div className="flex items-center gap-1 grow md:grow-0">
        <input
          type="text"
          value={value}
          onChange={onchange}
          placeholder="search"
          className="block max-w-[500px] w-full outline-none focus:ring-0 border-none border-0 py-1.5 pl-7 pr-0 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
        {value && (
          <MdOutlineClear
            onClick={clearHandle}
            className="text-slate-500 cursor-pointer hover:text-slate-800"
          />
        )}
        <CiSearch
          onClick={searchHandle}
          className="text-slate-400 cursor-pointer hover:text-slate-800"
        />
      </div>
    </>
  );
};

export default Searchbar;
