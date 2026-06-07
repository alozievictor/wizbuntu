import React from "react";

const marqueeItems = [
  "Automation",
  "Research Tool",
  "AI Platforms",
  "API Systems",
  "SaaS Products",
];

const MarqueeStrip = () => {
  return (
    <React.Fragment>
      <section className="w-full h-[15vh] md:h-[28vh] flex justify-center items-center overflow-hidden border-b border-border">
        <div className="marquee-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="marquee-group"
              aria-hidden={groupIndex === 1}
            >
              {marqueeItems.map((item) => (
                <span
                  key={`${item}-${groupIndex}`}
                  className="font-dm marquee-item inline-flex shrink-0 items-center gap-4 whitespace-nowrap text-5xl font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:1px_#79756f] opacity-45 md:gap-5 md:text-[94px]"
                >
                  <span>{item}</span>
                  <span aria-hidden="true">--</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-auto flex justify-center items-center overflow-hidden"> 
        <div className="w-[90%] md:w-[85%] mx-auto flex flex-col items-start gap-4 md:gap-7 py-18 border-b border-border">
          <p className="font-dm text-base font-medium uppercase text-tertiary">
            OUR BELIEF
          </p>

          <p className="font-syne text-4xl text-primary font-semibold leading-16 md:pr-32 md:text-[62px] ">
            Most software is built around features. <span className="text-secondary">We build around intelligence</span> - systems that learn, adapt, and do the heavy lifting so your users don’t have to.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MarqueeStrip;
