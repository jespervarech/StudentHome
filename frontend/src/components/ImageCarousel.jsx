import React from "react";

function ImageCarousel({ images, isLoading }) {
  return (
    <div id="images-carousel" className="carousel slide " data-ride="carousel">
      {isLoading ? (
        <div className="loading-conatiner w-100 d-flex flex-column justify-content-center align-items-center ">
          <div className="spinner-border  " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <strong className="mt-1">Loading...</strong>
        </div>
      ) : (
        <>
          <div className="carousel-inner">
            {images?.map((image, index) => (
              <div
                key={image.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img className="d-block" src={image.chemain} />
              </div>
            ))}
          </div>
          {images?.length > 1 && (
            <>
              <a
                className="carousel-control-prev"
                href="#images-carousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark rounded-circle p-2"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#images-carousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark rounded-circle p-2"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>{" "}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ImageCarousel;
