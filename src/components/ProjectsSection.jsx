import React from "react";
import img1 from "../assets/hobby1.png";
import { Link } from "react-router";
import img2 from "../assets/lost1.png";
import img3 from "../assets/doctor.png";

const ProjectsSection = () => {
  return (
    <>
      <div className=" mt-14  max-w-7xl mx-auto">
        <h1 className="text-3xl text-center font-bold mb-6">
          Featured Projects
        </h1>
        <p className="text-gray-600 mb-10 text-center">
          Here are some of my projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 lg:space-y-0 lg:gap-4 md:gap-4 mt-10">
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
                <h1 className="text-xl font-bold">Lost and Found</h1>
                <p className="text-gray-500">
                  A platform that can be used to find lost items and report
                  found items.
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
                  href="https://github.com/Shdeveloper12/Lost-And-Found-Client"
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
                  href="https://lostandfounds.netlify.app"
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
                  src={img3}
                  alt="doctor talk"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold">Doctor-Talk</h1>
                <p className="text-gray-500">
                  A platform for booking doctor appointments and managing health
                  records.
                </p>
                <p>
                  <span className="font-bold">Status:</span>{" "}
                  <span>In Progress</span>
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
                  href="https://github.com/Shdeveloper12/Doctor-Talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Frontend Code
                </a>
                <a
                  href=""
                  target=""
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Backend Code
                </a>
                <a
                  href="https://doctortalk1.netlify.app"
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
                  src={img3}
                  alt="doctor talk"
                  className="transition-transform duration-500 group-hover:scale-105 object-cover w-full cursor-pointer "
                />
              </Link>
            </div>
            <div className="">
              <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold">Doctor-Talk</h1>
                <p className="text-gray-500">
                  A platform for booking doctor appointments and managing health
                  records.
                </p>
                <p>
                  <span className="font-bold">Status:</span>{" "}
                  <span>In Progress</span>
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
                  href="https://github.com/Shdeveloper12/Kids-school-responsive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Frontend Code
                </a>
                <a
                  href=""
                  target=""
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Backend Code
                </a>
                <a
                  href="https://doctortalk1.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
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
