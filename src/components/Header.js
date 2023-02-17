import React from "react";
import { Link } from "react-router-dom";

import "../assets/header.css";

export default function Header() {
  return (
    <div className="header">
      <Link
        to="/"
        className="logo"
        onMouseEnter={() => console.log("Logo hovered")}
      >
        <div>
          <span className="logo-arrow">{`>`}</span>Code
          <span className="logo-white">Noeller</span>
        </div>
      </Link>
      <div className="header-links">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
}
