import React from "react";
import img1 from "../assets/html.png";
import img2 from "../assets/css.jpg";
import img3 from "../assets/tailwind.webp";
import img4 from "../assets/javascript.png";
import img5 from "../assets/react.png";
import img6 from "../assets/firebase.png";
import img7 from "../assets/mongodb.webp";
import img8 from "../assets/nodejs.png";
import img9 from "../assets/responsive.jpg";
import img10 from "../assets/api.png";
import img11 from "../assets/github.jpg";
import img12 from "../assets//c.jpg";
import img13 from "../assets/typescript-logo.png";
import img14 from "../assets/cpp.png";
import img15 from "../assets/nextjs.png";

const SkillSection = () => {
  return (
    <div className="max-w-7xl mx-auto  ">
      <h2 className="text-3xl font-bold  mb-4 text-center text-blue-500">Skills Section</h2>
      <p className="text-center">This section will showcase my skills.</p>

      <div className="grid gap-5 mx-auto overflow-x-auto md:grid-cols-2 lg:grid-cols-3  md:space-x-0 lg:gap-5 p-4">

        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img12} className="" alt="c programe" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">C</h2>
            <p className="text-justify secondary">
             Fundamental programming language known for speed and memory efficiency. Solid understanding of data structures, loops, functions, and pointers.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md border-green-400 shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border">
          <figure>
            <img src={img14} className="w-60" alt="c++ programe" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">C++</h2>
            <p className="text-justify secondary">
              Object-oriented programming language that builds on C. Proficient in classes, inheritance, polymorphism, and standard template library (STL) for efficient coding.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md  cursor-pointer  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img1} className="w-full h-55" alt="html" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">HTML</h2>
            <p className="text-justify secondary">
              Markup language used to structure and present content on the web.
              I use semantic HTML5 elements to create accessible and
              SEO-friendly layouts.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img2} alt="css" />
          </figure>
          <div className="card-body backdrop:blur-sm">
            <h2 className="card-title primary">CSS</h2>
            <p className="text-justify secondary">
             Style sheet language for designing beautiful, responsive user interfaces. Skilled in Flexbox, Grid, and modern layout techniques.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img3} alt="tailwindcss" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">Tailwind CSS</h2>
            <p className="text-justify secondary">
              Utility-first CSS framework that enables rapid UI development. Experienced in building responsive, modern designs with Tailwind and DaisyUI.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img4} className="w-full" alt="javascript" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">JavaScript</h2>
            <p className="text-justify secondary">
             Powerful scripting language used to add interactivity, logic, and dynamic behavior to websites. Proficient in ES6+ features and DOM manipulation.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img13} className="" alt="typescript" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">TypeScript</h2>
            <p className="text-justify secondary">
             Superset of JavaScript that adds static types. Enhances code quality and developer productivity with features like interfaces and generics.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img5} className="w-full h-55" alt="React.js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">React.js</h2>
            <p className="text-justify secondary">
              Popular JavaScript library for building user interfaces. Proficient in hooks, component-based architecture, routing, and state management.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img15} className="w-full h-55" alt="Next.js" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">Next.js</h2>
            <p className="text-justify secondary">
              React framework for building server-side rendered applications. Familiar with file-based routing, API routes, and static site generation.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img6} className="w-full h-55" alt="firebase" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">Firebase</h2>
            <p className="text-justify secondary">
              Google’s backend-as-a-service platform. Skilled in Firebase Auth, Firestore, Hosting, and integrating Firebase with React for secure apps.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img7} className="" alt="mongodb" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">MongoDB</h2>
            <p className="text-justify secondary">
              NoSQL database for flexible and scalable data storage. Experience in designing schemas, querying data, and using it with Mongoose in Node.js apps.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img8} alt="nodejs" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">Node.js</h2>
            <p className="text-justify secondary">
              JavaScript runtime for building fast, scalable server-side applications. Comfortable working with Express.js and RESTful API development.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img9} className="h-55 w-full" alt="responsive" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">Responsive Design</h2>
            <p className="text-justify secondary">
              Skilled in creating mobile-first and fully responsive websites using CSS media queries, Flexbox, Grid, and utility frameworks like Tailwind CSS to ensure a seamless experience across all devices.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img10} className="w-full h-55" alt="api" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">API Integration</h2>
            <p className="text-justify secondary">
              Able to consume and integrate RESTful APIs and third-party services. Proficient in fetching, displaying, and manipulating data using Axios or Fetch API in both frontend and backend.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 cursor-pointer shadow-md  shadow-blue-500 hover:scale-[1.02] transition-transform duration-300 ease-in-out border border-green-400">
          <figure>
            <img src={img11} className="" alt="github" />
          </figure>
          <div className="card-body">
            <h2 className="card-title primary">Version Control</h2>
            <p className="text-justify secondary">
              Comfortable with version control using Git and collaborating on projects via GitHub. Proficient in pushing code, managing branches, handling pull requests, and tracking project history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
