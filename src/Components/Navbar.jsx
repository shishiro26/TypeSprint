import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
export default function Navbar() {
  return (
    <header>
      <div className="container">
        <h3>TypeSprint</h3>
        <nav>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/play">PLAY</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>
              <Link to="/team">OUR TEAM</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}