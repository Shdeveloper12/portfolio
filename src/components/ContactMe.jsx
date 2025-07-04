import React from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const newPost = {
      ...data,
      date: new Date().toISOString(),
    };

    fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for getting in touch.",
            confirmButtonColor: "#3085d6",
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An unexpected error occurred.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="container relative z-10 max-w-7xl mx-auto px-4 py-8 mt-8 mb-8">
      <div className=" text-center mb-12">
        <h2 className="text-3xl font-bold  mb-4 primary text-blue-500">Get In Touch</h2>
        <p className="secondary text-gray-300">Let's work together</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="border shadow-blue-300 shadow-md border-gray-300 p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-xl font-bold mt-5 primary text-blue-500">Contact Information</h1>
          <div className="mt-12 space-y-3">
            <p className="secondary">
              <i className="fa-solid fa-envelope"></i>{" "}
              <span className="font-bold">Email:</span>{" "}
              <a className="text-gray-300" href="mailto:shafayet237@gmail.com">
                shafayet237@gmail.com
              </a>
            </p>
            <p className="secondary">
              <i className="fa-solid fa-phone"></i>{" "}
              <span className="font-bold">Phone:</span>{" "}
              <a className="text-gray-300" href="tel:+8801707019394">
                +8801707019394
              </a>
            </p>
            <p className="secondary">
              <i className="fa-brands fa-linkedin"></i>{" "}
              <span className="font-bold">LinkedIn:</span>{" "}
              <a
                className="text-gray-300"
                href="https://www.linkedin.com/in/md-shafayet-hossen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md Shafayet Hossain
              </a>
            </p>
            <p className="secondary">
              <i className="fa-brands fa-github"></i>{" "}
              <span className="font-bold">GitHub:</span>{" "}
              <a
                className="text-gray-300"
                href="https://github.com/Shdeveloper12"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md Shafayet Hossain
              </a>
            </p>
            <p className="secondary">
              <i className="fa-brands fa-facebook"></i>{" "}
              <span className="font-bold">Facebook:</span>{" "}
              <a
                className="text-gray-300"
                href="https://www.facebook.com/SHShafayet237"
                target="_blank"
                rel="noopener noreferrer"
              >
                SH Shafayet
              </a>
            </p>
            <p className="secondary">
              <i className="fa-brands fa-twitter"></i>{" "}
              <span className="font-bold">Twitter:</span>{" "}
              <a
                className="text-gray-300"
                href="https://x.com/SHDeveloper1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md Shafayet Hossen
              </a>
            </p>
            <p className="text-gray-300 secondary">
              <i className="fa-solid fa-location-dot"></i> <span className="font-bold">Location:</span> Dhaka,
              Bangladesh
            </p>
            <h1 className="text-xl font-bold mt-8 primary text-blue-500">Current Status</h1>
            <p className="font-semibold my-2 secondary">
              <i class="fa-solid fa-circle text-green-500"></i> Available for freelance
              projects
            </p>
          </div>
        </div>

        {/* Message Form Section */}
        <div className="border-2 border-gray-300 p-6  rounded-lg shadow-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-xl font-bold mt-4 primary text-blue-500">Send Me Message</h1>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 secondary font-bold" htmlFor="name">
                Full Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 secondary font-bold" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4"> 
              <label className="block text-gray-300 mb-2 secondary font-bold" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 secondary font-bold" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn  shadow-blue-300  shadow-md font-bold w-full secondary">
              <span className="hover:translate-y-1 duration-300 ease-in-out">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
