import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="/Demographic">Demographic Questionnaire</Link>
      </li>
      <li>
        <Link to="/Demonstration">Demonstration</Link>
      </li>

      <li>
        <Link to="/Scenario 1">Scenario 1</Link>
      </li>
    </nav>
  );
};
export default Nav;
