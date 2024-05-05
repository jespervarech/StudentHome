import React, { useState } from "react";

function HouseOwner({ owner }) {
  return (
    <div className="box-owner py-2 px-3">
      <h1>Proprety Agents</h1>
      <div className="owner d-flex flex-row align-items-center justify-content-between">
        <div
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          className="d-flex flex-row align-items-center w-100 curosr-pointer"
        >
          <img
            src="https://loremflickr.com/cache/resized/65535_52973489276_1e030c1b78_c_640_480_nofilter.jpg"
            className="rounded-circle"
          />
          <div className="d-flex flex-column ms-2">
            <h1 className="m-0">
              {owner?.prenom} {owner?.nom}
            </h1>
            <p className="p-0 m-0 text-capitalize">{owner?.typePropritaire}</p>
          </div>
        </div>
        <i className="fa-solid fa-circle-chevron-down"></i>
      </div>
      <div className="collapse" id="collapseExample">
        <div className="px-3 mt-3">
          <p className="p-0 m-0 d-flex align-items-center">
            <i className="info-icon fa-solid fa-envelope me-1 me-lg-3"></i>
            {owner?.adresse}
          </p>
          <p className="p-0 m-0 d-flex align-items-center">
            <i className="info-icon fa-solid fa-phone me-1 me-lg-3"></i>
            {owner?.numeroTel}
          </p>
          <p className="p-0 m-0 d-flex align-items-center">
            <i className="info-icon fa-solid fa-location-dot me-1 me-lg-3"></i>
            {owner?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HouseOwner;
