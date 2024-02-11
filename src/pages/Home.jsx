import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.jsx";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <>
      {
        <div>
          <div class="main">
            <div class="maintext">
              <h1>Discover and post food around Cornell's campus</h1>
              <Link to="/Search"><button class="find-food-btn">
                Find
              </button>
              </Link>
              <Link to="/Post"><button class="post-food-btn">
                Post
              </button>
              </Link>
            </div>
            <div class="main_image">
              <img src="mainimg.jpg" alt="Food Sharing"></img>
            </div>
          </div>
          {/* <div class="lowerbar">
            <div id="contactlower">
              <h4> Contact </h4>
              <ul>
                <li>Email</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </ul>
            </div>
            <div id="nav-lower">
              <h4> Navigate </h4>
              <ul>
                <li>About</li>
                <li>Find</li>
                <li>Post</li>
              </ul>
            </div>
          </div> */}
        </div>}







    </>
  )
}


export default Home;