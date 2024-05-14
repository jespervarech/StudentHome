import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import axios from "axios";
import Pagination from "../components/Pagination";
import HouseItemBySearch from "../components/HouseItemBySearch";
import ErrorAlert from "./forms/ErrorAlert";
const HOUSE_PER_PAGE = 8;
function HousesListBySearch() {
  const [currentPage, setCurrentPage] = useState(1);
  const [HouseCount, setHouseCount] = useState();
  const pages = Math.ceil(HouseCount / HOUSE_PER_PAGE);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ville = searchParams.get("ville");
  const prix = searchParams.get("prix");
  const rooms = searchParams.get("nbrChambre");
  const [isLoading, setIsLoading] = useState(false);
  const [houses, setHouses] = useState([[]]);
  // console.log(ville + prix + rooms)
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/filtreLogement?ville=${ville}&prix=${prix}&nbrChambres=${rooms}&index=1`
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
  useEffect(() => {
      document.title = `Search `;
  }, []);
  return (
    <div className="houseListBySearch mx-lg-5 mx-3">
      <h1 className="page-path mb-3">
        <span className="one">
          Home<i className="fa-solid fa-chevron-right ms-1"></i>{" "}
        </span>
        <span className="ms-2 two">
          Search List<i className="fa-solid fa-chevron-right ms-1"></i>{" "}
        </span>
        <span className="ms-2 three">  {rooms}  {prix}</span>
      </h1>
      {isLoading ? (
        <div className="loading-conatiner w-100 d-flex flex-column justify-content-center align-items-center ">
          <div className="spinner-border  " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <strong className="mt-1">Loading...</strong>
        </div>
      ) : houses.length > 0 ? (
        <>
          <div className="row ">
            {houses?.map((house, index) => (
              <HouseItemBySearch key={index} house={house} />
            ))}
          </div>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <ErrorAlert error={`No results about "${ville} & ${rooms} & ${prix}"`} />
      )}
    </div>
  );
}

export default HousesListBySearch;
