import React from "react";
import img1 from "../assets/hobby1.png";
import { Link } from "react-router";
import img2 from "../assets/lost1.png";
import img3 from "../assets/doctor.png";
import img4 from "../assets/school.png";
import img5 from "../assets/english.png";
import img6 from "../assets/pet.png";
import img7 from "../assets/tea.png";

const ProjectsSection = () => {
  return (
    <>
      <div className="mt-14 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold  mb-4 text-center primary">
          Featured Projects
        </h1>
        <p className="text-gray-300 mb-10 text-center secondary">
          Here are some of my projects
        </p>

        <div className="grid  md:grid-cols-2 place-content-around gap-4 lg:grid-cols-3 space-y-5  lg:gap-4 md:gap-4 mt-10">
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group shadow-blue-300 hover:scale-105 transition-transform duration-300 ease-in-out ">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img1}
                  alt="Hobbyhub"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold text-blue-500">Hobbyhub</h1>
                <p className="text-gray-400">
                  A platform for sharing and discovering hobbies.
                </p>
                <p>
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-green-400 p-1 rounded-md ">
                    Completed
                  </span>
                </p>
                <div className="flex gap-2  pt-5">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    React.js
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Node.js
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Mongodb
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://hobbyhub1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300"
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/lostandfound">
                <img
                  src={img2}
                  alt="Lost and Found"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
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
                <p className="secondary">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-green-400 p-1 rounded-md ">
                    Completed
                  </span>
                </p>
                <div className="flex gap-2  secondary pt-5">
                  <span className="bg-gray-700  p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    React
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Node.js
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Mongodb
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://lostandfounds.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary "
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/doctortalk">
                <img
                  src={img3}
                  alt="doctor talk"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
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
                <p className="secondary">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2  secondary pt-5">
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Tailwindcss
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    React
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Node.js
                  </span>
                  <span className="bg-gray-700 p-2 rounded-2xl shadow-md shadow-blue-300">
                    Express
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://doctortalk1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300  primary"
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Live Demo<i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/englishjanala">
                <img
                  src={img5}
                  alt="english janala"
                  className="transition-transform rounded-md duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
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
                <p className="secondary">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-green-400 p-1 rounded-md">Completed</span>
                </p>
                <div className="flex gap-2 pt-5 secondary ">
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://englishjanala5.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/kidsschool">
                <img
                  src={img4}
                  alt="kids school"
                  className="transition-transform rounded-md duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
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
                <p className="secondary">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 pt-5 secondary">
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
                <a
                  href="https://shdeveloper12.github.io/Kids-school-responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Live Demo <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/petshop">
                <img
                  src={img6}
                  alt="kids school"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
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
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 pt-5secondary">
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://shdeveloper12.github.io/Pet-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Live Demo<i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg  shadow-blue-300 group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/teahouse">
                <img
                  src={img7}
                  alt="kids school"
                  className="transition-transform duration-500 rounded-md group-hover:scale-105 object-cover w-full cursor-pointer "
                />
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
                <p className="secondary">
                  <span className="font-bold mr-2">Status:</span>
                  <span className="bg-yellow-400 p-1 rounded-md">
                    In Progress
                  </span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
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
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                    Github Code <i class="fa-solid fa-arrow-right "></i>
                  </span>
                </a>

                <a
                  href="https://shdeveloper12.github.io/Tea-House-Responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn shadow-md shadow-blue-300 primary"
                >
                  <span className="hover:translate-x-1 transition-all duration-300 ease-in-out"></span>
                  Live Demo <i class="fa-solid fa-arrow-right "></i>
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
