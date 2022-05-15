import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginCss from "./login.module.css";

function Login() {
  let navigate = useNavigate()

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError]= useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json"
      }
    }

    try {
      const {data} = await axios.post("/api/auth/login", {email, password}, config);

      localStorage.setItem("authToken", data.token);

      console.log(localStorage.getItem("authToken"))

      navigate("/dashboard", {replace: true})
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("")
      }, 5000)
    }

  }

  return (
    <div className="login">
    <div className={LoginCss.container}>
      <div className={LoginCss.card} id={LoginCss.loginCard}>
        <div className={LoginCss.cardHeader}>
          <h1>Login</h1>
        </div>
        {error && <span class="errorMessage">{error}</span>}
        <form onSubmit={loginHandler} className={LoginCss.loginForm}>
          <div className={LoginCss.loginField}>
            <label htmlFor="username-login">Email</label>
            <input 
              type="email" 
              className={LoginCss.input} 
              id="email-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={LoginCss.password}>
            <label htmlFor="password-login">Password</label>
            <input 
              type="password" 
              className={LoginCss.input} 
              id="password-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className={LoginCss.btnDiv}>
            <button type="submit" className="btn btn-primary submitBtn" id="loginBtn">Login</button>
          </div>
          <button id={LoginCss.switchToSignUp} className={LoginCss.switchBtn}><Link to="/Signup">Or Sign Up</Link></button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;

