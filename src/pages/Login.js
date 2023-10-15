import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.js";
import About from './OtherPageEx.js';

const Login = () => {
  return (
    <>
      {/* <div class="topnav" margin-bottom="120px">
        <Logo />
        <a class="active" href="#login">Login</a>
        <a href="#post">Post Leftover Food</a>
        <a href="#searchpage">Find Leftover Food</a>
        <a href="#about">About</a>
      </div> */}

      <center><h1>Log in with your Cornell NetID</h1></center>

      <center>
        <div class="col-lg-12 login-form">
          <div class="col-lg-12 login-form">
            <form class="login">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input type="text" class="login__input" placeholder="NetID" />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input type="password" class="login__input" placeholder="Password" />
              </div>
              <button class="button login__submit">
                <span class="button__text">Log in</span>
              </button>
            </form>
          </div>
        </div>
      </center>
    </>
  )
}

export default Login;
