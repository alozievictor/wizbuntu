import React from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "We investigate the problem, understand the users, and identify where intelligence can create the greatest impact.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "We design scalable systems, data flows, and AI capabilities with long-term reliability and growth in mind.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "We rapidly develop, test, and refine solutions through continuous experimentation and real-world feedback.",
  },
  {
    number: "04",
    title: "Ship & Scale",
    description:
      "We deploy, monitor, and continuously improve products and platforms as they adapt to changing needs and opportunities.",
  },
];

interface CountUpNumberProps {
  value: string;
}

const CountUpNumber = ({ value }: CountUpNumberProps) => {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = React.useState("00");

  React.useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, Number(value), {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(String(Math.round(latest)).padStart(2, "0"));
      },
    });

    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <p
      ref={ref}
      className="font-dm mb-8 text-6xl font-bold text-secondary/35 md:text-[72px] lg:mb-20 lg:text-[92px] xl:text-[100px]"
    >
      {displayValue}
    </p>
  );
};

const HowWeBuild = () => {
  return (
    <section
      id="wizbuntu"
      className="flex w-full items-center justify-center bg-background py-20 lg:py-36"
    >
      <div className="mx-auto w-[90%] lg:w-[85%] grid gap-10 md:gap-20">
        <div className="mb-14 md:mb-0">
          <p className="font-dm text-base font-medium uppercase text-tertiary">
            How We Build
          </p>

          <div className="pt-5 lg:flex md:justify-between items-center md:items-end w-full">
            <h2 className="font-syne max-w-6xl text-[42px] font-bold leading-tight text-primary md:text-[64px] md:leading-[1.08] lg:text-[88px] xl:text-[106px]">
              From <br className="hidden md:block" /> Research
              <br className="hidden md:block" /> To{" "}
              <span className="text-tertiary">Reality.</span>
            </h2>

            <p className="font-dm mt-6 text-lg leading-6 text-secondary font-normal md:text-xl md:leading-7 w-full lg:max-w-lg flex md:justify-self-end lg:mt-0 pt-3 lg:pt-0">
              Every product we build starts with deep research and ends with a
              live, scalable system — nothing in between is skipped.
            </p>
          </div>
        </div>

        <div className="grid border-border lg:grid-cols-4 ">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`flex flex-col w-full justify-center border-b border-border py-8 lg:min-h-116 lg:max-w-73.25 lg:border-b-0 lg:px-4 lg:py-0 ${
                index > 0 ? "lg:border-l" : ""
              }`}
            >
              <CountUpNumber value={step.number} />

              <h3 className="font-syne py-4 text-2xl font-bold text-primary md:text-[30px] lg:text-[38px]">
                {step.title}
              </h3>

              <p className="font-dm text-lg text-secondary font-normal md:text-lg md:leading-7 lg:text-xl lg:leading-tight">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeBuild;
