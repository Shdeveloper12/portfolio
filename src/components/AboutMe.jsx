import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div 
     initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
    
    className="mt-14 max-w-7xl mx-auto p-5">
      <div>
        <h2 className="text-3xl font-bold  mb-4 text-center primary text-blue-500">About Me</h2>
      </div>
      <div className="transform-3d ">
        
        <div
          id="about"
          className="my-12 inset-1 text-center max-w-7xl mx-auto px-4 hover:scale-[1.02] border border-green-400 shadow-md shadow-blue-500 rounded-2xl hover:shadow-lg transition duration-300 ease-in-out p-8"
        >
          <p className="text-gray-400 text-lg leading-relaxed lg:text-justify text-left secondary">
            Hello! I'm Md Shafayet Hossen, a passionate and dedicated full-stack
            developer with a strong foundation in computer science. Currently, I
            am studying on B.Sc. in Computer Science and Engineering at Stamford
            University Bangladesh, Dhaka, after successfully completing a Diploma in
            Engineering (Computer Science).
          </p>
          <p className="text-gray-400 mt-4 text-lg leading-relaxed lg:text-justify text-left secondary">
            My journey in web development began with a deep interest in how
            technology shapes our world. Over time, I developed a strong skill
            set in full-stack development, specializing in MongoDB, Express.js,
            React.js, Next.js and Node.js (MERN). I enjoy building responsive,
            user-friendly web applications that solve real problems and deliver
            great user experiences.
          </p>
          <p className="text-gray-400 mt-4 text-lg leading-relaxed lg:text-justify text-left secondary">
            As a lifelong learner, I’m continuously sharpening my coding skills
            and exploring new technologies. I'm enthusiastic about working on
            meaningful projects, collaborating with others, and growing as a
            full-stack developer continuously.
          </p>
          <p className="text-gray-400 text-lg mt-4 leading-relaxed lg:text-justify text-left secondary">
            When I’m not coding, I enjoy exploring tech communities, learning
            about UI/UX trends, and staying updated with the latest in web
            development.
          </p>

          <div className="flex justify-around gap-10 mt-8 border-t-2 border-blue-500 p-5">
            <div>
              <div>
                <h1 className="text-left secondary ">Name</h1>
                <p className="font-semibold text-left secondary">Md Shafayet Hossen</p>
              </div>
              <div className="mt-5">
                <h2 className="text-left secondary">Location</h2>
                <p className="text-left font-semibold secondary">Dhaka,Bangladesh</p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-left secondary">Email</h2>
                <p className="font-semibold secondary overflow-wrap: wrap-anywhere text-left">shafayet237@gmail.com</p>
              </div>
              <div>
                <h2 className="text-left mt-5 secondary">Avaiablity</h2>
                <p className="text-green-400 text-left font-semibold secondary">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
