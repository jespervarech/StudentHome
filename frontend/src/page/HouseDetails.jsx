import React, { useState, useEffect } from "react";
import axios from "axios";
import HouseOwner from "../components/HouseOwner";
import { Link, useParams } from "react-router-dom";
import HouseSideList from "../components/HouseSideList";
import Reviews from "../components/Reviews";
import ImageCarousel from "../components/ImageCarousel";
import DeleteHouse from "./modals/DeleteHouse";
import UpdateHouse from "./modals/UpdateHouse";
import ReserveHouse from "./modals/ReserveHouse";

function HouseDetails() {
  const [token, setToken] = useState("");
  const [iduser, setId] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const userString = localStorage.getItem("StudentHomeUser");
    if (userString) {
      const userData = JSON.parse(userString);
      setToken(userData.accessToken);
      setId(userData.id);
      setAuthenticated(true);
    }
  }, [token, iduser]);
  const { id } = useParams();
  const [house, setHouse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherlogmentbyid?id=${id}`
        );
        setHouse(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, [id]);
  useEffect(() => {
    if (house) {
      document.title = `House Details - ${house.ville?.nom}`;
    }
  }, [house]);

  const updateHouseDetails = (updatedHouse) => {
    setHouse(updatedHouse);
  };
  return (
    <div className=" mx-lg-5 mx-3 house-details">
      <h1 className="page-path mb-3">
        <span className="one">
          Home<i className="fa-solid fa-chevron-right ms-1"></i>{" "}
        </span>
        <span className="ms-2 two">
          House details<i className="fa-solid fa-chevron-right ms-1"></i>{" "}
        </span>
        <span className="ms-2 three">
          {house.ville?.nom} {house.adresse} - {house.ville?.codePostal}
        </span>
      </h1>
      <div className="row">
        <div className="col-md-9 mb-3 ">
          <div className="house-details-box ">
            {/* <img src={house?.image} /> */}
            <ImageCarousel images={house.images} isLoading={isLoading} />
            <div className="px-3 py-2 ">
              <div className="d-flex justify-content-center mt-2">
                <Reviews rating={house.noteGlobale} />
              </div>
              <div className="d-flex flex-row justify-content-between ">
                <h1>{house.prix}$</h1>

               {
                authenticated &&  <div className="dropdown">
                <i
                  className="fa-solid fa-ellipsis-vertical cursor-pointer"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul className="dropdown-menu dropdown-menu-end px-1">
                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#deleteHouse"
                    className="dropdown-item cursor-pointer  user-info"
                  >
                    <i className="fa-solid fa-trash me-2 "></i> Delete
                  </span>

                  <span
                    data-bs-toggle="modal"
                    data-bs-target="#updateHouse"
                    className="dropdown-item cursor-pointer  user-info"
                  >
                    <i className="fa-solid fa-pen-to-square me-2"></i> Update
                  </span>
                </ul>
              </div>
               }
              </div>
              <h2>
                {house.Superficie} {house.adresse}
              </h2>
              <p>{house.description}</p>
              <div className="details-box py-2 px-3  d-flex flex-column flex-lg-row justify-content-lg-between  w-100 ">
                <span>
                  <p className="m-0">
                    <span>Price : </span> {house.prix}
                  </p>
                  <p className="m-0">
                    <span>Disponible : </span> {house.disponible ? "Yes" : "No"}
                  </p>
                </span>
                <span>
                  <p className="m-0">
                    <span>Surface : </span>
                    {house.superficie}
                  </p>
                  <p className="m-0">
                    <span>Furniture : </span>
                    {house.Disponible ? "Yes" : "No"}
                  </p>
                </span>
                <span>
                  <p className="m-0">
                    <span>Rooms : </span>
                    {house.nbrDechambre}
                  </p>
                  <p className="m-0">
                    <span>Baths : </span> {house.nbrlit}
                  </p>
                </span>
              </div>
              {authenticated ? (
                <button  data-bs-toggle="modal"
                data-bs-target="#addreserve" className="w-100 px-3 py-2 mt-3">Reserve Now</button>
              ) : (
                <button className="w-100 px-3 py-2 mt-3 text-danger">
                  Please authenticate to reserve
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <HouseOwner owner={house?.proprietaire} />
          <HouseSideList />
        </div>
      </div>
      <DeleteHouse id={id} />
      <ReserveHouse idLogement={id}/>
      <UpdateHouse house={house} updateHouseDetails={updateHouseDetails} />
    </div>
  );
}

export default HouseDetails;
