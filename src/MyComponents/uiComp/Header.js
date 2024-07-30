import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo/ba.png";
import "./Style.css";

export default function Header(props) {
  const [activeLink, setActiveLink] = useState("/");

  const handleSetActive = (path) => {
    setActiveLink(path);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="100"
            className="img d-inline-block align-text-top margin-inline-auto"
          />
        </Link>

        {/* Centered title */}
        <div className="title mx-auto d-flex align-items-center">
          <h2 className="text-white mb-0">{props.title}</h2>
        </div>

        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu on the right */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item h4 mx-3">
              <Link
                className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
                onClick={() => handleSetActive("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item h4 mx-3">
              <Link
                className={`nav-link ${
                  activeLink === "/blogs" ? "active" : ""
                }`}
                to="/blogs"
                onClick={() => handleSetActive("/blogs")}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item h4 mx-3">
              <Link
                className={`nav-link ${activeLink === "/jobs" ? "active" : ""}`}
                to="/jobs"
                onClick={() => handleSetActive("/jobs")}
              >
                Jobs
              </Link>
            </li>
            <li className="nav-item h4 mx-3">
              <Link
                className={`nav-link ${
                  activeLink === "/contact" ? "active" : ""
                }`}
                to="/contact"
                onClick={() => handleSetActive("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
          {props.searchBar && (
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "BLES ACADEMY",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
