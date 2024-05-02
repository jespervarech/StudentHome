import React from "react";

function UpdateProfile() {
  return (
    <div
      className="modal fade"
      id="updateProfile"
      tabIndex="-1"
      aria-labelledby="updateProfileLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="updateProfileLabel">
             Update Profil
            </h1>
            <i
              type="button"
           className="fa-solid fa-xmark"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></i>
          </div>
          <div className="modal-body">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="name@example.com"
              />
              <label htmlFor="search">Full Name </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="name@example.com"
              />
              <label htmlFor="search">Phone </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="search">Email </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="name@example.com"
              />
              <label htmlFor="search">Password </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="px-3 py-1"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="px-3 py-1">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
