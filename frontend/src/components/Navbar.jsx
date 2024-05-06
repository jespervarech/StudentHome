import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
import UpdateProfile from "../page/modals/UpdateProfile";
import AddHouse from "../page/modals/AddHouse";
import axios from "axios";
import DeleteUser from "../page/modals/DeleteUser";
function Navbar() {
  const [profile, setProfile] = useState([]);
  const [token, setToken] = useState("");
  const [id, setId] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAimationStart, setIsAnimationStart] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (location.pathname === "/") {
        if (window.scrollY === 0) {
          setIsAnimationStart(true);
        } else if (window.scrollY > window.innerHeight) {
          navbar.classList.add("fixed-top");
          setIsAnimationStart(true);
        } else {
          navbar.classList.remove("fixed-top");
          setIsAnimationStart(false);
        }
      } else {
        navbar.classList.remove("fixed-top");
        setIsAnimationStart(true);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

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

  useEffect(() => {
    const userString = localStorage.getItem("StudentHomeUser");
    if (userString) {
      const userData = JSON.parse(userString);
      setToken(userData.accessToken);
      setId(userData.id);
      setAuthenticated(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("StudentHomeUser");
    setAuthenticated(false);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://realstatestudent.onrender.com/proprietere/afficherByid?id=${id}`
        );
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [token, id]);
  const updateProfileDetails = (updatedProfile) => {
    setProfile(updatedProfile);
  };
  return (
    <>
      <motion.nav
        initial="hidden"
        animate={isAimationStart ? "visible" : "hidden"}
        variants={navbarAnimations}
        id="navbar"
        className="navbar nav  navbar-expand-lg px-3 px-lg-5"
      >
        <div className="container-fluid">
          <Link to="/" className="link logo d-flex">
            <img src={logo} alt="Student Home" />
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
            tabIndex="-1"
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
                {authenticated ? (
                  <>
                    <li className="nav-item my-1 my-lg-0 cursor-pointer d-flex justify-content-center text-center">
                      <span
                        data-bs-toggle="modal"
                        data-bs-target="#addHouse"
                        className="nav-link px-3 "
                        activeclassname="active"
                        exact="true"
                        aria-current="page"
                      >
                        Add House
                      </span>
                    </li>
                    <li className="nav-item dropdown d-flex flex-column  px-5 px-lg-0 my-1 my-lg-0  d-flex justify-content-center text-center">
                      <div
                        type="button"
                        className="nav-link  px-3  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="text-capitalize">
                          {profile.prenom}{" "}
                        </span>{" "}
                        <span className="text-uppercase">{profile.nom}</span>
                      </div>
                      <ul className="dropdown-menu  dropdown-menu-end px-1">
                        <span className="dropdown-item user-info">
                          <i className=" me-2 fa-solid fa-user"></i>
                          {profile.email}
                        </span>
                        <span className="dropdown-item  user-info">
                          <i className=" me-2 fa-solid fa-phone"></i>
                          {profile.numeroTel}
                        </span>
                        <span className="dropdown-item ">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#updateProfile"
                            className=" px-2 px-lg-4 py-1 mt-3 w-100 d-flex align-items-center justify-content-between"
                          >
                            Edit Profile
                            <i className="fa-solid fa-pen-to-square "></i>
                          </button>
                        </span>
                        <span className="dropdown-item ">
                          <button
                            onClick={handleLogout}
                            className=" px-2 px-lg-4 py-1  w-100 d-flex align-items-center justify-content-between"
                          >
                            Logout
                            <i className="fa-solid fa-right-from-bracket "></i>
                          </button>
                        </span>
                        <span className="dropdown-item ">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#deleteUser"
                            className=" px-2 px-lg-4 py-1  w-100 d-flex align-items-center justify-content-between"
                          >
                            Delete account
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </span>
                      </ul>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item my-1 my-lg-0 d-flex justify-content-center text-center">
                      <Link
                        className="nav-link px-3 "
                        to="/login"
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
                        to="/signup"
                        exact="true"
                        aria-current="page"
                      >
                        Sign up
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
      <UpdateProfile
        profile={profile}
        updateProfileDetails={updateProfileDetails}
      />
      <DeleteUser id={id} />
      <AddHouse token={token} />
    </>
  );
}

export default Navbar;
