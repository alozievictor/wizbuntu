// import { ArrowRight } from "lucide-react";
import Logo from "../../assets/Logo.png";
import Button from "../Ui/Button";

const footerLinks = ["Privacy", "Terms", "Contact"];

const Footer = () => {
  return (
    <footer
      id="blog"
      className="relative flex w-full items-center justify-center overflow-hidden bg-background pt-20 md:pt-28"
    >
      <div className="pointer-events-none absolute -inset-[35%] bg-tertiary opacity-20 blur-[900px] md:opacity-15 md:blur-[2000px]" />
      <div className="pointer-events-none absolute inset-0 bg-background/35 md:bg-background/50" />

      <div className="relative z-10 mx-auto w-[90%] lg:w-[85%]">
        <div className="grid gap-12 border-b border-border pb-16 md:grid-cols-[1.1fr_1fr] md:items-end md:pb-20">
          <h2 className="font-syne text-[42px] font-bold uppercase leading-tight text-primary md:text-[67px]">
            Got An
            <span className="block text-tertiary">AI Idea?</span>
            <span className="block text-transparent [-webkit-text-stroke:1px_#79756f] md:[-webkit-text-stroke:1.5px_#79756f]">
              Let's Build.
            </span>
          </h2>

          <div className="grid gap-6 md:gap-10 md:justify-items-end">
            <p className="font-dm max-w-md text-xl font-normal leading-7 text-secondary md:text-right">
              Tell us what you're thinking. We'll tell you how to make it real —
              <span className="text-primary"> then we'll make it real.</span>
            </p>

            <Button
              variant="footer-outline"
              className="h-15 w-full max-w-xs px-8 md:w-96"
              // icon={<ArrowRight size={18} />}
            >
              <span className="font-syne font-bold text-primary text-sm uppercase">
                Start a<span className="block">Conversation</span>
              </span>
            </Button>
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
