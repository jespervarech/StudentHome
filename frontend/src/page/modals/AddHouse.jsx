import React, { useState } from "react";
import ErrorAlert from "../forms/ErrorAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddHouse({ token }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [ville, setVille] = useState("");
  const [adresse, setAdresse] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [description, setDescription] = useState("");
  const [superficie, setSuperficie] = useState(0);
  const [prix, setPrix] = useState(0);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [villeError, setVilleError] = useState("");
  const [adresseError, setAdresseError] = useState("");
  const [codePostalError, setCodePostalError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [superficieError, setSuperficieError] = useState("");
  const [prixError, setPrixError] = useState("");
  const [image1Error, setImage1Error] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (!ville) {
      setVilleError("Ville is required");
      isValid = false;
    } else {
      setVilleError("");
    }
    if (!description) {
      setDescriptionError("Description is required");
      isValid = false;
    } else {
      setDescriptionError("");
    }
    if (!adresse) {
      setAdresseError("Adresse is required");
      isValid = false;
    } else {
      setAdresseError("");
    }
    if (!codePostal) {
      setCodePostalError("Code Postal is required");
      isValid = false;
    } else {
      setCodePostalError("");
    }
    if (!superficie) {
      setSuperficieError("Superficie is required");
      isValid = false;
    } else if (superficie <= 0) {
      setSuperficieError("Superficie must be greater than 0");
      isValid = false;
    } else {
      setSuperficieError("");
    }
    if (!prix) {
      setPrixError("Prix is required");
      isValid = false;
    } else if (prix <= 0) {
      setPrixError("Prix must be greater than 0");
      isValid = false;
    } else {
      setPrixError("");
    }
    if (!image1) {
      setImage1Error("Image is required");
      isValid = false;
    } else {
      setImage1Error("");
    }
    return isValid;
  };
  const addHouseSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://realstatestudent.onrender.com/proprietere/ajouterLogement",
        {
          superficie: superficie,
          adresse: adresse,
          description: description,
          prix: prix,
          disponible: true,
          villeNon: ville,
          codePostal: codePostal,
          images: [image1, image2, image3],
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      document.getElementById("close").click();
      navigate("/");
    } catch (error) {
      console.error("Error Post houses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="addHouse"
      tabIndex="-1"
      aria-labelledby="addHouseLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <form className="modal-content" onSubmit={addHouseSubmit}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addHouseLabel">
              Add new house
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
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                type="text"
                className="form-control "
                id="ville"
                placeholder="name@example.com"
              />
              <label htmlFor="search">Ville </label>
            </div>
            {villeError && <ErrorAlert error={villeError} />}
            <div className="form-floating mb-3">
              <input
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                type="text"
                className="form-control"
                id="Adresse"
                placeholder="adresse"
              />
              <label htmlFor="search">Adresse </label>
            </div>
            {adresseError && <ErrorAlert error={adresseError} />}
            <div className="form-floating mb-3">
              <input
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
                type="text"
                className="form-control"
                id="codepostal"
                placeholder="name@example.com"
              />
              <label htmlFor="codepostal">Code Postal </label>
            </div>
            {codePostalError && <ErrorAlert error={codePostalError} />}
            <div className="form-floating mb-3">
              <input
                value={superficie}
                onChange={(e) => setSuperficie(e.target.value)}
                type="number"
                min={0}
                className="form-control"
                id="superficie"
                placeholder="name@example.com"
              />
              <label htmlFor="superficie">Superficie (m²) </label>
            </div>
            {superficieError && <ErrorAlert error={superficieError} />}
            <div className="form-floating mb-3">
              <input
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                type="number"
                min={0}
                className="form-control "
                id="prix"
                placeholder="name@example.com"
              />
              <label htmlFor="prix">Pirx (MAD) </label>
            </div>
            {prixError && <ErrorAlert error={prixError} />}
            <div className="form-floating mb-3">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                id="descrip"
                placeholder="Leave a comment here"
              ></textarea>

              <label htmlFor="descrip">Description</label>
            </div>
            {descriptionError && <ErrorAlert error={descriptionError} />}

            <div className="form-floating mb-3">
              <input
                onChange={(e) => setImage1(e.target.files[0].name)}
                type="file"
                className="form-control"
                id="image1"
                placeholder="name@example.com"
              />
              <label htmlFor="image1">Image (Required) </label>
            </div>
            {image1Error && <ErrorAlert error={image1Error} />}
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setImage2(e.target.files[0].name)}
                type="file"
                className="form-control"
                id="image2"
                placeholder="name@example.com"
              />
              <label htmlFor="image2">Image 2 (Optional) </label>
            </div>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setImage3(e.target.files[0].name)}
                type="file"
                className="form-control"
                id="image3"
                placeholder="name@example.com"
              />
              <label htmlFor="image3">Image 3 (Optional) </label>
            </div>
          </div>

          <div className="modal-footer">
            <button
              id="close"
              type="button"
              className="px-3 py-1"
              data-bs-dismiss="modal"
            >
              cancel
            </button>
            <button type="sunmit" className="px-3 py-1">
              ADD house
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Add house"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddHouse;
