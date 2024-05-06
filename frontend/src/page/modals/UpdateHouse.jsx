import React, { useEffect, useState } from "react";
import ErrorAlert from "../forms/ErrorAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateHouse({ house, updateHouseDetails }) {
  const [isLoading, setIsLoading] = useState(false);
  const [adresse, setAdresse] = useState("");
  const [description, setDescription] = useState("");
  const [superficie, setSuperficie] = useState(0);
  const [prix, setPrix] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [beths, setBeths] = useState(0);
  const [adresseError, setAdresseError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [superficieError, setSuperficieError] = useState("");
  const [prixError, setPrixError] = useState("");
  const [roomsError, setRoomsError] = useState("");
  const [bethsError, setBethsError] = useState("");

  useEffect(() => {
    setAdresse(house.adresse);
    setDescription(house.description);
    setSuperficie(house.superficie);
    setPrix(house.prix);
    setRooms(house.nbrDechambre);
    setBeths(house.nbrlit);
  }, [house]);

  const validateForm = () => {
    let isValid = true;
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
      setPrixError("Prix number is required");
      isValid = false;
    } else if (prix <= 0) {
      setPrixError("Prix must be greater than 0");
      isValid = false;
    } else {
      setPrixError("");
    }
    if (!rooms) {
      setRoomsError("Rooms number is required");
      isValid = false;
    } else if (rooms <= 0) {
      setRoomsError("Rooms number must be greater than 0");
      isValid = false;
    } else {
      setRoomsError("");
    }
    if (!beths) {
      setBethsError("Beths number is required");
      isValid = false;
    } else if (beths <= 0) {
      setBethsError("Beths number  must be greater than 0");
      isValid = false;
    } else {
      setBethsError("");
    }
    return isValid;
  };
  const updateHouse = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      setIsLoading(true);
      let data = {};
      data = {
        superficie: superficie,
        adresse: adresse,
        description: description,
        prix: prix,
        disponible: true,
        nbrDechambre: rooms,
        nbrlit: beths,
      };

      const apiResponse = await axios.put(
        `https://realstatestudent.onrender.com/logement/update/${house.id}`,
        data
      );

      document.getElementById("closeUpdateHouse").click();
      const updatedHouse = {
        ...house,
        adresse,
        description,
        superficie,
        prix,
        rooms,
        beths,
      };
      updateHouseDetails(updatedHouse);
    } catch (error) {
      console.error("Error updating house:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="updateHouse"
      tabIndex="-1"
      aria-labelledby="updateHouseLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <form className="modal-content" onSubmit={updateHouse}>
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
                value={house.ville?.nom}
                type="text"
                className="form-control "
                id="ville"
                placeholder="name@example.com"
                disabled
              />
              <label htmlFor="search">Ville </label>
            </div>
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
                disabled
                value={house.ville?.codePostal}
                type="text"
                className="form-control"
                id="codepostal"
                placeholder="name@example.com"
              />
              <label htmlFor="codepostal">Code Postal </label>
            </div>
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
              <input
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                type="number"
                min={0}
                className="form-control "
                id="romms"
                placeholder="name@example.com"
              />
              <label htmlFor="romms">Rooms Number</label>
            </div>
            {roomsError && <ErrorAlert error={roomsError} />}
            <div className="form-floating mb-3">
              <input
                value={beths}
                onChange={(e) => setBeths(e.target.value)}
                type="number"
                min={0}
                className="form-control "
                id="beths"
                placeholder="name@example.com"
              />
              <label htmlFor="beths">Beths Number </label>
            </div>
            {bethsError && <ErrorAlert error={bethsError} />}
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
          </div>

          <div className="modal-footer">
            <button
              id="closeUpdateHouse"
              type="button"
              className="px-3 py-1"
              data-bs-dismiss="modal"
            >
              cancel
            </button>
            <button type="sunmit" className="px-3 py-1">
              {isLoading ? (
                <div
                  className="spinner-border  spinner-border-sm"
                  role="status"
                ></div>
              ) : (
                "Update house"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateHouse;
