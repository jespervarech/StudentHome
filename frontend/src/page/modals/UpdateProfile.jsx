import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../forms/ErrorAlert";
function UpdateProfile({ profile, updateProfileDetails }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [numeroTel, setNumeroTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numeroTelError, setNumeroTelError] = useState("");
  const [adresseError, setAdresseError] = useState("");

  useEffect(() => {
    setFirstName(profile.prenom);
    setLastName(profile.nom);
    setAdresse(profile.adresse);
    setNumeroTel(profile.numeroTel);
    setEmail(profile.email);
  }, [profile]);

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
    if (!numeroTel) {
      setNumeroTelError("Phone number is required");
      isValid = false;
    } else {
      setNumeroTelError("");
    }
    if (!adresse) {
      setAdresseError("Adresse is required");
      isValid = false;
    } else {
      setAdresseError("");
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.put(
        `https://realstatestudent.onrender.com/proprietere/update/${profile.id}`,
        {
          prenon: firstName,
          nom: lastName,
          email: email,
          adresse: adresse,
          numeroTel: numeroTel,
        }
      );
      const updatedProfileData = response.data;
      updateProfileDetails(updatedProfileData);
      document.getElementById("closeupdateuser").click();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className="modal fade"
      id="updateProfile"
      tabIndex="-1"
      aria-labelledby="updateProfileLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="updateProfileLabel">
              Update Profil
            </h1>
            <i
              type="button"
              className="fa-solid fa-xmark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">
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
                id="numeroTel"
                placeholder="numeroTel"
                value={numeroTel}
                onChange={(e) => setNumeroTel(e.target.value)}
              />
              <label htmlFor="numeroTel">numeroTel</label>
            </div>
            {numeroTelError && <ErrorAlert error={numeroTelError} />}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="adresse"
                placeholder="Adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
              <label htmlFor="numeroTel">Adresse</label>
            </div>
            {adresseError && <ErrorAlert error={adresseError} />}
          </div>
          <div className="modal-footer">
            <button
              id="closeupdateuser"
              type="button"
              className="px-3 py-1"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="px-3 py-1">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
