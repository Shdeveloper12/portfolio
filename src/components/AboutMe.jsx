import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-14 max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold  mb-4 text-center primary">About Me</h2>
      </div>
      <div className="">
        
        <div
          id="about"
          className="my-12 inset-1 text-center max-w-7xl mx-auto px-4 border rounded-2xl hover:shadow-lg transition duration-300 ease-in-out p-8"
        >
          <p className="text-gray-700 text-lg leading-relaxed lg:text-justify text-left secondary">
            Hello! I'm Md Shafayet Hossen, a passionate and dedicated MERN stack
            developer with a strong foundation in computer science. Currently, I
            am pursuing my B.Sc. in Computer Science and Engineering at Stamford
            University, Dhaka, after successfully completing a Diploma in
            Engineering (Computer Science).
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed lg:text-justify text-left secondary">
            My journey in web development began with a deep interest in how
            technology shapes our world. Over time, I developed a strong skill
            set in full-stack development, specializing in MongoDB, Express.js,
            React.js, and Node.js (MERN). I enjoy building responsive,
            user-friendly web applications that solve real problems and deliver
            great user experiences.
          </p>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed lg:text-justify text-left secondary">
            As a lifelong learner, I’m continuously sharpening my coding skills
            and exploring new technologies. I'm enthusiastic about working on
            meaningful projects, collaborating with others, and growing as a
            full-stack developer in the tech industry.
          </p>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed lg:text-justify text-left secondary">
            When I’m not coding, I enjoy exploring tech communities, learning
            about UI/UX trends, and staying updated with the latest in web
            development.
          </p>

          <div className="flex justify-between gap-10 mt-8 border-t-2 p-5">
            <div>
              <div>
                <h1 className="text-left secondary">Name</h1>
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
                <p className="font-semibold secondary">shafayet237@gmail.com</p>
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
    </div>
  );
};

export default AboutMe;
