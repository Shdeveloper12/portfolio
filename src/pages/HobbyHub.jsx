import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import img1 from "../assets/hobby1.png";
import img2 from "../assets/hobby2.png";
import img3 from "../assets/hobby3.png";
import img4 from "../assets/hobby4.png";

const HobbyHub = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);

    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);
  return (
    <>
      <div className="max-w-7xl mx-auto my-8">
        <div className="ml-6">
          <button className=" hover:text-blue-500">
            <NavLink to="/">
              <i class="fa-solid fa-arrow-left-long mr-2"></i>Home
            </NavLink>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-50 lg:gap-10 lg:grid-cols-2 ">
          <div className="relative w-full max-w-6xl mx-auto rounded-lg  shadow-md shadow-blue-300 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-auto w-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className=" object-cover w-full rounded-2xl"
                  />
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-2 mt-20 lg:mt-36 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 mt-20 lg:mt-36 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                ❯
              </button>
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full ${
                    current === idx ? "bg-orange-400" : "bg-green-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <div className="text-center space-y-5 p-13 border-2 border-gray-300 shadow-blue-300 shadow-md rounded-lg  hover:shadow-lg transition-shadow duration-300 ">
            <div className="mt-8">
              <h2 className="text-5xl font-bold primary text-blue-500">
                HobbyHub
              </h2>
              <p className="secondary text-gray-400 mt-4">
                Discover, Create, and Join Hobby-Based Communities
              </p>
            </div>
            <div className=" gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  justify-between">
              <a
                href="https://github.com/Shdeveloper12/Hobby-Hub-Client"
                target="_blank"
                rel="noopener noreferrer"
                className="btn shadow-md shadow-blue-300"
              >
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  
                  Frontend Code<i class="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </a>
              <a
                href="https://github.com/Shdeveloper12/Hobby-Hub-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="btn shadow-md shadow-blue-300"
              >
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Backend Code <i class="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </a>
              <a
                href="https://hobbyhub1.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn shadow-md shadow-blue-300"
              >
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Live Demo <i class="fa-solid fa-arrow-right ml-1"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 my-8">
        <div className="">
          <h1 className="primary text-3xl mb-5">
            <i class="fa-solid fa-pen-to-square mr-3"></i>Overview
          </h1>
          <p className="text-gray-400  leading-relaxed lg:text-justify text-left secondary">
            HobbyHub is a MERN stack-based web platform where users can explore
            and connect through shared hobbies and interests. Authenticated
            users can create hobby groups, join existing ones, share ideas, and
            build community-driven discussions. It's designed to encourage
            creativity, collaboration, and social interaction around passions —
            whether it’s painting, coding, hiking, or gaming.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl primary mb-5">
                <i class="fa-solid fa-bullseye mr-3"></i>Project Goals
              </h2>
              <div className="secondary space-y-2 ml-1 text-gray-400">
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Build a fully
                  authenticated web app using modern React and Firebase.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Allow users to
                  create, join, and manage hobby-based groups.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Provide a clean,
                  responsive, and user-friendly interface.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Protect private
                  routes and user data using JWT & Firebase auth.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Enhance the
                  social aspect of hobbies via group collaboration.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="primary text-3xl mb-5">
                  <i class="fa-solid fa-star mr-3"></i>Key Features
                </h2>
                <div className="secondary  text-gray-400">
                  <div className="flex flex-col-2 gap-8 justify-between">
                    <div>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>
                        Authentication & Authorization
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>Create &
                        Manage Groups
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>Join Groups
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i> My Group
                        Dashboard
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>Dark/Light
                        Mode Toggle
                      </p>
                    </div>
                    <div>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>Responsive
                        Design
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>User
                        Avatars
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>weetAlert2
                        / Toasts / Loaders
                      </p>
                      <p>
                        <i class="fa-solid fa-star-of-life mr-3"></i>Lottie
                        Animations & React Tooltips
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="primary text-3xl mb-5">
            <i class="fa-regular fa-square-check mr-3"></i>Technology Used
          </h2>
          <div className="grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="">
              <h2 className="text-2xl primary">
                <i class="fa-regular fa-circle mr-3"></i>Frontend
              </h2>
              <div className="secondary ml-6 text-gray-400">
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>React.js
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>React Router DOM
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Tailwind CSS +
                  DaisyUI
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Lucide-React
                  (icons)
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Lottie-react
                  (animations)
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>SweetAlert2
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>React Hot Toast
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>React Tooltip
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl primary">
                <i class="fa-regular fa-circle mr-3"></i>Backend
              </h2>
              <div className="secondary ml-6 text-gray-400">
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Express.js
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>MongoDB
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>JWT (JSON Web
                  Tokens) – secured routes
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Firebase Admin
                  SDK – token verification
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>cookie-parser –
                  token storage in cookies
                </p>
              </div>
            </div>
            <div className="">
              <h2 className="text-2xl primary">
                <i class="fa-regular fa-circle mr-3"></i>Authentication
              </h2>
              <div className="secondary ml-6 text-gray-400">
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Firebase
                  Authentication (email/password + Google)
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>JWT Tokens
                  (protected routes on server)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HobbyHub;
