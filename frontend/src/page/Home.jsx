import React, { useEffect } from "react";
import HousetList from "../components/HousetList";
import SearchHouses from "./modals/SearchHouses";

function Home() {
  useEffect(() => {
    document.title = "Student Home";
  }, []);
  return (
    <>
      <div className=" mx-lg-5 mx-3 home    d-flex flex-column align-items-top justify-content-top">
        <div className="bg-home  px-lg-5 px-1 d-flex flex-column align-items-center justify-content-center">
          <h2 className="m-0">Welcome to our </h2>
          <h1 className="m-0">
            Student Housing <span className="d-none d-lg-inline">...</span>
          </h1>
          <p className="px-2 m-0">
            Welcome to our Student Housing Platform! Find your ideal student
            home effortlessly. Browse through our listings of student-friendly
            houses, apartments, and shared accommodations. With easy search
            filters and detailed descriptions, your perfect home is just a click
            away.
          </p>
          <p className="text-center m-0">Start your search today!</p>
          <button
            type="button"
            className="px-3 py-2 mt-5"
            data-bs-toggle="modal"
            data-bs-target="#searchHouses"
          >
            Search NOW <i className="fa-solid fa-magnifying-glass ms-2"></i>
          </button>
          <SearchHouses />
        </div>
      </div>
      <HousetList />
    </>
  );
}

export default Home;
