import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full h-screen  md:min-h-screen">
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center md:items-start">
        <div className="py-6 sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-4">
          I'm Chatchawan Damchum. Most of my work starts from understanding how a business process actually runs,
then turning those requirements into clear and reliable automation flows. I
regularly integrate different systems using APIs and webhooks, and combine
automation logic with AI tools to solve real, practical problems
        </p>
      </div>
    </div>
  );
};
