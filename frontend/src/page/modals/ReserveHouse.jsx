import React, { useState } from "react";
import ErrorAlert from "../forms/ErrorAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ReserveHouse({ idLogement }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [datedebut, setdatedebut] = useState(Date);
  const [datefin, setdatefin] = useState(Date);
  const [datedebuterror, setdatedebuterror] = useState("");
  const [datefinerror, setdatefinerror] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (!datedebut) {
      setdatedebuterror("Date debut is required");
      isValid = false;
    } else {
      setdatedebuterror("");
    }
    if (!datefin) {
      setdatefinerror("Date fin is required");
      isValid = false;
    } else {
      setdatefinerror("");
    }

    return isValid;
  };
  const addreservation = async (e) => {
    e.preventDefault();

    const startDate = new Date(datedebut);
    const endDate = new Date(datefin);

    if (endDate <= startDate) {
      setdatefinerror("End date must be greater than start date");
      return;
    } else {
      setdatefinerror("");
    }

    // Validate other form fields
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `https://realstatestudent.onrender.com/Reservation/reservation`,
        {
          idEtudiant: 1,
          idLogement: idLogement,
          dateDebut: startDate.toISOString(),
          dateFin: endDate.toISOString(),
        }
      );
      console.log(response.data);
      document.getElementById("closereserv").click();
      navigate("/");
    } catch (error) {
      console.error("Error adding house:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="addreserve"
      tabIndex="-1"
      aria-labelledby="addreserveLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <form className="modal-content" onSubmit={addreservation}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addreserveLabel">
              Add new reservation
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
                value={datedebut}
                onChange={(e) => setdatedebut(e.target.value)}
                type="date"
                className="form-control "
                id="debut"
                placeholder="name@example.com"
              />
              <label htmlFor="debut">Date Debut </label>
            </div>
            {datedebuterror && <ErrorAlert error={datedebuterror} />}
            <div className="form-floating mb-3">
              <input
                value={datefin}
                onChange={(e) => setdatefin(e.target.value)}
                type="date"
                className="form-control"
                id="fin"
                placeholder="adresse"
              />
              <label htmlFor="fin">Date Fin </label>
            </div>
            {datefinerror && <ErrorAlert error={datefinerror} />}
          </div>

          <div className="modal-footer">
            <button
              id="closereserv"
              type="button"
              className="px-3 py-1"
              data-bs-dismiss="modal"
            >
              cancel
            </button>
            <button type="submit" className="px-3 py-1">
              {isLoading ? (
                <div
                  className="spinner-border  spinner-border-sm"
                  role="status"
                ></div>
              ) : (
                "Reserve"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReserveHouse;
