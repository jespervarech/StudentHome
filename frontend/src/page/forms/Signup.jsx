import React, { useEffect } from "react";
import icon from "../../img/icon.png";
import { Link } from "react-router-dom";
function Signup() {
  useEffect(() => {
    document.title = "Signup";
  }, []);
  return (
    <div className="form-container d-flex justify-content-center align-items-center px-3 px-lg-5">
      <div className="form-box p-3 ">
        <div className=" my-2 my-lg-0 text-center">
          <Link to="/">
            <img src={icon} className="mb-3" />
          </Link>
          <h1 className=" ">SIGN UP</h1>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Full Name </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Phone </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Email </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Password </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="conpassword"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Confirme Password </label>
          </div>
          <button className="px-5 py-1 mb-3">sign up</button>
          <p>
            Already have an account ?{" "}
            <Link className="link" to="/login">
             Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
