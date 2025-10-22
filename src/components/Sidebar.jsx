import React from "react";
import "../App.css";
import { FaHome, FaUser, FaLaptopCode, FaTelegramPlane } from "react-icons/fa";
import { BsBriefcaseFill, BsFillMortarboardFill } from "react-icons/bs";

function Sidebar() {
  return (
    <>
    
        <div className="gradient"></div>
      <div className="sidebar">
        <ul>
          <li>
            <FaHome />
          </li>
          <li>
            <FaUser />
          </li>
          <li>
            <BsBriefcaseFill />
          </li>
          <li>
            <BsFillMortarboardFill />
          </li>
          <li>
            <FaLaptopCode />
          </li>
          <li>
            <FaTelegramPlane />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
