import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

const Search = ({filterData}) => {
  const [keyword, setKeyword] = useState("");
  const searchKeyword = (data) => {
    filterData(data);
    setKeyword(data);
  };
  return (
    <div className=" my-4 lg:my-10 relative flex gap-2">
      <input
        type="text"
        className=" w-full border-[1px] border-gray-500 py-2 px-3 md:px-5 text-sm md:text-base rounded-full focus:outline-none shadow"
        placeholder="Search student"
        value={keyword}
        onChange={(e) => searchKeyword(e.target.value)}
      />
      <button className=" hidden md:inline-block py-2 px-5 bg-blue-500 rounded-full text-white transition-all duration-200 active:scale-95 shadow">
        {/* <BiSearch size={20} /> */}Search
      </button>
      {keyword.length > 0 && (
        <button
          className=" absolute md:right-[17%] lg:right-[11%] 2xl:right-[9%] top-[24%] hidden md:inline-block"
          onClick={() => setKeyword("")}
        >
          <RxCross2 size={20} />
        </button>
      )}
      <button className=" absolute right-4 top-[24%] md:hidden">
        <BiSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
