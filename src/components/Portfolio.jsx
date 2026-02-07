import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Portfolio = () => {
  const projects = [];

  return (
    <div id="projects" className="w-full md:min-h-screen">
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center md:items-start">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, title, github, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={image}></img>
              <div className="flex items-center justify-evenly p-2">
                <a href={github} className="hover:scale-110 duration-200">
                  <FaGithub size={30}></FaGithub>
                </a>
                <a href={demo} className="hover:scale-110 duration-200">
                  {" "}
                  <FaYoutube size={30}></FaYoutube>{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
