import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.js";

const Login = () => {
  return (
    <div class="topnav">
      <Logo />
      <a class="active" href="#home">Login</a>
      <a href="#news">Post Leftover Food</a>
      <a href="#contact">Find Leftover Food</a>
      <a href="#about">About</a>
    </div>
  )
}

export default Login;
