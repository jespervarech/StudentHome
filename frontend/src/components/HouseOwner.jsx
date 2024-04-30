import React from "react";

function HouseOwner() {
  return (
    <div className="box-owner  p-2 px-3 ">
      <h1>Proprety Agents</h1>
      <div className="owner d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img
            src="https://loremflickr.com/cache/resized/65535_52973489276_1e030c1b78_c_640_480_nofilter.jpg"
            className="rounded-circle"
          />
          <div className="d-flex flex-column ms-2">
            <h1 className="m-0">Jhon doe</h1>
            <p className="m-0">Adresse</p>
          </div>
        </div>
        <i className="fa-solid fa-phone"></i>
      </div>
    </div>
  );
}

export default HouseOwner;
