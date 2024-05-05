import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HouseItem from "./HouseItem";
import Pagination from "./Pagination";
const HOUSE_PER_PAGE = 6;
function HouseList() {
  const [houses, setHouses] = useState([[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [HouseCount, setHouseCount] = useState();
  const pages = Math.ceil(HouseCount / HOUSE_PER_PAGE);
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const HouseCountResponse = await axios.get(
          "https://realstatestudent.onrender.com/logement/alllogement"
        );
        setHouseCount(HouseCountResponse.data);

        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherAllLogementByindex?index=${currentPage}`
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, [currentPage]);

  return (
    <div id="list" className="px-3 px-lg-5 house-list py-3 d-flex flex-column">
      <h1>Discover Your Ideal Student Home</h1>
      <p>
        Explore our curated selection of rental houses tailored for students.
        From single rooms to shared spaces, each listing offers comfortable
        living with flexible lease options. Find your ideal student home now!"
      </p>

      {isLoading ? (
        <div className="loading-conatiner w-100 d-flex flex-column justify-content-center align-items-center ">
          <div className="spinner-border  " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <strong className="mt-1">Loading...</strong>
        </div>
      ) : (
        <>
          <div className="row  ">
            {houses?.map((house, index) => (
              <HouseItem key={index} house={house} />
            ))}
          </div>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default HouseList;
