import React from "react";
import { motion } from "framer-motion";
import img from "../assets/formal.png";
import { Link } from "react-scroll";
import { stop } from "framer-motion/client";
import SplitText from "./splitText";
import TextType from "./TextType";

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <motion.img
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          whileHover={{ scale: 1.05 }}
          src={img}
          alt="Personal"
          className="max-w-sm rounded-t-2xl shadow-blue-500 hover:cursor-pointer rounded-br-2xl border-l-8 border-b-8 border-blue-500 w-full lg:w-1/2  shadow-lg "
        />
        <div className="mr-10 text-center lg:text-left">
          <SplitText
            text="Hello, I'm Shafayet"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="text-3xl lg:text-4xl font-bold text-blue-600 my-4 h-12 flex items-center justify-center lg:justify-start">
             <TextType
            text={["Full Stack Developer", "React Developer", "Next.js Developer", "Node.js Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
          </div>
         

          <p className="text-gray-400 text-lg secondary">
            A Passionate{" "}
            <strong className="primary text-blue-500">
              Full-stack developer
            </strong>{" "}
            based in Bangladesh, dedicated to turning innovative ideas into
            beautiful, high-performance solutions.
          </p>
          <div className="flex gap-4 my-7 ml-20 lg:ml-0 lg:text-left">
            <span className="text-4xl text-black shadow-md shadow-blue-300 rounded-md hover:translate-y-1 duration-300 ease-in-out">
              <a href="https://www.facebook.com/SHShafayet237" target="_blank">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </span>
            <span className="text-4xl text-black shadow-md shadow-blue-300 rounded-md hover:translate-y-1 duration-300 ease-in-out">
              <a href="https://x.com/SHDeveloper1" target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </span>
            <span className="text-4xl text-black shadow-md shadow-blue-300 rounded-md hover:translate-y-1 duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/md-shafayet-hossen"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </span>
            <span className="text-4xl text-black shadow-md shadow-blue-300 rounded-md hover:translate-y-1 duration-300 ease-in-out">
              <a href="https://github.com/Shdeveloper12" target="_blank">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </span>
          </div>
          <div className="flex gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              <button className="btn ml-5 lg:ml-0 shadow-md shadow-blue-400 ">
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  View Projects <i class="fa-solid fa-arrow-right "></i>
                </span>
              </button>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              <button className="btn ml-5 lg:ml-0 shadow-md shadow-blue-400">
                <span className="hover:translate-x-1 transition-all duration-300 ease-in-out">
                  Contact Me <i class="fa-solid fa-phone"></i>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
