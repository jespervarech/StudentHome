import React, { useState, useEffect } from "react";
import axios from "axios";
import HouseOwner from "../components/HouseOwner";
import { Link, useParams } from "react-router-dom";
import HouseSideList from "../components/HouseSideList";
import Reviews from "../components/Reviews";

function HouseDetails() {
  const { id } = useParams();
  const [house, setHouse] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherlogmentbyid?id=${id}`
        );
        setHouse(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, [id]);
  useEffect(() => {
    if (house) {
      document.title = `House Details - ${house.ville?.nom}`;
    }
  }, [house]);
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
          {house.ville?.nom} {house.adresse}
        </span>
      </h1>
      <div className="row">
        <div className="col-md-9 mb-3 ">
          <div className="house-details-box ">
            <img src={house?.image} />
            <div className="px-3 py-2 ">
              <div className="d-flex flex-row justify-content-between ">
                <h1>{house.prix}$</h1>
                <Reviews rating={house.noteGlobale} />
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
                    {house.Surface}
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
              <Link className="link" to="/">
                <button className="w-100 px-3 py-2 mt-3">Reserve Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <HouseOwner owner={house?.proprietaire} />
          <HouseSideList />
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
