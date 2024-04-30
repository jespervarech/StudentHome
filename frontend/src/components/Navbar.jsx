import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";
function Navbar() {
  const [isAimationStart, setIsAnimationStart] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY === 0) {
        setIsAnimationStart(true);
      } else if (window.scrollY > window.innerHeight) {
        navbar.classList.add("fixed-top");
        setIsAnimationStart(true);
      } else {
        navbar.classList.remove("fixed-top");
        setIsAnimationStart(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarAnimations = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: 0.2,
      duration: 5,
      type: "spring",
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate={isAimationStart ? "visible" : "hidden"}
      variants={navbarAnimations}
      id="navbar"
      className="navbar nav  navbar-expand-lg px-3 px-lg-5"
    >
      <div className="container-fluid">
        <Link to="/" className="link logo d-flex align-items-center">
           Studnet<span>Home</span>
        </Link>

        <i
          id="menuIcon"
          className="fa-solid fa-bars d-lg-none "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        ></i>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <div className=""></div>
            <i
              type="button"
              className="fa-solid fa-xmark close d-block d-lg-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>
          <div className="offcanvas-body  my-lg-0 d-flex  justify-content-center align-items-center">
            <ul className="navbar-nav   justify-content-end flex-grow-1 ">
              <li className="nav-item my-1 my-lg-0  d-flex justify-content-center text-center">
                <Link
                  className="nav-link px-3 "
                  to="/"
                  activeclassname="active"
                  exact="true"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item my-1 my-lg-0 d-flex justify-content-center text-center">
                <Link
                  className="nav-link px-3 "
                  to="/"
                  activeclassname="active"
                  exact="true"
                  aria-current="page"
                >
                  Log in
                </Link>
              </li>
             
              <li className="nav-item my-1 my-lg-0  d-flex justify-content-center text-center">
                <Link
                  className="nav-link-button px-3 py-1"
                  to="/"
                  exact="true"
                  aria-current="page"
                >
                  Sign up
                </Link>
              </li>
             
             
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
