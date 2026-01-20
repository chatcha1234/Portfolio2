export const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen w-full pt-20 md:pt-40" // Adjusted padding-top
    >
      <div className="max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-7xl font-bold text-text">
            Hi, I'm <span className="text-primary">Chatchawan Damchum</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-text-secondary mt-4">
            Machine Learning Engineer
          </h2>
          <p className="text-text-secondary max-w-md py-4 mx-auto md:mx-0">
            I work as an AI Automation Engineer, focusing on building workflow
            automations that help teams reduce manual work and operate more
            efficiently.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-5">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-bg rounded-lg font-bold hover:bg-primary/90 transition-all"
            >
              View Work
            </a>
            <a
              href="https://drive.google.com/drive/u/0/folders/1ZIt4-Trd1Bpp3qkBPbkQun0p-OfBZa0c"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
