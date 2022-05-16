import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios"

function ProtectRoute({children}) {

  let navigate = useNavigate()

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

  return (
    children
  )
}

export default ProtectRoute