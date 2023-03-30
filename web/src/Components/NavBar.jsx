import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./image/logo-image.jpeg"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="logo rounded-circle"
            src={logo}
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tour">
                Tour
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#flight">
                Flight
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn text-light" type="submit">
              EN
            </button>
            <NavLink to="/signin" className="btn btn-outline-secondary sign">
            <i class="fas fa-user-plus"></i>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
