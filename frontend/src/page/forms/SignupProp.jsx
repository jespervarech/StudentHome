import axios from "axios";
import React, { useState } from "react";
import ErrorAlert from "./ErrorAlert";

function SignupProp() {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [adresseError, setAdresseError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);
  const validateForm = () => {
    let isValid = true;
    if (!firstName) {
      setFirstNameError("First Name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    if (!lastName) {
      setLastNameError("Last Name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }
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
    if (!phone) {
      setPhoneError("Phone is required");
      isValid = false;
    } else {
      setPhoneError("");
    }
    if (!adresse) {
      setAdresseError("Adresse is required");
      isValid = false;
    } else {
      setAdresseError("");
    }
    if (!conPassword) {
      setConPasswordError("Confirm Password is required");
      isValid = false;
    } else {
      setConPasswordError("");
    }
    return isValid;
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (password !== conPassword) {
      setPasswordsNotMatch(true);
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://realstatestudent.onrender.com/aut/signUpParticulier",
          {
            prenon: firstName,
            nom: lastName,
            email: email,
            password: password,
            adresse: adresse,
            numeroTel: phone,
            typePropritaire: "particulier",
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={signupSubmit}>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      {passwordsNotMatch && <ErrorAlert error="Passwords Not NotMatch" />}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="firstname"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="firstname">First Name</label>
      </div>
      {firstNameError && <ErrorAlert error={firstNameError} />}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="lastname"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="lastname">Last Name</label>
      </div>
      {lastNameError && <ErrorAlert error={lastNameError} />}

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
          type="text"
          className="form-control"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
      </div>
      {phoneError && <ErrorAlert error={phoneError} />}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="adresse"
          placeholder="Adresse"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        <label htmlFor="phone">Adresse</label>
      </div>
      {adresseError && <ErrorAlert error={adresseError} />}
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
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="conpassword"
          placeholder="Confirm Password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />
        <label htmlFor="conpassword">Confirm Password</label>
      </div>
      {conPasswordError && <ErrorAlert error={conPasswordError} />}
      <button type="submit" className="px-5 py-1 mb-3">
        {isLoading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Sign Up"
        )}
      </button>
    </form>
  );
}

export default SignupProp;
