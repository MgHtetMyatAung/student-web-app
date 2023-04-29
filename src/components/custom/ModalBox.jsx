import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useContextData } from "../context/Contextdata";

const ModalBox = () => {
    const {setShowModal} = useContextData();
  return (
    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#333333c3] grid place-items-center">
      <button className=" absolute top-10 right-10 text-white" onClick={()=>setShowModal(false)}>
        <RxCross2 className=" text-[30px]" />
      </button>
      <form action="" className=" p-5 bg-gray-50 rounded-md max-w-[900px]">
        <h2 className=" font-semibold mb-3 text-lg">Add New Student</h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="">
            <input
              type="text"
              className="w-full border-[1px] border-gray-400 py-2 px-3 text-sm md:text-base rounded-md focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div className="">
            <input
              type="number"
              className="w-full border-[1px] border-gray-400 py-2 px-3 text-sm md:text-base rounded-md focus:outline-none"
              placeholder="Phone number"
            />
          </div>
          <div className=" col-span-2">
            <input
              type="text"
              className="w-full border-[1px] border-gray-400 py-2 px-3 text-sm md:text-base rounded-md focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className=" col-span-2">
            <textarea
              cols="30"
              rows="3"
              className="w-full border-[1px] border-gray-400 py-2 px-3 text-sm md:text-base rounded-md focus:outline-none"
              placeholder="Address"
            ></textarea>
          </div>
        </div>
        <button className=" bg-blue-500 rounded-md py-2 px-3 text-white font-normal mt-5 transition-all duration-200 active:scale-95">
          Add
        </button>
      </form>
    </div>
  );
};

export default ModalBox;
