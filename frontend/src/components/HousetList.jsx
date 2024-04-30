import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HouseItem from "./HouseItem";

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const listref = useRef(null);
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

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
    listref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const handleShowLess = () => {
    setDisplayCount(3);
    listref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="list" className="px-2 px-lg-5 house-list py-3 d-flex flex-column">
      <h1>Discover Your Ideal Student Home</h1>
      <p>
        Explore our curated selection of rental houses tailored for students.
        From single rooms to shared spaces, each listing offers comfortable
        living with flexible lease options. Find your ideal student home now!"
      </p>
      <div ref={listref} className="row ">
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
    </div>
  );
}

export default HouseList;
