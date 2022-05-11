import React from "react";
import LoginCss from "./login.module.css"

function Login() {
  return (
    <div class={LoginCss.container}>
      <div class={LoginCss.card} id={LoginCss.loginCard}>
        <div class={LoginCss.cardHeader}>
          <h1>Login</h1>
        </div>
        <form class={LoginCss.loginForm}>
          <div class={LoginCss.loginField}>
            <label for="username-login">Username</label>
            <input type="text" class={LoginCss.input} id="usernameLogin" />
          </div>
          <div class={LoginCss.password}>
            <label for="password-login">Password</label>
            <input type="password" class={LoginCss.input} id={LoginCss.passwordLogin} />
          </div>
          <div class={LoginCss.btnDiv}>
            <button type="submit" class="button is-primary" id={LoginCss.loginBtn}>Login</button>
          </div>
          <button id={LoginCss.switchToSignUp} class={LoginCss.switchBtn}>Or Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

