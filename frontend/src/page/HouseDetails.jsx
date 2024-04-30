import React, { useState, useEffect } from "react";
import axios from "axios";
import HouseOwner from "../components/HouseOwner";
import { useParams } from "react-router-dom";
import HouseList from "../components/HousetList";
import HouseSideList from "../components/HouseSideList";

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
  return (
    <div className="px-2 px-lg-5 house-details">
      <div className="row">
        <div className="col-md-9">
          <img src="https://loremflickr.com/cache/resized/65535_52973489276_1e030c1b78_c_640_480_nofilter.jpg" />
          <div className="house-details-box p-3 mt-3 ">
            <div className="mt-2 d-flex flex-row justify-content-between ">
              <h1>{house.Prix}$</h1>
              <span className="rating">
                <i class="fa-solid fa-star true"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
            </div>
            <h2>
              {house.Superficie} {house.Adresse}
            </h2>
            <p>{house.Description}</p>
            <div
              className="d-flex flex-column flex-lg-row justify-content-between  align-items-start align-items-lg-center
            "
            >
              <ul className="m-0">
                <li>
                  <span>Disponible : </span> {house.Disponible ? "Yes" : "No"}
                </li>
              </ul>
              <ul className="m-0">
                <li>
                  <span>Surface : </span>
                  {house.Surface}
                </li>
                <li>
                  <span>Furniture : </span>
                  {house.Disponible ? "Yes" : "No"}
                </li>
              </ul>
              <ul className="m-0">
                <li>
                  <span>Rooms : </span>
                  {house.Rooms}
                </li>
                <li>
                  <span>Bathrooms : </span> {house.Bathrooms}
                </li>
              </ul>
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
