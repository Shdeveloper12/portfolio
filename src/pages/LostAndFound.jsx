import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import img1 from "../assets/lost1.png";
import img2 from "../assets/lost2.png";
import img3 from "../assets/lost3.png";

const HobbyHub = () => {
  const images = [img1, img2, img3];
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
          <div className="relative w-full max-w-6xl mx-auto shadow-blue-300 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg ">
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
                    className=" object-cover w-full rounded-2xl "
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
          <div className="text-center space-y-5 p-8 border-2 border-gray-300  rounded-lg shadow-md shadow-blue-300 hover:shadow-lg transition-shadow duration-300 ">
            <div className="mt-8">
              <h2 className="text-4xl font-bold primary text-blue-500">
                Lost And Found
              </h2>
              <p className="secondary text-gray-400 mt-4">
                A Community-Driven Lost Item Recovery Platform
              </p>
            </div>
            <div className="p-4 gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-betweem">
              <a
                href="https://github.com/Shdeveloper12/Lost-And-Found-Client"
                target="_blank"
                rel="noopener noreferrer"
                className="btn shadow-md shadow-blue-300"
              >
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Frontend Code <i class="fa-solid fa-arrow-right "></i>
                </span>
              </a>
              <a
                href="https://github.com/Shdeveloper12/Lost-Found-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="btn shadow-md shadow-blue-300"
              >
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Backend Code <i class="fa-solid fa-arrow-right "></i>
                </span>
              </a>

              <a
                href="https://lostandfounds.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn shadow-md shadow-blue-300"
              >
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Live Demo<i class="fa-solid fa-arrow-right "></i>
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
            Lost & Found is a MERN stack-based web application that allows users
            to report, search, and recover lost or found items. The platform
            enables people to post about items they’ve lost or found, and
            facilitates reuniting owners with their belongings through a
            verified and secure system. This app is designed to reduce the
            stress and time it takes to recover personal items by connecting
            finders and owners on one centralized platform.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
            <div>
              <div>
                <h2 className="text-3xl primary mb-5">
                  <i class="fa-solid fa-bullseye mr-3"></i>Project Goals
                </h2>
              </div>
              <div className="secondary space-y-2 ml-1 text-gray-400">
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Provide a helpful
                  system to report lost or found items.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Allow
                  authenticated users to post, update, or delete their listings.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Secure private
                  user actions with JWT and Firebase authentication.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Use data
                  visualization to monitor item categories and trends.
                </p>
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>Deliver a
                  seamless, responsive user experience.
                </p>
              </div>
            </div>
            <div>
              <div className="">
                <h2 className="primary text-3xl mb-5">
                  <i class="fa-solid fa-star mr-3"></i>Key Features
                </h2>
                <div className="flex flex-col-2 justify-between secondary gap-8 text-gray-400">
                  <div className="">
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>
                      Authentication & Authorization
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>Post Lost or
                      Found Items
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i> Update &
                      Delete Posts
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i> Item Details
                      Page
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>Dark/Light
                      Mode Toggle
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>Responsive
                      Design
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>User Avatars
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>weetAlert2 /
                      Toasts / Loaders
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>Booking
                      System
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>User Reviews
                    </p>
                    <p>
                      <i class="fa-solid fa-star-of-life mr-3"></i>Search
                      Functionality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="primary text-3xl mb-5">
              <i class="fa-regular fa-square-check mr-3"></i>Technology Used
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
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
            <div className="ml-5 mt-3 ">
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
                <p>
                  <i class="fa-solid fa-star-of-life mr-3"></i>CORS & dotenv for
                  environment & security
                </p>
              </div>
            </div>
            <div className="ml-5 mt-3 ">
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
