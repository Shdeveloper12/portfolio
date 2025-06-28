import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png"

const Navber = () => {
    const activeStyle = ({ isActive }) =>
        isActive
        ? "text-primary font-bold"
        : "text-gray-600 hover:text-primary";
    const menuItems = (
        <>
        <li>
            <a href="#about" className={activeStyle}>About Me</a>
        </li>
        <li>
            <a href="#projects" className={activeStyle}>Projects</a>
        </li>
       
        <li>
            <a href="#skills" className={activeStyle}>Skills</a>
        </li>
        <li>
            <a href="#education" className={activeStyle}>Education</a>
        </li>
        <li>
            <a href="#contact" className={activeStyle}>Contact</a>
        </li>
        </>
    )

    
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          {menuItems}
          </ul>
        </div>
        <img src={logo} alt="Logo" className="h-12 rounded-full" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Resume</a>
      </div>
    </div>  
  );
};

export default Navber;
