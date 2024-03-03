import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.jsx";
import DisplayPosts from '../components/DisplayPosts.jsx';
import './PostPage.css'
export default function Search ({
  posts
}){
  return (
    <>
      <div className='page'>
        <center><h1>Search page</h1></center>
        <DisplayPosts posts={posts}/>
      </div>
    </>
  )
}


