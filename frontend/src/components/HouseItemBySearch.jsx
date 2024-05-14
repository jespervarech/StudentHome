import React from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
function HouseItemBySearch({house}) {
  const firstImage = house.images && house.images.length > 0 ? house.images[0].chemain : null;
  return (
    <Link className="link w-100 " to={`/houseDetails/${house.id}`}>
      <div className="row  mb-4 houseListBySearch-item mx-1 mx-lg-0 ">
        <div className="col-md-6  p-0">
        <img src={firstImage} />
        </div>
        <div className="col-md-6 p-0 d-flex flex-column justify-content-between">
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
          <div className="price-box d-flex flex-column justify-content-center align-items-center w-100 py-1">
            <p className="m-0">
            <span>Price : </span> {house.prix}
            </p>
            <p className="m-0">
            <span>Disponible : </span> {house.disponible ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HouseItemBySearch;
