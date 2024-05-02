import React, { useEffect } from "react";
import icon from "../../img/icon.png";
import { Link } from "react-router-dom";
function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="form-container d-flex justify-content-center align-items-center px-3 px-lg-5">
      <div className="form-box  p-3 ">
        <div className=" my-2 my-lg-0 text-center">
          <Link to="/">
            <img src={icon} className="mb-3" />
          </Link>
          <h1 className=" ">Log in</h1>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Email ... </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="name@example.com"
            />
            <label htmlFor="search">Password ... </label>
          </div>
          <button className="px-5 py-1 mb-3">Log in</button>
          <p>
            You don't have an account ?{" "}
            <Link className="link" to="/signup">
              Sing up
            </Link>
          </p>
          <p>
            Password forgot ?{" "}
            <Link className="link" to="/forgotPassword">
              Forgot
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
