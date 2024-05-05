import React, { useEffect, useState } from "react";
import icon from "../../img/icon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorAlert from "./ErrorAlert";
function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(
        "https://realstatestudent.onrender.com/aut/signInParticulier",
        {
          email: email,
          password: password,
          typePropritaire: "particulier",
        }
      );
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        navigate("/");
      } else {
        console.error("Token not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };
  return (
    <div className="form-container d-flex justify-content-center align-items-center px-3 px-lg-5">
      <form onSubmit={loginSubmit} className="form-box  p-3 ">
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
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          {emailError && <ErrorAlert error={emailError} />}
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          {passwordError && <ErrorAlert error={passwordError} />}
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
      </form>
    </div>
  );
}

export default Login;
