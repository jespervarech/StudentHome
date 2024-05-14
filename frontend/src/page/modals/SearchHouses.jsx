import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SearchHouses() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://realstatestudent.onrender.com/logement/afficherAllLogementBySearchandIndex?search=${search}&index=1`
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (search.trim() !== "") fetchHouses();
  }, [search]);

  return (
    <div
      className="modal fade"
      id="searchHouses"
      tabIndex="-1"
      aria-labelledby="searchHousesLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="form-floating w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Ville, Prix..."
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value.trim())}
              />
              <label htmlFor="search">
                Search: Ville, Adresse, Prix, Number of chambre ou lit...
              </label>
            </div>
          </div>
          <div className="modal-body">
            {isLoading ? (
              <div className="loading-conatiner w-100 d-flex flex-column justify-content-center align-items-center ">
                <div className="spinner-border  " role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <strong className="mt-1">Loading...</strong>
              </div>
            ) : (
              <>
                {search.trim() !== "" ? (
                  houses.length > 0 ? (
                    <>
                      <p className="reult">
                        Houses as a result for "
                        <span className="fw-bold"> {search}</span>"
                      </p>
                      {houses.map((house, index) => (
                        <div
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          key={house.id}
                          onClick={() => navigate(`/houseDetails/${house.id}`)}
                          className="cursor-pointer search-suggest-item p-2 mb-2 d-flex flex-row align-items-center justify-content-between"
                        >
                          <div className="d-flex flex-row align-items-center">
                            <img
                              src="https://loremflickr.com/cache/resized/65535_52973489276_1e030c1b78_c_640_480_nofilter.jpg"
                              className="rounded-circle me-3"
                            />
                            <div className="d-flex flex-column text-start">
                              <h1 className="m-0 p-0">{house.ville?.nom}</h1>
                              <p className="m-0">
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Quis assumenda quam doloremque
                                reprehenderit magni non, nulla dolorem delectus,
                                eligendi sit voluptatum cumque aspernatur
                                ducimus consectetur praesentium ex libero
                                molestias? Porro?
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div
                      className="alert alert-danger text-center"
                      role="alert"
                    >
                      No results about "{search}"
                    </div>
                  )
                ) : (
                  <div className="alert alert-danger text-center" role="alert">
                    Please enter something to search for
                  </div>
                )}
              </>
            )}
          </div>
          {!isLoading && houses.length >= 8 && (
            <div className="modal-footer d-flex justify-content-center">
              <button
                onClick={() => navigate(`houseList/${search}`)}
                data-bs-dismiss="modal"
                type="button"
                className="px-3 py-1 w-100"
              >
                DISCOVER MORE about "{search}"
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchHouses;