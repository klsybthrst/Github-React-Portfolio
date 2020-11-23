import React from "react";
import { NavLink } from "react-router-dom"; 

export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
        <NavLink className="navbar-brand" to="/about">Kelsey Bathurst</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <NavLink className="nav-link" to="/about">Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/resume">Resume</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
          </ul>
        </div>
    </nav>
    
  );
}