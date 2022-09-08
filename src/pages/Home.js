import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.js";
import { Navbar } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Logo />
      <h2>this is the home page</h2>
    </div>
  )
}

export default Home;
