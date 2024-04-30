import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span></span>
      <span></span>
      <span></span>

      <div className="menu-logo">
        <a href="#">Trackify </a>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/signup"}>
              Sign-up
            </Link>
            <Link className="nav-link" to={"/login"}>
            Log-in
            </Link>
            <Link className="nav-link" to={"/tracker"}>
            Tracker
            </Link>
            <Link className="nav-link" to={"/DashboardRouter"}>
            ProviderDash
            </Link>


            
            
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
