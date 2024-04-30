import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(
          "https://662fc85d43b6a7dce310bc64.mockapi.io/api/house/Ville"
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);
  return (
    <div className="search-box row px-1 w-lg-75 w-100 mt-3 mt-lg-5">
      <div className="col-md-4  g-2 p-0 px-lg-1 ">
        <div className="form-floating">
          
          <select
            className="form-select"
            id="city"
            name="city"
            aria-label="Floating label select example"
          >
            <option  disabled selected>
              Open to select
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.City}
              </option>
            ))}
          </select>
          <label htmlFor="city">Cities</label>
        </div>
      </div>
      <div className="col-md-3 g-2 p-0 px-lg-1 ">
        <div className="form-floating">
          <input
            type="number"
            className="form-control"
            id="nChamber"
            placeholder="name@example.com"
          />
          <label htmlFor="nChamber">Number of chambre ... </label>
        </div>
      </div>
      <div className="col-md-4  g-2 p-0 px-lg-1 ">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="name@example.com"
          />
          <label htmlFor="search">Search ... </label>
        </div>
      </div>
      <div className="col-md-1 g-2 p-0 px-lg-1   py-2 search-icon d-flex align-items-center justify-content-center ">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default SearchBar;
