import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../Ui/Button";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";

const featuredProjects = [
  {
    title: "SABI RESEARCH",
    category: "AI Research Documentations, MVP",
    description:
      "AI research platform that writes full project documentation chapter by chapter for final year students",
    className: "lg:absolute lg:left-0 lg:top-0 lg:w-[78%]",
    image: bg1,
    mediaClass: "h-[20rem] md:h-[28rem] lg:h-[32rem]",
  },
  {
    title: "DATASYNC",
    category: "Automation, Data Pipeline",
    description:
      "AI research platform that makes full project documentation easier.",
    className: "lg:absolute lg:left-0 lg:top-[45rem] lg:w-[47%]",
    image: bg2,
    mediaClass: "h-[25rem] md:h-[38rem] lg:h-[45rem]",
  },
  {
    title: "NEURAVISION",
    category: "Web, Design System, AI",
    description:
      "AI research platform that makes full project documentation easier.",
    className: "lg:absolute lg:right-0 lg:top-[55rem] lg:w-[45%]",
    image: bg3,
    mediaClass: "h-[25rem] md:h-[34rem] lg:h-[40rem]",
  },
  {
    title: "FLOWSTATE",
    category: "Creative Visual AI",
    description:
      "AI research platform that makes full project documentation easier.",
    className: "lg:absolute lg:left-0 lg:top-[103rem] lg:w-[47%]",
    image: bg4,
    mediaClass: "h-[21rem] md:h-[25rem] lg:h-[30rem]",
  },
  {
    title: "UBUNTUAJ",
    category: "Design, Data Science, UI/UX",
    description:
      "AI research platform that makes full project documentation easier.",
    className: "lg:absolute lg:right-0 lg:top-[109rem] lg:w-[45%]",
    image: bg5,
    mediaClass: "h-[21rem] md:h-[25rem] lg:h-[33rem]",
  },
];

const FeaturedWork = () => {
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = React.useState<string | null>(null);

  return (
    <section
      id="work"
      className="w-full flex justify-center items-center bg-background py-20 md:py-28"
    >
      <div className="mx-auto w-[90%] lg:w-[85%] grid gap-5 ">
        <div className="py-6 flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 19H19V13M19 19L5 5"
              stroke="#79756F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="font-dm text-base font-medium uppercase text-secondary">
            Featured Work
          </p>
        </div>

        <div className="grid gap-y-12 lg:relative lg:block lg:h-596">
          {featuredProjects.map((project) => (
            <article key={project.title} className={project.className}>
              <div
                className={`${project.mediaClass} group relative w-full overflow-hidden bg-border md:cursor-none`}
                onMouseEnter={() => setActiveProject(project.title)}
                onMouseLeave={() => setActiveProject(null)}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setCursorPosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />

                <AnimatePresence>
                  {activeProject === project.title && (
                    <motion.div
                      className="pointer-events-none h-25 w-25 absolute left-0 top-0 z-10 hidden text-center -translate-x-1/2 -translate-y-1/2 gap-0 rounded-full bg-background border border-background py-2 font-syne text-base font-semibold capitalize text-primary md:flex flex-col items-center justify-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: cursorPosition.x,
                        y: cursorPosition.y,
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.12, ease: "easeOut" }}
                    >
                      Show<br/>more <ArrowRight size={14} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 grid gap-2 w-full">
                <div className="w-full flex justify-between gap-4">
                  <h3 className="font-syne text-lg font-bold uppercase text-primary md:text-[22.6px]">
                    {project.title}
                  </h3>

                  <p className=" text-[13px] medium text-secondary">
                    {project.category}
                  </p>
                </div>

                <p className="font-dm text-sm font-normal leading-5 text-secondary">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <Button
            className="h-14 px-7 font-syne text-xs uppercase"
            icon={<ArrowRight size={20} />}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
