import React from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-group">
        {/* <GiHamburgerMenu size="2rem" /> */}
        <Link to="/" className="nav-btn btn">
          <img
            className="fifa-logo btn"
            src="https://pngimg.com/uploads/fifa/fifa_PNG7.png"
            alt="fifa-logo"
          />
        </Link>
      </div>
      <Link to="/about" className="nav-btn btn about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
