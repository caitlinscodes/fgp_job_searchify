import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginCss from "./login.module.css";

function Signup() {

  let navigate = useNavigate()

  const [username, setUsername]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [confirmPassword, setConfirmPassword]= useState("");
  const [error, setError]= useState("");

  const signupHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    if (password !== confirmPassword) {
      setPassword("")
      setConfirmPassword("")
      setTimeout(() => {
        setError("")
      }, 5000);
      return setError("Passwords don't match")
    }

    try {
      const {data} = await axios.post("/api/auth/signup", {username, email, password}, config);

      localStorage.setItem("authToken", data.token);

      navigate("/dashboard", {replace: true})
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("")
      }, 5000)
    }
  }

  return (
    <div className={LoginCss.container}>
      <div className={LoginCss.card} id={LoginCss.signupCard}>
        <div className={LoginCss.cardHeader}>
          <h1>Sign Up</h1>
        </div>
        {error && <span class="errorMessage">{error}</span>}
        <form onSubmit={signupHandler} className={LoginCss.loginForm}>
          <div className={LoginCss.loginField}>
            <label htmlFor="email-signup">Email</label>
            <input 
              type="email" 
              className={LoginCss.input} 
              id="email-signup"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={LoginCss.loginField}>
            <label htmlFor="username-signup">Username</label>
            <input 
              type="text" 
              className={LoginCss.input} 
              id="username-signup"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className={LoginCss.loginField}>
            <label htmlFor="password-signup">Password</label>
            <input 
              type="password" 
              className={LoginCss.input} 
              id="password-signup"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className={LoginCss.loginField}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              className={LoginCss.input} 
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
          <div className={LoginCss.btnDiv}>
            <button type="submit" className="btn btn-primary submitBtn" id="signupBtn">Sign Up</button>
          </div>
          <button id="switchToLogin" className={LoginCss.switchBtn}><Link to="/Login">Or Login</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Signup;