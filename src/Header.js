import React from "react";
import "./Header.css";
import header1 from "./images/header1.png";
import header2 from "./images/header2.png";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <img className="header-image1" src={header1} />
        <img className="header-image2" src={header2} />
        <button className="add-note">Add Note</button>
        <button className="Account">Account</button>
      </div>
    </div>
  );
}

export default Header;
