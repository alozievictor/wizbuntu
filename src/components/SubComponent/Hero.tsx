import { lazy, Suspense } from "react";
import type { Application } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SPLINE_SCENE_URL =
  "https://prod.spline.design/CGCm5usRvvKNFWIz/scene.splinecode";

const handleSplineLoad = (spline: Application) => {
  spline.setBackgroundColor("rgba(0, 0, 0, 0)");
  spline.setZoom(2.8);
  spline.canvas.style.background = "transparent";
};

const Hero = () => {
  return (
    <section className="bg-hero relative w-full overflow-hidden px-0 pt-32 md:pt-28">
      <div className="pointer-events-none absolute inset-[-45%] bg-tertiary blur-[900px] opacity-25 md:opacity-15 md:blur-[2000px]" />
      <div className="pointer-events-none absolute inset-0 bg-hero/40 md:bg-hero/55" />

      <div className="flex w-full items-center justify-center relative">
        <div className="relative z-10 mx-auto grid w-[90%] border-border md:grid-cols-[0.95fr_1.05fr] md:border-b md:pb-0 lg:w-[85%] pt-0 md:pt-16">
          <div className="relative z-20 grid w-full gap-4 pb-1 md:pb-20 md:gap-7">
            <p className="font-dm mb-3 text-sm font-normal uppercase leading-5 text-secondary md:mb-9 md:text-base">
              AI Systems & Platform Development
            </p>

            <div>
              <h1 className="font-syne mt-6 text-[41px] font-bold uppercase leading-tight tracking-tight text-primary sm:text-[58px] md:mt-8 md:text-[70px] md:leading-[1.04] lg:text-[80px]">
                Building
                <span className="text-tertiary"> INTELLIGENT </span> SYSTEMS
              </h1>
              <h3 className="font-dm text-[43px] pt-2 md:pt-1 font-black uppercase leading-tight tracking-wider text-transparent [-webkit-text-stroke:1px_#CCC8C1] sm:text-[58px] md:text-[72px] md:[-webkit-text-stroke:1.5px_#CCC8C1] lg:text-[80px]">
                From design to reality
              </h3>
            </div>
          </div>

          <div className="relative hidden min-h-[12rem] w-full overflow-visible lg:block">
            <Suspense
              fallback={<div className="absolute inset-0 bg-transparent" />}
            >
              <div className="absolute right-[-44%] top-[6%] h-[50vh] w-full ">
                <Spline
                  scene={SPLINE_SCENE_URL}
                  onLoad={handleSplineLoad}
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "scale(1.7)",
                    transformOrigin: "50% 50%",
                    background: "transparent",
                  }}
                />
              </div>

              <div className="pointer-events-none absolute right-[-4%] bottom-12 rounded-full bg-[#0E1711] h-15 w-64 md:block hidden" />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-5 md:py-16 z-10 relative ">
        <div className="w-[90%] mx-auto md:w-[85%] grid md:grid-cols-[0.95fr_1.05fr] md:pb-0 lg:w-[85%]">
          <p className="font-dm pt-3 max-w-3xl text-base font-normal leading-6 text-secondary md:pt-0 md:pr-20 lg:text-xl md:leading-7">
            Wizbuntu Software Hub engineers{" "}
            <span className="text-primary">AI-native platforms</span> and
            systems that solve real problems - from research automation to
            production-grade SaaS.
          </p>

          <div className="pt-10 flex justify-center md:justify-normal items-center gap-4 self-center md:absolute md:bottom-20 right-[30%] md:right-[15%] md:pt-0 md:gap-5 md:self-auto">
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
      </div>
    </section>
  );
};

export default Hero;