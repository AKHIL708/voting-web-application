import React from "react";
import logo from "../../../assets/images/new logo.jpg";
// import homeHeader from "../../../assets/images/homeHeader.jpg";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <section id="Navbar">
        <nav>
          <div className="logo">
            <Link to={"/"}>
              {" "}
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-links">
            <div className="row">
              <p>
                <Link to="/elections">Elections</Link>
              </p>
            </div>
            <div className="row">
              <div className="icon-container">
                <PersonIcon className="icon" />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
