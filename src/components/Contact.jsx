import React from "react";

export const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen h-screen">
      <div className="max-w-screen-lg p-6 h-full mx-auto flex flex-col justify-center items-center md:items-start">
        <div className="pb-6 sm:text-center">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <form action="" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
            />

            <input
              type="email"
              name="mail"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-rose-500 to-black-200 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-90 duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
