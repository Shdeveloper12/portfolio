import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-primary font-bold"
          className="cursor-pointer text-gray-600 hover:text-primary font-medium"
        >
          About Me
        </Link>
      </li>

      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-primary font-bold"
          className="cursor-pointer text-gray-600 hover:text-primary font-medium"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-primary font-bold"
          className="cursor-pointer text-gray-600 hover:text-primary font-medium"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-primary font-bold"
          className="cursor-pointer text-gray-600 hover:text-primary font-medium"
        >
          Projects
        </Link>
      </li>

      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          activeClass="text-primary font-bold"
          className="cursor-pointer text-gray-600 hover:text-primary font-medium"
        >
          Contact
        </Link>
      </li>
    </>
  );

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <img src={logo} alt="Logo" className="h-12 rounded-full" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-outline btn-primary"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
