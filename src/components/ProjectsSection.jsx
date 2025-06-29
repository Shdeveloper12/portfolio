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
        <p className="text-gray-600 mb-10 text-center secondary">
          Here are some of my projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 space-y-5 lg:space-y-0 lg:gap-4 md:gap-4 mt-10">
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out ">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img1}
                  alt="Hobbyhub"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold">Hobbyhub</h1>
                <p className="text-gray-500">
                  A platform for sharing and discovering hobbies.
                </p>
                <p>
                  <span className="font-bold">Status:</span>{" "}
                  <span>Completed</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">React</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Node.js</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Express</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/Hobby-Hub-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Frontend Code
                </a>
                <a
                  href="https://github.com/Shdeveloper12/Hobby-Hub-Server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Backend Code
                </a>
                <a
                  href="https://hobbyhub1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img2}
                  alt="Lost and Found"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary">Lost and Found</h1>
                <p className="text-gray-500 secondary">
                  A platform that can be used to find lost items and report
                  found items.
                </p>
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span>Completed</span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">React</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Node.js</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Express</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/Lost-And-Found-Client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary primary"
                >
                  Frontend Code
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary primary"
                >
                  Backend Code
                </a>
                <a
                  href="https://lostandfounds.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img3}
                  alt="doctor talk"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary">Doctor-Talk</h1>
                <p className="text-gray-500 secondary">
                  A platform for booking doctor appointments and managing health
                  records.
                </p>
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span>In Progress</span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">React</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Node.js</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Express</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/Doctor-Talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary primary"
                >
                  Frontend Code
                </a>
                <a
                  href=""
                  target=""
                  disabled
                  rel="noopener noreferrer"
                  className="btn btn-secondary primary"
                >
                  Backend Code
                </a>
                <a
                  href="https://doctortalk1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img5}
                  alt="english janala"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary">English Janala</h1>
                <p className="text-gray-500 secondary">
                  A platform for learning English vocabulary and grammar.
                </p>
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span>Completed</span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">
                    Javascript
                  </span>
                  <span className="bg-gray-300 p-2 rounded-2xl">css</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">API</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/English-Janala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary primary"
                >
                  Frontend Code
                </a>
                <a
                disabled
                  href=""
                  target=""
                  rel="noopener noreferrer"
                  className="btn btn-secondary primary"
                >
                  Backend Code
                </a>
                <a
                  href="https://englishjanala5.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img4}
                  alt="kids school"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary">Kids School</h1>
                <p className="text-gray-500 secondary">
                  A platform for managing school activities and student records.
                </p>
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span>In Progress</span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Html</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Css</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">tailwind</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/Kids-school-responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary primary"
                >
                  Frontend Code
                </a>
                <a
                disabled
                  href=""
                  target=""
                  rel="noopener noreferrer"
                  className="btn btn-secondary primary"
                >
                  Backend Code
                </a>
                <a
                  href="https://shdeveloper12.github.io/Kids-school-responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img6}
                  alt="kids school"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary">Pet Shop</h1>
                <p className="text-gray-500 secondary">
                  A platform for managing pet adoption and sales.
                </p>
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span>In Progress</span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Html</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Css</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Tailwind</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/Pet-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary primary"
                >
                  Frontend Code
                </a>
                <a
                disabled
                  href=""
                  target=""
                  rel="noopener noreferrer"
                  className="btn btn-secondary primary"
                >
                  Backend Code
                </a>
                <a
                  href="https://shdeveloper12.github.io/Pet-Shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="overflow-hidden">
              <Link to="/hobbyhub">
                <img
                  src={img7}
                  alt="kids school"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold primary">Tea House</h1>
                <p className="text-gray-500 secondary">
                  A platform for managing tea orders and deliveries.
                </p>
                <p className="secondary">
                  <span className="font-bold">Status:</span>{" "}
                  <span>In Progress</span>
                </p>
                <div className="flex gap-2 flex-wrap secondary">
                  <span className="font-bold mt-2">Technologies:</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Html</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Css</span>
                  <span className="bg-gray-300 p-2 rounded-2xl">Tailwind</span>
                </div>
              </div>
              <div className="p-4 gap-2 flex justify-center">
                <a
                  href="https://github.com/Shdeveloper12/Tea-House-Responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary primary"
                >
                  Frontend Code
                </a>
                <a
                disabled
                  href=""
                  target=""
                  rel="noopener noreferrer"
                  className="btn btn-secondary primary" 
                >
                  Backend Code
                </a>
                <a
                  href="https://shdeveloper12.github.io/Tea-House-Responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent primary"
                >
                  Live Demo
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
