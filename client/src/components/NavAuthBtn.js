import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavAuthBtn() {
  let navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem("authToken")
    navigate("/", {replace: true})
  }
  if(!localStorage.getItem("authToken")) {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    )           
  } else {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/resume-builder">
            Resume Builder
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="nav-link logoutBtn" onClick={logoutHandler}>
            Logout
          </button>
        </li>
      </>
    )
  }
}

export default NavAuthBtn;