import {useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios"

function Dashboard() {
  let navigate = useNavigate()

  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {

    if(!localStorage.getItem("authToken")) {
      navigate("/login", {replace: true}) 
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("authToken")
        }
      }

      try {
        const {data} = await axios.get("/api/private", config)
        setPrivateData(data.data)
      } catch (err) {
        localStorage.removeItem("authToken")
        navigate("/login", {replace: true})
      }
    }
    fetchPrivateData();
  })

  const logoutHandler = () => {
    localStorage.removeItem("authToken")
    navigate("/", {replace: true})
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h1 className="font-weight-light">Dashboard</h1>
            <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;