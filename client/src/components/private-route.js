// import {useNavigate} from "react-router-dom";
// import React, {useState, useEffect} from "react";
// import axios from "axios"


// const PrivateRoute = ({element: Element, ...rest}) => {

//   let navigate = useNavigate()

//   const Dashboard = ({history}) => {
//   const [error, setError] = useState("");
//   const [privateData, setPrivateData] = useState("");

//   useEffect(() => {
//     if(!localStorage.getItem("authToken")) {
//       navigate("/login", {replace: true}) 
//     }

//     const fetchPrivateData = async () => {
//       const config = {
//         headers: {
//           "content-type": "application.json",
//           authorization: localStorage.getItem("authToken")
//         }
//       }

//       try {
//         const {data} = await axios.get("/api/private", config)
//         setPrivateData(data.data)
//       } catch (err) {
//         localStorage.removeItem("authToken")
//         setError("You are not logged in")
//       }
//     }
//   })

  // return (
  //   localStorage.getItem("authToken")

  //   navigate("/login", {replace: true})          

  // )
//   }
// }
// export default PrivateRoute