import React from "react";
import header from "../../Assets/Screenshot 2021-04-17 at 4.36.42 PM.png";
import love from "../../Assets/love-is.png";
import border from "../../Assets/header-divider.png";
import center from "../../Assets/header-spacer.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={header} alt="header" className="header__main" />
      <img src={love} alt="love" className="header__love" />
      <img src={border} alt="border" className="header__border" />
      <div className="header__contents">
        <h3>Anand</h3>
        <img src={center} alt="border" />
        <h3>Geet</h3>
      </div>
    </div>
  );
}

export default Header;
