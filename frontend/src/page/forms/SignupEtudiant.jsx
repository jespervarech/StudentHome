import React from "react";

function SignupEtudiant() {
  return (
    <form>
      <p className="mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="form-floating mb-3">
        <input
          required={true}
          type="text"
          className="form-control"
          id="name"
          placeholder="name@example.com"
        />
        <label htmlFor="search">Full Name </label>
      </div>
      <div className="form-floating mb-3">
        <input
          required={true}
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
        <label htmlFor="search">Email </label>
      </div>
      <div className="form-floating mb-3">
        <input
          required={true}
          type="password"
          className="form-control"
          id="password"
          placeholder="name@example.com"
        />
        <label htmlFor="search">Password </label>
      </div>
      <div className="form-floating mb-3">
        <input
          required={true}
          type="password"
          className="form-control"
          id="conpassword"
          placeholder="name@example.com"
        />
        <label htmlFor="search">Confirme Password </label>
      </div>
      <button className="px-5 py-1 mb-3">sign up</button>
    </form>
  );
}

export default SignupEtudiant;
