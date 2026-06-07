const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We map the problem space - what AI actually solves, not just automates.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "AI stack, data flows, integration - designed to scale from day one.",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Rapid development with continuous feedback. No scope fog, no promises.",
  },
  {
    number: "04",
    title: "Ship & Scale",
    description:
      "We deploy, monitor, and grow with your infrastructure built for real usage.",
  },
];

const HowWeBuild = () => {
  return (
    <section
      id="wizbuntu"
      className="flex w-full items-center justify-center bg-background py-20 md:py-28"
    >
      <div className="mx-auto w-[90%] lg:w-[85%] grid gap-10 md:gap-20">
        <div className="mb-14 md:mb-0">
          <p className="font-dm text-base font-medium uppercase text-tertiary">
            How We Build
          </p>

          <h2 className="font-syne max-w-6xl text-[42px] font-bold leading-tight text-primary md:text-[106px] md:leading-[1.05]">
            From Idea To
            <span className="block">Deployed Project.</span>
          </h2>
        </div>

        <div className="grid border-border md:grid-cols-4 ">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`flex flex-col max-w-73.25 justify-center border-b border-border py-8 md:min-h-116 md:border-b-0 md:px-4 md:py-0 ${
                index > 0 ? "md:border-l" : ""
              }`}
            >
              <p className="font-dm mb-8 text-6xl font-bold text-secondary/35 md:mb-20 md:text-[100px]">
                {step.number}
              </p>

              <h3 className="font-syne py-4 text-2xl font-bold text-primary md:text-[38px]">
                {step.title}
              </h3>

              <p className="font-dm text-lg leading-6 text-secondary font-normal md:text-base md:leading-7">
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
