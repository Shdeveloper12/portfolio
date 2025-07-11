import React from "react";
import Background from "./Background";

const EducationSection = () => {
return (
    <div className="relative">
        
    <div className=" mt-5 p-5 rounded-lg  max-w-4xl mx-auto">
        {/* Title and Description */}
        <div className="text-center">
            <h1 className="text-3xl font-bold  mb-4 primary">Education</h1>
            <p className="text-gray-300 mt-2 mb-4 secondary">
                Here are some of the educational qualifications I have achieved.
            </p>
        </div>
        <div className="grid flex-col-1 lg:grid-cols-2 md:flex-row gap-6 justify-center items-center">
            <div className="card card-border bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <div className="card-body">
                    <h2 className="card-title primary">Bsc in Computer Science</h2>
                    <p className="secondary text-gray-400">
                        I'm studying Bachelor of Science in Computer Science from Stamford
                        University, Dhaka, Bangladesh.
                    </p>
                    <p className="text-gray-200 font-bold secondary">Stamford University, Dhaka</p>
                    <p className="text-gray-500 secondary">2024 - Present</p>
                    <p className="text-gray-500 secondary">2027 - Out</p>
                    <div className="card-actions justify-end ">
                        <button className="btn  shadow-md shadow-blue-300  primary">
                            <a href="https://www.stamforduniversity.edu.bd" target="_blank" rel="noopener noreferrer">
                                <span className="">View Details</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card card-border bg-base-100 w-96 shadow-md hover:shadow-lg shadow-blue-300 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <div className="card-body p-8">
                    <h2 className="card-title primary"> Diploma in Computer Science</h2>
                    <p className="secondary text-gray-400">
                        Completed my Diploma in Computer Science from Rangpur Polytechnic
                        Institute, Rangpur, Bangladesh.
                    </p>
                    <p className="text-gray200 secondary font-bold">Rangpur Polytechnic Institute, Rangpur</p>
                    <p className="text-gray-500 secondary">2019 - 2023</p>
                    <div className="card-actions justify-end">
                        <button className="btn shadow-md shadow-blue-300 primary">
                            <a href="https://rangpur.polytech.gov.bd" target="_blank" rel="noopener noreferrer">
                                View Details
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
);
};

export default EducationSection;
