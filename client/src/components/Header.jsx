import React from "react";
import { Link } from "react-router-dom";

function Header () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={ '/' } className="navbar-brand"><span>Co</span>Man</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to={'/'} class="nav-item ps-3 pe-3 nav-link active">Home</Link>
          <Link to={'/all-contacts'} class="nav-item ps-3 pe-3 nav-link">Show All contacts</Link>
          <Link to={'/add-contact'} class="nav-item ps-3 pe-3 nav-link">Add Contact</Link>
        </ul>
        </div>
        </div>
    </nav>
  );
}

export default Header;