import React, { useEffect, useState } from "react";
import icon from "../../img/icon.png";
import { Link } from "react-router-dom";
import SignupProp from "./SignupProp";
import SignupEtudiant from "./SignupEtudiant";
import ErrorAlert from "./ErrorAlert";

function Signup() {
  const [isSelected, setIsSelected] = useState(false);
  const [isUserTypeEmpty, setIsUserTypeEmpty] = useState(false);
  const [userType, setUserType] = useState("");

  useEffect(() => {
    document.title = "Signup";
  }, []);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleNextClick = () => {
    if (userType !== "") {
      setIsSelected(true);
    } else {
      setIsUserTypeEmpty(true);
    }
  };

  return (
    <div className="form-container d-flex justify-content-center align-items-center px-3 px-lg-5">
      <div className="form-box p-3 ">
        <div className=" my-2 my-lg-0 text-center">
          <Link to="/">
            <img src={icon} className="mb-3" alt="icon" />
          </Link>
          <h1 className="">SIGN UP</h1>

          {!isSelected && (
            <form>
              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="userType"
                  name="userType"
                  aria-label="Floating label select example"
                  value={userType}
                  onChange={handleUserTypeChange}
                >
                  <option disabled value="">
                    Select user type
                  </option>
                  <option value="Propritaire">Propritaire</option>
                  <option value="Etudiant">Etudiant</option>
                </select>
                <label htmlFor="userType">User Type</label>
              </div>
              {isUserTypeEmpty && (
                   <ErrorAlert error=" Please choose your user type" />
              )}
              <button
                type="button"
                className="px-5 py-1 mb-3"
                onClick={handleNextClick}
              >
                Next
              </button>
            </form>
          )}

          {isSelected &&
            (userType === "Propritaire" ? <SignupProp /> : <SignupEtudiant />)}

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
