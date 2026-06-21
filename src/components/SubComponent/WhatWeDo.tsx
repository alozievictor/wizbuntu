import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Sabi Research",
    description:
      "Research, write, and deliver better academic projects with AI-powered guidance from start to finish.",
    feature: ["AI Research", "SAAS"],
  },
  {
    number: "02",
    title: "DataSync",
    description:
      "Build reliable distributed systems with intelligent workflow orchestration and fault-tolerant execution.",
    feature: ["INFRASTRUCTURE", "AI"],
  },
  {
    number: "03",
    title: "AutoInspect",
    description:
      "Automate inspections, improve accuracy, and generate actionable reports with AI-powered analysis.",
    feature: ["AUTOMATION", "ANALYSIS"],
  },
  // {
  //   number: "04",
  //   title: "Workflow Automation",
  //   description:
  //     "AI agents that eliminate repetitive processes: content, documents, data.",
  // },
  // {
  //   number: "05",
  //   title: "API & Backend Architecture",
  //   description:
  //     "Scalable infrastructure designed to power production AI applications.",
  // },
];

const WhatWeDo = () => {
  return (
    <section
      id="service"
      className="flex w-full items-center justify-center bg-background py-1 md:py-5"
    >
      <div className="mx-auto w-[90%] lg:w-[85%] pt-0 md:pt-24">
        <div className="mb-10 border-b border-border pb-10 md:mb-14 md:gap-8 md:pb-14 lg:mb-16 lg:pb-16">
          <div className="py-6 text-tertiary flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 19H19V13M19 19L5 5"
                stroke="#1d9e75"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="font-dm text-base font-medium uppercase">
              Featured Work
            </p>
          </div>
          <h2 className="font-syne text-[42px] font-bold uppercase leading-tight text-primary md:text-[58px] lg:text-[67px]">
            What we’ve <br className="hidden md:block" /> built
          </h2>
        </div>

        <div>
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid grid-cols-[2rem_1fr] gap-x-4 gap-y-4 group border-b border-border py-6 lg:grid-cols-[2rem_1fr_1.2fr] lg:items-center lg:gap-14 md:py-7"
            >
              <p className="font-dm pt-1 text-base font-semibold text-secondary md:pt-0 md:text-xl">
                {service.number}
              </p>

              <div>
                <h3 className="font-syne text-2xl font-bold leading-tight text-primary group-hover:text-tertiary transition duration-300 md:text-[34px] lg:w-82.5 lg:text-[40px]">
                  {service.title}
                </h3>
                <p className="font-syne text-base font-normal leading-6 text-secondary md:text-lg md:leading-7 lg:ml-auto lg:text-xl lg:leading-tight">
                  {service.description}
                </p>
              </div>

              <div className="col-span-2 flex w-full flex-wrap justify-between gap-4 lg:col-span-1 items-center lg:justify-end lg:pr-5">

                <div className="flex items-center text-[#363634] transition duration-300 gap-3 px-5 py-3 border border-border rounded-full">
                  {service.feature?.map((item, index) => (
                    <span key={`${item}-${index}`} className="flex items-center gap-2 font-normal font-syne text-sm uppercase md:text-base">
                      <span>{item}</span>
                      {index < service.feature.length - 1 && (
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#363634]" />
                      )}
                    </span>
                  ))}
                </div>

                <ArrowRight
                  size={22}
                  className="mt-1 shrink-0 text-secondary transition duration-300 group-hover:translate-x-1 group-hover:text-tertiary md:mt-0 md:justify-self-end"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
