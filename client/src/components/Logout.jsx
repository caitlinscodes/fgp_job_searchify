import React from "react";
import {useNavigate} from "react-router-dom";

function Logout() {

  let navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem("authToken")
    navigate("/", {replace: true})
  }

  return (
    <div className="logout">
      <div className="container">
        <div className="row align-items-center my-5">
          
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;