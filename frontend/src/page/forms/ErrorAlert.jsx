import React from "react";

function ErrorAlert({ error }) {
  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
}

export default ErrorAlert;
