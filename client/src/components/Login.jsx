import React from "react";
import { Link } from "react-router-dom"
import LoginCss from "./login.module.css"

function Login() {
  return (
    <div className={LoginCss.container}>
      <div className={LoginCss.card} id={LoginCss.loginCard}>
        <div className={LoginCss.cardHeader}>
          <h1>Login</h1>
        </div>
        <form className={LoginCss.loginForm}>
          <div className={LoginCss.loginField}>
            <label htmlFor="username-login">Username</label>
            <input type="text" className={LoginCss.input} id="usernameLogin" />
          </div>
          <div className={LoginCss.password}>
            <label for="password-login">Password</label>
            <input type="password" className={LoginCss.input} id={LoginCss.passwordLogin} />
          </div>
          <div className={LoginCss.btnDiv}>
            <button type="submit" className="btn btn-primary" id="loginBtn">Login</button>
          </div>
          <button id={LoginCss.switchToSignUp} className={LoginCss.switchBtn}><Link to="/Signup">Or Sign Up</Link></button>
        </form>
      </div>
    </div>
  );
}

export default Login;

