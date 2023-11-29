import React from "react";
import PropTypes from "prop-types";

function Nav(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand  " href="#">
            {props.title}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  " href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="rounded-pill p-2" style={{ background: "#042743" }}>
               <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
      <input
      onClick={props.togglemode}
      className="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
    />
    <label className="form-check-label"
     style={{ color: props.mode === "dark" ? "white" : "white" }}
    htmlFor="flexSwitchCheckDefault">
      {props.mode === "dark" ? "Enable Light Mode" : "Enable Dark Mode"}
    </label>
  </div>
</div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
