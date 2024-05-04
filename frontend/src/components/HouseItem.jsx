import React from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

function HouseItem({ house }) {
  return (
    <div className="col-md-4 col-lg-3 px-3 px-lg-2  g-4 d-flex justify-content-center">
      <Link className="link w-100 " to={`/houseDetails/${house.id}`}>
        <div className="house-box h-100 w-100 d-flex flex-column justify-content-between">
          <span>
            <img src={house?.image} />
            <div className="px-3 py-2 w-100">
              <div className="d-flex flex-row justify-content-between">
                <h1>
                  <i className="fa-solid fa-location-dot me-3"></i>
                  {house.id} {house.ville?.nom}
                </h1>
                <Reviews rating={house.noteGlobale} />
              </div>
              <h2>{house.adresse}</h2>
              <p>{house.description}</p>
            </div>
          </span>
          <div className="price-box d-flex flex-column justify-content-center align-items-center w-100 py-1">
            <p className="m-0">
              <span>Price : </span> {house.prix}
            </p>
            <p className="m-0">
              <span>Disponible : </span> {house.disponible ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HouseItem;
