import React from "react";
import { FaUserGraduate } from "react-icons/fa";

const StudentCard = ({ id }) => {
  return (
    <div className="p-5 shadow rounded-md flex items-center gap-3">
      <FaUserGraduate size={25} className=" text-gray-500"/>
      <p>StudentCard {id}</p>
    </div>
  );
};

export default StudentCard;
