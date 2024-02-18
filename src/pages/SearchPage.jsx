import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.jsx";
import DisplayPosts from '../components/DisplayPosts.jsx';
export default function Search ({
  posts
}){
  return (
    <>
      <center><h1>Search page</h1></center>
      <DisplayPosts posts={posts}/>
    </>
  )
}


