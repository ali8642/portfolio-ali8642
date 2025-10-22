import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaLaptopCode, FaTelegramPlane } from "react-icons/fa";
import { BsBriefcaseFill, BsFillMortarboardFill } from "react-icons/bs";

function Sidebar() {
  return (
    <>
      <div className="gradient"></div>
      <div className="sidebar">
        <ul>
          <li>
            <NavLink
              title="Home" className={(e) => {
                return e.isActive ? "activeLink" : "gray";
              }}
              to={"/"}
            >
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="About" className={(e) => {
                return e.isActive ? "activeLink" : "gray";
              }}
              to={"/about"}
            >
              <FaUser />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Experience" className={(e) => {
                return e.isActive ? "activeLink" : "gray";
              }}
              to={"/experience"}
            >
              <BsBriefcaseFill />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Education" className={(e) => {
                return e.isActive ? "activeLink" : "gray";
              }}
              to={"/education"}
            >
              <BsFillMortarboardFill />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Projects" className={(e) => {
                return e.isActive ? "activeLink" : "gray";
              }}
              to={"/projects"}
            >
              <FaLaptopCode />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Contact" className={(e) => {
                return e.isActive ? "activeLink" : "gray";
              }}
              to={"/contact"}
            >
              <FaTelegramPlane />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
