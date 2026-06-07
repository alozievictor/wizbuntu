import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../Ui/Button";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [scrolling, setScrolling] = React.useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentUrl]);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    handleClose();

    if (currentUrl === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    navigate("/");
  };

  React.useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      if (newWindowWidth <= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { to: "work", label: "Our Work", offset: -50 },
    { to: "service", label: "Services", offset: -50 },
    { to: "wizbuntu", label: "Why Wizbuntu", offset: -50 },
    { to: "blog", label: "Blog", offset: -50 },
  ];

  // Menu animation variants
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.07,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Icon animation
  const iconVariants: Variants = {
    open: { rotate: 0, transition: { duration: 0.2 } },
    closed: { rotate: 180, transition: { duration: 0.2 } },
  };

  return (
    <React.Fragment>
      <motion.div
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className={`w-full h-[11vh] top-0 left-0 fixed z-50 flex justify-center items-center ${
          scrolling ? "shadow-sm bg-background " : " bg-transparent"
        }`}
      >
        <div className="w-[90%] lg:w-[87%] h-full mx-auto flex justify-between items-center">
          {windowWidth > 768 && (
            <nav className="menu">
              {links.map((link) => (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  className="menu-item cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-2.5">
            <Link
              to="/"
              onClick={handleLogoClick}
              className=" cursor-pointer flex items-center h-10.25 w-41.25 justify-center"
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              //   onClick={() => navigate("/login")}
              className="text-primary font-dm font-semibold text-[13px] cursor-pointer "
            >
              HELLO@wizbuntu.COM
            </button>

            <Button
              //   onClick={() => navigate("/signup")}
              className="h-11.25 font-syne w-32.5 text-xs uppercase"
            >
              Let's talk
            </Button>
          </div>

          <motion.div
            className="md:hidden z-50 cursor-pointer p-2"
            onClick={handleClick}
            variants={iconVariants}
            animate={nav ? "open" : "closed"}
            whileTap={{ scale: 0.9 }}
          >
            {!nav ? <Menu size={24} color="currentColor" /> : <X size={24} color="currentColor" />}
          </motion.div>
        </div>

        <AnimatePresence>
          {nav && (
            <motion.div
              className="absolute w-full h-screen bg-background top-[10vh] left-0 shadow-lg overflow-hidden z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              variants={menuVariants}
            >
              <motion.ul className="grid gap-5 px-8 py-6">
                {links.map((link) => (
                  <motion.li
                    key={link.to}
                    className="w-full text-center py-2 cursor-pointer text-lg font-medium hover:text-[#E76F51] transition-colors duration-300"
                    variants={itemVariants}
                  >
                    <a
                      href={`#${link.to}`}
                      onClick={handleClose}
                      className="block w-full"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}

                <motion.li variants={itemVariants} className="mt-4">
                  <button
                    //   onClick={() => navigate("/login")}
                    className="text-primary font-dm py-2.5 font-semibold text-center flex justify-self-center text-[13px] cursor-pointer "
                  >
                    HELLO@wizbuntu.COM
                  </button>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Button
                    onClick={() => {
                      handleClose();
                      navigate("/signin");
                    }}
                    variant="outline"
                    className="w-full h-11.25 font-syne text-xs uppercase"
                  >
                     Let's talk
                  </Button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </React.Fragment>
  );
};

export default Navbar;
