import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function HouseSideList() {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherAllLogementByindex?index=1`
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, []);
  return (
    <div className="box-sidelist py-2 px-3 mt-3 ">
      <h1>Latest Houses</h1>

      {isLoading ? (
        <div className="loading-conatiner w-100 d-flex flex-column justify-content-center align-items-center ">
          <div className="spinner-border  " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <strong className="mt-1">Loading...</strong>
        </div>
      ) : (
        houses.slice(0, 6).map((house, index) => {
          const firstImage =
            house.images && house.images.length > 0
              ? house.images[0].chemain
              : null;
          return (
            <div
              key={index}
              className="sidelist my-3 d-flex flex-row align-items-center justify-content-between"
            >
              <div className="d-flex flex-row align-items-center">
                <img src={firstImage} className="rounded-circle" />
                <div className="d-flex flex-column ms-2">
                  <h1 className="m-0"> {house.ville?.nom}</h1>
                  <p className="m-0">{house.adresse}</p>
                </div>
              </div>
              <Link className="link" to={`/houseDetails/${house.id}`}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </div>
          );
        })
      )}
      <Link className="link" to="/">
        <button className="w-100 px-3 py-2 mt-3">DiscoverMore</button>
      </Link>
    </div>
  );
}

export default HouseSideList;
