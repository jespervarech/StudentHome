import React, { useEffect, useState } from "react";
import HousetList from "../components/HousetList";
import axios from "axios";
import HouseList from "../components/HousetList";
import { Link } from "react-router-dom";
const HOUSE_PER_PAGE = 8;
function Home() {
  useEffect(() => {
    document.title = "Student Home";
  }, []);
  const [prix, setPrix] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [ville, setVille] = useState("");
  const resetSearch = () => {
    setPrix(0);
    setRooms(0);
    setVille("");
  };

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
          <div className="search-box row px-1 w-lg-75 w-100 mt-3 mt-lg-5">
            <div className="col-md-4  g-2 p-0 px-lg-1 ">
              <div className="form-floating">
                <input
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  type="text"
                  className="form-control"
                  id="ville"
                  placeholder="name@example.com"
                />
                <label htmlFor="search">Ville ... </label>
              </div>
            </div>
            <div className="col-md-3 g-2 p-0 px-lg-1 ">
              <div className="form-floating">
                <input
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  type="number"
                  min={1}
                  className="form-control"
                  id="prix"
                  placeholder="name@example.com"
                />
                <label htmlFor="prix">Prix ... </label>
              </div>
            </div>
            <div className="col-md-3 g-2 p-0 px-lg-1 ">
              <div className="form-floating">
                <input
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  type="number"
                  min={1}
                  className="form-control"
                  id="rooms"
                  placeholder="name@example.com"
                />
                <label htmlFor="rooms">Number of chambre ... </label>
              </div>
            </div>
            {!(ville || prix || rooms) ? (
              <div className=" col-md-1 g-2 p-0 px-lg-1 py-2 search-icon d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            ) : (
              <Link
                to={`/houseList?ville=${ville}&prix=${prix}&nbrChambre=${rooms}`}
                className="link col-md-1 g-2 p-0 px-lg-1 py-2 search-icon d-flex align-items-center justify-content-center"
              >
                <i class="fa-solid fa-magnifying-glass-arrow-right"></i>
              </Link>
            )}
          </div>
          {(ville !== "" || prix !== 0 || rooms !== 0) && (
            <button className="px-3 py-2 mt-3" onClick={resetSearch}>
              Reset search
            </button>
          )}
        </div>
      </div>
      <HouseList />
    </>
  );
}

export default Home;
