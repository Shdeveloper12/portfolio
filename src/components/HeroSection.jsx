import React from "react";
import { motion } from "motion/react";
import img from "../assets/personal-pic.jpg";
const HeroSection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src={img}
          alt="Personal"
          className="max-w-sm rounded-t-2xl rounded-br-2xl border-l-8 border-b-8 border-blue-300 w-full lg:w-1/3  shadow-2xl"
        />
        <div className="mr-10 text-center lg:text-left">
          <h1 className="text-3xl font-bold">
            Hi I'm a{" "}
            <motion.span
              animate={{ color: ["#000", "#ff0081", "#000"] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              MERN Stack
            </motion.span>{" "}
            Developer
          </h1>
          <p className="py-6">
            I create web applications using MongoDB, Express.js, React.js, and
            Node.js.
          </p>
          <div className="flex gap-4 mb-5 text-center lg:text-left">
            <span className="text-4xl">
              <a href="https://www.facebook.com" target="_blank">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </span>
            <span className="text-4xl">
              <a href="https://twitter.com" target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </span>
            <span className="text-4xl">
              <a href="https://www.linkedin.com" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </span>
          </div>
          <button className="btn">Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
