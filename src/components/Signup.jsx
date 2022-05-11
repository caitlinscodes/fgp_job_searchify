import React from "react";
import LoginCss from "./login.module.css"

function Signup() {
  return (
    <div class={LoginCss.container}>
      <div class={LoginCss.card} id={LoginCss.signupCard}>
        <div class={LoginCss.cardHeader}>
          <h1>Sign Up</h1>
        </div>
        <form class={LoginCss.loginForm}>
          <div class={LoginCss.loginField}>
            <label for="email-login">Email</label>
            <input type="text" class={LoginCss.input} id="username-login" />
          </div>
          <div class={LoginCss.loginField}>
            <label for="username-login">Username</label>
            <input type="text" class={LoginCss.input} id="username-login" />
          </div>
          <div class={LoginCss.loginField}>
            <label for="password-login">Password</label>
            <input type="password" class={LoginCss.input}id="password-signup" />
          </div>
          <div class={LoginCss.btnDiv}>
            <button type="submit" class="button is-primary" id={LoginCss.loginBtn}>Sign Up</button>
          </div>
          <button id="switchToLogin" class={LoginCss.switchBtn}>Or Login</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;