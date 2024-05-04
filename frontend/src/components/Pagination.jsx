import React from "react";
import { Link } from "react-router-dom";

function Pagination({ pages, currentPage, setCurrentPage }) {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div
      aria-label="navigation"
      className=" d-flex justify-content-center  mt-3"
    >
      <ul className="pagination d-flex align-items-center ">
        <li className={`page-item ${currentPage === 1 ? "d-none" : ""}`}>
            <Link
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="link shadow-none px-3 py-1 "
              tabIndex="-1"
              aria-disabled="true"
            >
              <i class="fa-solid fa-circle-chevron-left"></i>
            </Link>
        </li>
        {generatedPages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item fw-bold" : "page-item"}
          >
            <Link
              onClick={() => setCurrentPage(page)}
              className="link shadow-none px-3 py-1 "
            >
              {page}
            </Link>
          </li>
        ))}
        <li className={`page-item ${currentPage === pages ? "d-none" : ""}`}>
            <Link
              onClick={() => setCurrentPage((next) => next + 1)}
              className="link shadow-none px-3 py-1 "
            >
             <i class="fa-solid fa-circle-chevron-right"></i>
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
