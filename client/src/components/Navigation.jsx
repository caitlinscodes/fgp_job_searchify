import React from "react";
import { NavLink } from "react-router-dom";
import NavAuthBtn from "./NavAuthBtn"

function Navigation() {

  return (
    <div className="navigation fixed-top">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            JOB.searchify()
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/jobsearch">
                  Job Search
                </NavLink>
              </li>
              <NavAuthBtn></NavAuthBtn>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;