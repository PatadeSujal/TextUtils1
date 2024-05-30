import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [mode, changeMode] = useState("light");
  let changeImg = () => {
    if (mode === "light") {
      changeMode("dark");
    } else {
      changeMode("light");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg" style={props.navStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="about" style={props.navStyle}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={props.navStyle}
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about" style={props.navStyle}>
                About
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="darkThemes d-flex theme">
        <button
          className=" rounded-circle themeA"
          onClick={props.themeA}
        ></button>
        <button
          className=" rounded-circle themeB"
          onClick={props.themeB}
        ></button>
        <button
          className="rounded-circle themeC"
          onClick={props.themeC}
        ></button>
      </div>

      <button onClick={changeImg} className="modeBtn">
        <img
          className="themeIcon rounded container"
          onClick={props.changeTheme}
          src={
            mode === "light"
              ? "https://cdn1.iconfinder.com/data/icons/multimedia-flat-24px/24/sun_light_mode_day-512.png"
              : "public/2399554-removebg-preview.png"
          }
        />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  navStyle: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  aboutText: "About",
};

export default Navbar;
