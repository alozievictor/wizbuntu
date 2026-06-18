import React from "react";

const marqueeItems = ["Research ", "Design", "Build", "Scale", "Automate"];

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
        <div className="w-[90%] md:w-[85%] mx-auto grid md:grid-cols-3 gap-4 md:gap-7 py-18 border-b border-border">
          <p className="font-dm text-base font-medium uppercase text-tertiary md:col-span-1 md:text-lg">
            OUR BELIEF
          </p>
          <p className="font-syne md:col-span-2 w-full text-[26px] text-secondary font-semibold leading-relaxed md:leading-16 md:text-[50px] ">
            we believe intelligent systems should help people think better, move
            faster, and solve problems that once seemed difficult.{" "}
            <span className="text-primary">
              {" "}
              Through research, innovation, and engineering, we create products
              and platforms that transform complex challenges into practical
              solutions with real-world impact.{" "}
            </span>{" "}
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MarqueeStrip;
