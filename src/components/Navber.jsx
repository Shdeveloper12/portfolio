import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const menuItems = (
    <>
      {["about", "skills", "education", "projects", "contact"].map((section) => (
        <li key={section}>
          <Link
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={handleLinkClick}
            activeClass="primary shadow-sm shadow-blue-300 font-bold"
            className="cursor-pointer text-gray-300 hover:shadow-sm hover:shadow-blue-300 font-medium capitalize"
          >
            {section}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-2 lg:px-12 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {open && (
            <ul className="menu menu-sm absolute mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          )}
        </div>
        <img src={logo} alt="Logo" className="h-12 rounded-full ml-2" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>

      <div className="navbar-end">
        <a
          className="btn primary shadow-md shadow-blue-400"
          href="https://drive.google.com/file/d/1hQgNB1oZdZGZZKIVcGGZSr3XiWVVGDKm/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:translate-y-1 transition-all duration-300 ease-in-out">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
