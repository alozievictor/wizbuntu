const Hero = () => {
  return (
    <section className="bg-hero relative flex w-full items-center justify-center overflow-hidden px-0 pt-32 h-[80vh] md:h-screen md:pt-28">
      <div className="pointer-events-none absolute inset-[-45%] bg-tertiary blur-[900px] opacity-25 md:opacity-15 md:blur-[2000px]" />
      <div className="pointer-events-none absolute inset-0 bg-hero/40 md:bg-hero/55" />

      <div className="relative z-10 mx-auto flex w-[90%] flex-col justify-center md:border-b border-border pb-2 md:pb-0 lg:w-[85%]">
        <div className="grid w-full gap-4 md:w-[50%] md:gap-7 pb-20">
          <p className="font-dm mb-3 text-sm font-normal uppercase leading-5 text-secondary md:mb-9 md:text-base">
            AI Systems & Platform Development
          </p>

          <div>
            <h1 className="font-syne mt-6 text-[43px] font-bold uppercase leading-1.07 tracking-tight text-primary sm:text-[58px] md:mt-8 md:text-[76px] md:leading-[1.04] lg:text-[93px]">
              We build <span className="text-tertiary">intelligent</span>{" "}
            </h1>
            <h3 className="font-dm text-[52px] pt-3 md:pt-1 font-black uppercase leading-none tracking-wider text-transparent [-webkit-text-stroke:1px_#ffffff] sm:text-[72px] md:text-[76px] md:[-webkit-text-stroke:1.5px_#ffffff] lg:text-[93px]">
              Software
            </h3>
          </div>

          <p className="font-dm pt-6 max-w-xl text-base font-normal leading-8 text-secondary md:pt-0 md:pr-20 md:text-xl md:leading-7">
            Wizbuntu Software Hub engineers{" "}
            <span className="text-primary">AI-native platforms</span> and
            systems that solve real problems - from research automation to
            production-grade SaaS.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4 self-center md:absolute md:bottom-10 md:right-[10%] md:mt-0 md:gap-5 md:self-auto">
          <a
            href="#work"
            aria-label="Scroll to featured work"
            className="grid h-11 w-11 place-items-center rounded-full border border-border text-secondary transition duration-300 hover:border-tertiary hover:text-tertiary md:h-12 md:w-12"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-arrow-bounce md:h-[30px] md:w-[30px]"
            >
              <path
                d="M27.3327 30.7498L20.4993 37.5832L13.666 30.7498M20.4993 37.5832V3.4165"
                stroke="#4A4844"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <span className="font-syne text-sm font-normal uppercase tracking-[0.22em] text-secondary md:text-lg">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
