import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI Platform Development",
    description:
      "LLM-powered applications, intelligent workflows, and document generation systems.",
  },
  {
    number: "02",
    title: "Research And Data Systems",
    description:
      "Automated research pipelines and structured output systems at scale.",
  },
  {
    number: "03",
    title: "SaaS Product Engineering",
    description:
      "Zero to launch - strategy, full-stack engineering, AI feature integration.",
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "AI agents that eliminate repetitive processes: content, documents, data.",
  },
  {
    number: "05",
    title: "API & Backend Architecture",
    description:
      "Scalable infrastructure designed to power production AI applications.",
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="service"
      className="flex w-full items-center justify-center bg-background py-1 md:py-5"
    >
      <div className="mx-auto w-[90%] lg:w-[85%]">
        <div className="mb-10 grid gap-7 border-b border-border pb-10 md:mb-16 md:grid-cols-2 md:items-end md:gap-8 md:pb-16">
          <h2 className="font-syne text-[42px] font-bold uppercase leading-tight text-primary md:text-[67px]">
            What
            <span className="block">
              We <span className="text-tertiary">Do</span>
            </span>
          </h2>

          <div className="flex w-full items-end justify-end">
            <p className="font-dm text-base font-normal leading-6 text-secondary md:ml-auto md:w-[75%] md:text-start md:text-xl md:leading-7">
              From first line of code to live product - we build complete{" "}
              <span className="text-primary">AI systems end to end.</span>
            </p>
          </div>
        </div>

        <div>
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-b border-border py-6 md:grid-cols-[2rem_1fr_1.2fr] md:items-center md:gap-14 md:py-7"
            >
              <p className="font-dm pt-1 text-sm font-semibold text-secondary md:pt-0 md:text-xl">
                {service.number}
              </p>

              <h3 className="font-syne text-2xl font-bold leading-tight text-primary md:w-82.5 md:text-[40px]">
                {service.title}
              </h3>

              <div className="col-span-2 flex w-full items-start justify-between gap-4 md:col-span-1 md:items-center md:justify-end md:pr-5">
                <p className="font-syne max-w-[82%] text-base font-normal leading-6 text-secondary md:ml-auto md:max-w-104 md:text-right md:text-xl md:leading-tight">
                  {service.description}
                </p>

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
