import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // SHORT CODE TO DOWNLOAD THE RESUME WITHOUT LOADING PAGE
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // path from public folder
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <>
      <div className="w-full p-2 text-center">
        <h1 className="cabin text-[1rem]">@ali8642</h1>
      </div>

      {/* NAVBAR */}
      <div className="w-full bg-white border-y-4 sticky">
        <div className="w-[90%] h-full mx-auto flex justify-between items-center unigeo">
          {/* NAVLINKS */}
          <ul className="flex gap-12 text-2xl py-2">
            <li>
              <NavLink
                to="/"
                className="[&.active]:font-bold group transition duration-300"
              >
                Home
                <span class="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-500 h-1 bg-[#C79EFA]"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="[&.active]:font-bold group transition duration-300"
              >
                About
                <span class="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-500 h-1 bg-[#C79EFA]"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="[&.active]:font-bold group transition duration-300"
              >
                Projects
                <span class="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-500 h-1 bg-[#C79EFA]"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="[&.active]:font-bold group transition duration-300"
              >
                Contact
                <span class="block max-w-0 group-hover:max-w-full rounded-full transition-all duration-500 h-1 bg-[#C79EFA]"></span>
              </NavLink>
            </li>
          </ul>

          {/* RESUME DOWNLOAD SECTION */}
          <button
            onClick={handleDownload}
            className="h-full items-center text-2xl px-12 py-2.5 bg-slate-900 text-white active:scale-75 transition duration-300"
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
