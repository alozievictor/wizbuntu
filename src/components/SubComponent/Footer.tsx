// import { ArrowRight } from "lucide-react";
import Logo from "../../assets/Logo.png";

const footerLinks = ["Privacy", "Terms", "Contact"];

const Footer = () => {
  return (
    <footer
      id="blog"
      className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-20 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-[-35%] bg-tertiary opacity-20 blur-[900px] md:opacity-15 md:blur-[2000px]" />
      <div className="pointer-events-none absolute inset-0 bg-background/35 md:bg-background/50" />

      <div className="relative z-10 mx-auto w-[90%] lg:w-[85%]">
        <div className="grid gap-12 border-b border-border pb-16 md:grid-cols-[1.1fr_1fr] md:items-center md:pb-20">
          <h2 className="font-syne text-[48px] font-bold md:font-extrabold uppercase leading-tight text-primary md:text-[67px]">
            Tell us what
            <br className="hidden md:block" />
            <span className="block text-tertiary">you’re</span>
            <span className="block text-transparent [-webkit-text-stroke:1px_#CCC8C1] md:[-webkit-text-stroke:1.5px_#CCC8C1]">
              thinking.
            </span>
          </h2>

          <div className="grid gap-6 md:gap-10 md:justify-items-end">
            <p className="font-dm max-w-md text-xl font-normal leading-tight text-secondary">
              Tell us what you're thinking. We'll tell you how to make it real —
              <span className="text-primary"> then we'll make it real.</span>
            </p>

            <a
              href="mailto:hello@wizbuntu.com"
              className="inline-flex h-15 w-full max-w-md items-center justify-center px-8 text-center font-syne font-bold uppercase text-primary transition duration-300 border border-secondary bg-transparent hover:border-tertiary hover:bg-tertiary hover:text-primary md:w-100"
            >
              <span className="text-sm">
                Start a<span className="block">Conversation</span>
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="block h-10 w-36">
            <img
              src={Logo}
              alt="Wizbuntu"
              className="h-full w-full object-contain"
            />
          </a>

          <p className="font-dm text-lg font-normal text-secondary">
            © 2026 All Rights Reserved.
          </p>

          <nav className="flex flex-wrap gap-8">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-dm text-lg font-normal text-secondary transition duration-300 hover:text-tertiary"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
