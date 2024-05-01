import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HouseItem from "./HouseItem";

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const listref = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://662fc85d43b6a7dce310bc64.mockapi.io/api/house/House"
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

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
    listref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const handleShowLess = () => {
    setDisplayCount(4);
    listref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        <div class="spinner-border  " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <strong className="mt-1">Loading...</strong>
      </div>
      ) : (
        <>
          <div ref={listref} className="row  ">
            {houses.slice(0, displayCount).map((house, index) => (
              <HouseItem key={index} house={house} />
            ))}
          </div>
          {houses && displayCount < houses.length ? (
            <button className="px-3 py-2 mt-3 " onClick={handleShowMore}>
              Show More
            </button>
          ) : (
            <button className="px-3 py-2 mt-3 " onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default HouseList;
