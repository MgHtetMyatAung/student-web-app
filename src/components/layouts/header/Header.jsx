import React, { useState } from "react";
import {FaUserCircle } from "react-icons/fa";
import { AiFillPlusCircle, } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { useContextData } from "../../context/Contextdata";

const Header = () => {
  const {setShowModal} = useContextData();
  return (
    <div className="navbar">
      <nav className="nav-menu">
        <div className="logo hidden md:block">Student Management</div>
        <div className="logo md:hidden">SM</div>
        <ul className="menu">
          <li>
            <button className="flex gap-3 items-center" onClick={()=> setShowModal(true)}>
              <AiFillPlusCircle className="nav-icon" /> <span className="hidden md:inline">Add</span>
            </button>
          </li>
          <li>
            <button className="flex gap-3 items-center">
              <BsListCheck className="nav-icon font-bold" /> <span className="hidden md:inline">List</span>
            </button>
          </li>
          <li>
            <button className="flex gap-3 items-center">
              <FaUserCircle className="nav-icon" /> <span className="hidden md:inline">Htet Myat Aung</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
