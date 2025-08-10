import React from "react";
import img1 from "../assets/hobby1.png";
import { Link } from "react-router";
import img2 from "../assets/lost1.png";
import img3 from "../assets/doctor.png";
import img4 from "../assets/school.png";
import img5 from "../assets/english.png";
import img6 from "../assets/pet.png";
import img7 from "../assets/tea.png";
import img8 from "../assets/mcms1.png";

const ProjectsSection = () => {
  return (
    <>
      <div className="mt-14 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold  mb-4 text-center text-blue-500 primary">
          Featured Projects
        </h1>
        <p className="text-gray-300 mb-10 text-center secondary">
          Here are some of my projects
        </p>

        <div className="grid  md:grid-cols-2 place-content-around gap-4 lg:grid-cols-4 space-y-5  lg:gap-4 md:gap-4 mt-10">
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-500 group  hover:scale-[1.02] transition-transform duration-300 ease-in-out ">
            <div className="overflow-hidden relative">
              <Link to="/mcms">
                <img
                  src={img8}
                  alt="Hobbyhub"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full"
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
                
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold text-blue-500">Medical Camp Management system</h1>
                <p className="text-gray-400 secondary">
                  A platform for managing medical camps and register participants.
                </p>
                <p>
                  <span className="font-bold mr-2 ">Status:</span>
                  <span className="bg-green-400 primary p-1 rounded-md ">
                    Completed
                  </span>
                </p>
                <div className="flex gap-2 text-cyan-400 secondary font-bold pt-5">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    ReactJS
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    NodeJS
                  </span>
                 
                </div>
              </div>
              <div className="p-4 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Medical-Camp-Management-System-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://medicalcampmanagement.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group shadow-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out ">
            <div className="overflow-hidden relative">
              <Link to="/hobbyhub">
                <img
                  src={img1}
                  alt="Hobbyhub"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100  transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold text-blue-500">Hobbyhub</h1>
                <p className="text-gray-400 secondary">
                  A platform for sharing and discovering hobbies.
                </p>
                <p>
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-green-400 p-1 rounded-md primary">
                    Completed
                  </span>
                </p>
                <div className="flex gap-2  pt-5 secondary font-bold text-cyan-400">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    ReactJS
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    NodeJS
                  </span>
                  
                </div>
              </div>
              <div className="p-4 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Hobby-Hub-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://hobbyhub1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-500 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden relative">
              <Link to="/lostandfound">
                <img
                  src={img2}
                  alt="Lost and Found"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary text-blue-500">
                  Lost and Found
                </h1>
                <p className="text-gray-400 secondary">
                  A platform that can be used to find lost items and report
                  found items.
                </p>
                <p >
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-green-400 p-1 rounded-md primary">
                    Completed
                  </span>
                </p>
                <div className="flex gap-2 text-cyan-400 font-bold secondary pt-5">
                  <span className="bg-gray-700  p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    ReactJS
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    NodeJS
                  </span>
                  
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Lost-And-Found-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://lostandfounds.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary "
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-500 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden relative">
              <Link to="/doctortalk">
                <img
                  src={img3}
                  alt="doctor talk"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary text-blue-500">
                  Doctor-Talk
                </h1>
                <p className="text-gray-400 secondary">
                  A platform for booking doctor appointments and managing health
                  records.
                </p>
                <p className="">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-yellow-400 p-1 rounded-md primary">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 font-bold text-cyan-400 secondary pt-5">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    ReactJS
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    NodeJS
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    API
                  </span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Doctor-Talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://doctortalk1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300  primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo<i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-500 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden relative">
              <Link to="/englishjanala">
                <img
                  src={img5}
                  alt="english janala"
                  className="transition-transform rounded-md duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary text-blue-500">
                  English Janala
                </h1>
                <p className="text-gray-400 secondary">
                  A platform for learning English vocabulary and grammar.
                </p>
                <p className="">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-green-400 p-1 rounded-md">Completed</span>
                </p>
                <div className="flex gap-2 pt-5 secondary text-cyan-400 font-bold">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Html
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Taiwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Javascript
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    API
                  </span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/English-Janala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://englishjanala5.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-500 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden relative">
              <Link to="/kidsschool">
                <img
                  src={img4}
                  alt="kids school"
                  className="transition-transform rounded-md duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary text-blue-500">
                  Kids School
                </h1>
                <p className="text-gray-400 secondary">
                  A platform for managing school activities and student records.
                </p>
                <p className="">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 pt-5 secondary text-cyan-400 font-bold">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Html
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Responsive
                  </span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Kids-school-responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
                <a
                  href="https://shdeveloper12.github.io/Kids-school-responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-500 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden relative">
              <Link to="/petshop">
                <img
                  src={img6}
                  alt="kids school"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary text-blue-500">
                  Pet Shop
                </h1>
                <p className="text-gray-400 secondary">
                  A platform for managing pet adoption and sales.
                </p>
                <p className="">
                  <span className="font-bold">Status:</span>{" "}
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 pt-5 secondary text-cyan-400 font-bold">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Html
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwind
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Responsive
                  </span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Pet-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 priamry transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://shdeveloper12.github.io/Pet-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Live Demo<i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg  shadow-blue-500 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden relative">
              <Link to="/teahouse">
                <img
                  src={img7}
                  alt="kids school"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
                <span className="absolute cursor-pointer top-1/2 left-1/2 font-bold text-3xl hover:bg-gray-200 border rounded-md  px-1 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2">See Details<i className="fa-solid fa-arrow-right "></i>
                </span>
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary text-blue-500">
                  Tea House
                </h1>
                <p className="text-gray-400 secondary">
                  A platform for managing tea orders and deliveries.
                </p>
                <p className="">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 flex-wrap secondary text-cyan-400 font-bold">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Html
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Css
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwind
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Responsive
                  </span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-between">
                <a
                  href="https://github.com/Shdeveloper12/Tea-House-Responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://shdeveloper12.github.io/Tea-House-Responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 primary transition-all duration-300 ease-in-out">
                  Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;