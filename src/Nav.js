import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="/Demographic">Demographic</Link>
      </li>
      <li>
        <Link to="/Tutorial">Toturial</Link>
      </li>

      <li>
        <Link to="/Simulation">Simulation</Link>
      </li>
    </nav>
  );
};
export default Nav;
