import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import axios from "axios";
import Pagination from "../components/Pagination";
import HouseItemBySearch from "../components/HouseItemBySearch";
import ErrorAlert from "./forms/ErrorAlert";

function HousesListBySearch() {
  const HOUSE_PER_PAGE = 8;
  const [houses, setHouses] = useState([[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [HouseCount, setHouseCount] = useState();
  const pages = Math.ceil(HouseCount / HOUSE_PER_PAGE);
  const { search } = useParams();
  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherAllLogementBySearchandIndex?search=${search}&index=${currentPage}`
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (search.trim() !== "") fetchHouses();
  }, [currentPage]);
  useEffect(() => {
    const getCount = async () => {
      setIsLoading(true);
      const HouseCountResponse = await axios.get(
        `https://realstatestudent.onrender.com/logement/nbrLogmentSearch?search=${search}`
      );
      setHouseCount(HouseCountResponse.data);
    };
    getCount();
  }, []);
  useEffect(() => {
    if (search) {
      document.title = `Search - ${search}`;
    }
  }, [search]);
  return (
    <div className="houseListBySearch mx-lg-5 mx-3">
      <h1 className="page-path mb-3">
        <span className="one">
          Home<i className="fa-solid fa-chevron-right ms-1"></i>{" "}
        </span>
        <span className="ms-2 two">
          Search List<i className="fa-solid fa-chevron-right ms-1"></i>{" "}
        </span>
        <span className="ms-2 three">{search}</span>
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
        <ErrorAlert error={`No results about "${search}"`} />
      )}
    </div>
  );
}

export default HousesListBySearch;
