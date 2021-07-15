import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="left">&copy; 2021 justpaste.it</div>
      <div className="right">
        <ul className="footer-list">
          <li className="footeer-lists">Account</li>
          <li className="footeer-lists">Terms</li>
          <li className="footeer-lists">Privacy</li>
          <li className="footeer-lists">Cookies</li>
          <li className="footeer-lists">Blog</li>
          <li className="footeer-lists">About</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
