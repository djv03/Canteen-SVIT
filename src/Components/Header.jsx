import React from "react";

import SvitLogo from "../assets/svit.png";

import "./Header.css";

function Header() {
  return (
    <div className="header-section">
      <img src={SvitLogo} alt="logo" />
      <p> Canteens Menu</p>
    </div>
  );
}

export default Header;
