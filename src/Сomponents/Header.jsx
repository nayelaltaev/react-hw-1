import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="Menu">
        <Link to="/">Home</Link>
        <Link to="/meditation">Meditation</Link>
        <Link to="/about">About</Link>
        <Link to="/sign">Sign up</Link>
      </div>
    </>
  );
}

export default Header;
