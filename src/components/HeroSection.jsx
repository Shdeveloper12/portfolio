import React from "react";
import { motion } from "framer-motion";
import img from "../assets/personal-pic.jpg";
import { Link } from "react-scroll";
const HeroSection = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          src={img}
          alt="Personal"
          className="max-w-sm rounded-t-2xl rounded-br-2xl border-l-8 border-b-8 border-blue-300 w-full lg:w-1/2  shadow-2xl"
        />
        <div className="mr-10 text-center lg:text-left">
          <h1 className="text-2xl font-bold secondary">Hi, I'm Shafayet!</h1>
          <motion.h1
            animate={{
              color: ["#0b22e8", "#0ba2e8", "#0bdbe8", "#0be8c3", "#31e023","#31e023","#0be8c3","#0bdbe8","#0ba2e8","#0b22e8"]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="py-6 text-4xl font-bold primary"
          >
            I Build Modern & Intuitive Web Experiences.
          </motion.h1>
          <p className="text-gray-700 secondary">
            A Passonate <strong className="text-black">web developer</strong>{" "}
            based in Bangladesh, dedicated to turning inovative ideas into
            beautiful, high perfomance beautiful solutions.
          </p>
          <div className="flex gap-4 my-5 ml-[110px] lg:ml-0 lg:text-left">
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
          <div className="flex gap-4">
            <Link to="projects" smooth={true} duration={500} spy={true} offset={-80}>
              
              <button className="btn ml-5 lg:ml-0">
                View Projects <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500} spy={true} offset={-80}>
            <button className="btn ml-5 lg:ml-0">Contact Me</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
