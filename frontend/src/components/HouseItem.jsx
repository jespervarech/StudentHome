import React from "react";
import { Link } from "react-router-dom";

function HouseItem({ house }) {
  return (
    <div className=" col-md-4 my-3 g-4 d-flex justify-content-center">
      <Link className="link " to={`/houseDetails/${house.Identifiant}`}>
        <div className="house-box  w-100">
          <img src={house?.image} />
          <div className="px-3 py-2">
            <div className="d-flex flex-row justify-content-between ">
              <h1>{house.Superficie}</h1>
              <span className="rating">
                <i class="fa-solid fa-star true"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
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
