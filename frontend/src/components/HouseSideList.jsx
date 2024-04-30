import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function HouseSideList() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(
          "https://662fc85d43b6a7dce310bc64.mockapi.io/api/house/House"
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };

    fetchHouses();
  }, []);
  return (
      <div className="box-owner p-2 px-3 my-3">
        <h1>Latest Houses</h1>
        {houses.slice(0, 5).map((house, index) => (
          <div className="owner my-3 d-flex flex-row align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={house?.image} className="rounded-circle" />
              <div className="d-flex flex-column ms-2">
                <h1 className="m-0"> {house.Superficie}</h1>
                <p className="m-0">{house.Adresse}</p>
              </div>
            </div>
            <Link className="link" to={`/houseDetails/${house.Identifiant}`}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
        ))}
        <Link className="link" to="/"><button className="w-100 px-3 py-2 mt-3">DiscoverMore</button></Link>
      </div>
  );
}

export default HouseSideList;
