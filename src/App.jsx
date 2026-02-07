import React, { useState, useEffect } from "react";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg selection:bg-teal selection:text-navy selection:bg-opacity-30">
      <div id="spotlight" />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Header - Fixed on large screens */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-lightestSlate sm:text-5xl">
                <a href="/">Chatchawan (Chut)</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-lightestSlate sm:text-xl">
                Full Stack Developer | AI Enthusiast
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate">
                I build clinical AI agents and modern web applications with a
                focus on impact and efficiency.
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="group flex items-center py-3 active"
                      href="#about"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightestSlate group-focus-visible:w-16 group-focus-visible:bg-lightestSlate motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightestSlate group-focus-visible:text-lightestSlate">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightestSlate group-focus-visible:w-16 group-focus-visible:bg-lightestSlate motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightestSlate group-focus-visible:text-lightestSlate">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-lightestSlate group-focus-visible:w-16 group-focus-visible:bg-lightestSlate motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightestSlate group-focus-visible:text-lightestSlate">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/chatcha1234"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/chatchawan-damchum/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.5c1.78 0 3.4 1.06 3.4 3.7z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </header>

          {/* Main Content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightestSlate lg:sr-only">
                  About
                </h2>
              </div>
              <p className="mb-4 text-slate leading-relaxed">
                I am a technologist with over 10 years of experience in the
                industry. My journey began in the core of global connectivity as
                a{" "}
                <span className="text-lightestSlate font-medium">
                  Core Network Engineer at Huawei
                </span>
                , where I spent a decade mastering complex, large-scale systems
                and mission-critical infrastructure.
              </p>
              <p className="mb-4 text-slate leading-relaxed">
                Over the{" "}
                <span className="text-teal font-medium">past year</span>, I have
                pivoted my career to focus entirely on{" "}
                <span className="text-lightestSlate font-medium">
                  Software Engineering and AI Automation
                </span>
                . This transition allows me to combine my deep understanding of
                systems with the creative power of modern programming to build
                intelligent workflows—ranging from industrial automation to
                sophisticated clinical triage agents.
              </p>
              <p className="mb-4 text-slate leading-relaxed">
                I specialize in bridging the gap between high-level human needs
                and robust technical implementation. Currently, I am deeply
                immersed in the world of{" "}
                <span className="text-teal font-medium">
                  Multi-Agent RAG systems
                </span>
                , exploring how they can solve real-world challenges in
                healthcare and business operations.
              </p>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightestSlate lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  <ExperienceCard
                    date="Oct 2024 – Jan 2025"
                    title="AI Workflow Engineer"
                    company="Vialink"
                    link="#"
                    description="Designed and implemented AI-driven automation workflows to streamline business operations and reduce manual tasks. Integrated multiple systems using APIs and webhooks. Developed custom automation logic using Python and JavaScript for data transformation and workflow orchestration."
                    tags={[
                      "Python",
                      "JavaScript",
                      "API Integration",
                      "AI Automation",
                      "Workflow Design",
                    ]}
                  />
                  <ExperienceCard
                    date="Jun 2025 – Nov 2025"
                    title="Technical Support"
                    company="UpPass"
                    link="#"
                    description="Provided technical support to diagnose and resolve complex hardware, software, and system-related issues. Troubleshoot network connectivity and system performance problems to minimize downtime and ensure service continuity."
                    tags={[
                      "Technical Support",
                      "Incident Management",
                      "Networking",
                      "Troubleshooting",
                    ]}
                  />
                  <ExperienceCard
                    date="Jan 2024 – Jun 2025"
                    title="AI & Technology Engineer"
                    company="Sri Trang Group"
                    link="#"
                    description="Developed and deployed camera-based computer vision models for glove defect detection. Implemented real-time AI inspection systems with automatic rejection of defective products. Integrated AI models with PLCs and monitoring systems."
                    tags={[
                      "Computer Vision",
                      "AI Inspection",
                      "PLC",
                      "System Integration",
                      "Python",
                    ]}
                  />
                  <ExperienceCard
                    date="Jan 2017 – Jan 2019"
                    title="Core Network Engineer"
                    company="Huawei"
                    link="#"
                    description="Designed, deployed, and maintained core network nodes including MSC, SGSN, MME, HLR/HSS, PCRF, and 5GC. Performed system configuration, integration, and capacity expansion for telecom networks. Monitored network performance and analyzed KPIs."
                    tags={[
                      "Core Network",
                      "Telecom",
                      "KPI Analysis",
                      "NOC Support",
                      "SDN/NFV",
                    ]}
                  />
                  <ExperienceCard
                    date="Jan 2014 – Jan 2017"
                    title="Network Engineer"
                    company="Interlink Telecom / Netone"
                    link="#"
                    description="Performed router and switch configuration including VLAN, IP addressing, routing, and basic network security. Supported IP and fiber optic network setup, testing, and troubleshooting for telecom projects."
                    tags={[
                      "Networking",
                      "Cisco",
                      "VLAN",
                      "Routing",
                      "Fiber Optic",
                    ]}
                  />
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center font-semibold leading-tight text-lightestSlate group"
                    aria-label="View Full Résumé"
                    href="https://drive.google.com/drive/u/0/folders/1ZIt4-Trd1Bpp3qkBPbkQun0p-OfBZa0c"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal">
                        View Full{" "}
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal">
                          Résumé
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-lightestSlate lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <ProjectCard
                    title="Medical Multi-Agent RAG"
                    image="/projects/medical.png"
                    description="A professional-grade medical consultation system built with CrewAI and Gemini 2.0. Demonstrates hierarchical multi-agent orchestration for clinical triage."
                    link="https://github.com/chatcha1234/Medical-Chatbot"
                    liveLink="https://medical-chatbot-tau.vercel.app/"
                    tags={[
                      "Python",
                      "CrewAI",
                      "Gemini 2.0",
                      "Pinecone",
                      "React",
                    ]}
                  />
                  <ProjectCard
                    title="Real-time POS System"
                    image="/projects/pos.png"
                    description="Built a scalable business management system from scratch with a focus on real-time data accuracy and intuitive user flows."
                    link="https://github.com/chatcha1234/POS-System"
                    liveLink="https://pos-system-swart-tau.vercel.app/"
                    tags={["React", "TypeScript", "Tailwind CSS", "Node.js"]}
                  />
                  <ProjectCard
                    title="Prompt Print Demand"
                    image="/projects/print.png"
                    description="An E-commerce platform concept for custom print products. Engineered with modular architecture for scalability."
                    link="https://github.com/chatcha1234/prompt-print-demand-mern"
                    liveLink="https://project-promptprint-react-xi.vercel.app/ai-design"
                    tags={["MERN Stack", "TypeScript", "Tailwind CSS"]}
                  />
                </ul>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
              <p>
                Coded in{" "}
                <a
                  href="https://code.visualstudio.com/"
                  className="font-medium text-slate-200 hover:text-teal focus-visible:text-teal"
                >
                  Visual Studio Code
                </a>
                . Built with{" "}
                <a
                  href="https://react.dev/"
                  className="font-medium text-slate-200 hover:text-teal focus-visible:text-teal"
                >
                  React
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-200 hover:text-teal focus-visible:text-teal"
                >
                  Tailwind CSS
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ date, title, company, link, description, tags }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2"
          aria-label={date}
        >
          {date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal focus-visible:text-teal group/link text-base"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-1 lg:block"></span>
                <span>
                  {title} ·{" "}
                  <span className="inline-block">
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">
            {description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map((tag) => (
              <li key={tag} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal cursor-default">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const ProjectCard = ({ title, image, description, link, liveLink, tags }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal focus-visible:text-teal group/link text-base"
                href={liveLink || link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:-inset-x-6 md:-inset-y-1 lg:block"></span>
                <span>
                  {title}
                  <span className="inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-slate">
            {description}
          </p>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="relative z-20 mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal focus-visible:text-teal"
              aria-label="View GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="mr-1 h-4 w-4"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              GitHub
            </a>
          )}

          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map((tag) => (
              <li key={tag} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal cursor-default">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt={title}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          style={{ color: "transparent" }}
          src={image}
        />
      </div>
    </li>
  );
};

export default App;
