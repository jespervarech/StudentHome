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
          `https://662fc85d43b6a7dce310bc64.mockapi.io/api/house/House/${id}`
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
      document.title = `House Details - ${house.Superficie}`;
    }
  }, [house]);
  return (
    <div className=" mx-lg-5 mx-3 house-details">
      <div className="row">
        <div className="col-md-9 mb-3 ">
          <div className="house-details-box ">
            <img src={house?.image} />
            <div className="px-3 py-2 ">
              <div className="d-flex flex-row justify-content-between ">
                <h1>{house.Prix}$</h1>
                <Reviews rating={house.Rating} />
              </div>
              <h2>
                {house.Superficie} {house.Adresse}
              </h2>
              <p>{house.Description}</p>
              <div className="details-box py-2 px-3  d-flex flex-column flex-lg-row justify-content-lg-between  w-100 ">
                <span>
                  <p className="m-0">
                    <span>Price : </span> {house.Prix}
                  </p>
                  <p className="m-0">
                    <span>Disponible : </span> {house.Disponible ? "Yes" : "No"}
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
                    {house.Rooms}
                  </p>
                  <p className="m-0">
                    <span>Bathrooms : </span> {house.Bathrooms}
                  </p>
                </span>
              </div>
              <Link className="link" to="/"><button className="w-100 px-3 py-2 mt-3">Reserve Now</button></Link>
            </div>
          </div>
        
        </div>
        <div className="col-md-3">
          <HouseOwner />
          <HouseSideList />
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
