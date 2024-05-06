import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function DeleteUser({ id }) {
  const navigate = useNavigate();
  const deleteHouse = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(
        `https://realstatestudent.onrender.com/proprietere/delete/${id}`
      );
      document.getElementById("closeDeleteUser").click();
      localStorage.removeItem("StudentHomeUser");
      navigate("/");
    } catch (error) {
      console.error("Error deleting houses:", error);
    }
  };
  return (
    <div
      className="modal fade"
      id="deleteUser"
      tabIndex="-1"
      aria-labelledby="deleteUserLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <h1 className="text-center">
              Are you sure you want to delete this account?
            </h1>
            <p>This action cannot be undone. Proceed with caution.</p>
          </div>

          <div className="modal-footer">
            <button
              id="closeDeleteUser"
              type="button"
              className="px-3 py-1"
              data-bs-dismiss="modal"
            >
              cancel
            </button>
            <button onClick={deleteHouse} type="sunmit" className="px-3 py-1">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteUser;
