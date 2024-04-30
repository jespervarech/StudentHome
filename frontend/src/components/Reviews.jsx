import React from "react";

function Reviews({ rating }) {
  const firstDigit = rating?.toString().charAt(0);

  return (
    <span className="rating">
      <i className={`${firstDigit >= 1 ? "fa-solid " : "fa-regular" } fa-star `}></i>
      <i className={`${firstDigit >= 2 ? "fa-solid " : "fa-regular" } fa-star `}></i>
      <i className={`${firstDigit >= 3 ? "fa-solid " : "fa-regular" } fa-star `}></i>
      <i className={`${firstDigit >= 4 ? "fa-solid " : "fa-regular" } fa-star `}></i>
      <i className={`${firstDigit >= 5 ? "fa-solid " : "fa-regular" } fa-star `}></i>
    </span>
  );
}

export default Reviews;
