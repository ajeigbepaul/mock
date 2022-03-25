import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import EditLocationIcon from "@mui/icons-material/EditLocation";

function Header() {
  return (
    <div className="header">
      <nav className="header__container">
        <div className="header__left">
          <img src="whether2.png" alt="logo" />
          <h2>27c Sunny Day</h2>
        </div>
        <div className="header__center">
          <h2>
            MALL
            <EditLocationIcon className="header__centericon" />
            RCA
          </h2>
          <span>MADIC</span>
        </div>
        <div className="header__right">
          <h2>EN/ES/CE</h2>
          <MenuIcon className="header__righticon" />
        </div>
      </nav>
    </div>
  );
}

export default Header;
