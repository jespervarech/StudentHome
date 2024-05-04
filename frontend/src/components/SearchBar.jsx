import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [houses, setHouses] = useState([[]]);
  useEffect(() => {
    const fetchHouseBySearch = async () => {
      try {
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherAllLogementBySearch?search=${search}`
        );
        setHouses(response.data);
        console.log(houses);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchHouseBySearch();
  }, [search]);
  return (
    <form className="search-box row px-1 w-lg-75 w-100 mt-3 mt-lg-5">
      <div className="col-md-11  g-2 p-0 px-lg-1 ">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="Viile, Prix "
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="search">Search ... </label>
        </div>
      </div>
      <button
        type="submit"
        className="col-md-1 g-2 p-0 px-lg-1 border-0   py-2 search-icon d-flex align-items-center justify-content-center "
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default SearchBar;
