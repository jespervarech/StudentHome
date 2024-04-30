import React from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

function HouseItem({ house }) {
  return (
    <div className="col-md-4 col-lg-3 my-3 g-4 d-flex justify-content-center">
      <Link className="link " to={`/houseDetails/${house.Identifiant}`}>
        <div className="house-box h-100  w-100">
          <img src={house?.image} />
          <div className="px-3 py-2">
            <div className="d-flex flex-row justify-content-between ">
              <h1>{house.Superficie}</h1>
              <Reviews rating={house.Rating} />
            </div>
            <h2>{house.Adresse}</h2>
            <p>{house.Description}</p>
            <div className="price-box d-flex flex-column justify-content-center align-items-center w-100 py-1">
              <p className="m-0">
                <span>Price : </span> {house.Prix}
              </p>
              <p className="m-0">
                <span>Disponible : </span> {house.Disponible ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HouseItem;
