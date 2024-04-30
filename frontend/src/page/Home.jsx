import React from "react";
import SearchBar from "../components/SearchBar";
import HousetList from "../components/HousetList";

function Home() {
  return (
    <>
      <div className=" mx-lg-5 mx-2 home  d-flex flex-column align-items-center justify-content-center">
        <div className="bg-home px-lg-5 px-1 d-flex flex-column align-items-center justify-content-center">
          <h1>
            Welcome to our <br /> Student Housing Platform
          </h1>
          <p>
            Certainly, let's trim it down: For the home page: "Welcome to our
            Student Housing Platform! Find your ideal student home effortlessly.
            Browse through our listings of student-friendly houses, apartments,
            and shared accommodations. With easy search filters and detailed
            descriptions, your perfect home is just a click away. Start your
            search today!
          </p>
          <SearchBar />
        </div>
      </div>
      <HousetList />
    </>
  );
}

export default Home;
