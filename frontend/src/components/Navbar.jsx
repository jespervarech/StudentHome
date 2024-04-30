import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav fixed-top d-flex flex-row justify-content-between  align-items-center px-1 px-lg-5 ">
      <Link className="link mx-1 p-1 logo " to="/">
        Student<span>Home</span>
      </Link>
      <div className="d-flex flex-row  m-0">
        <Link to="" className="link nav-link me-1 ">
          Home
        </Link>
        <Link to="" className="link nav-link ms-1 ">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
