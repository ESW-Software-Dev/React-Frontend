import React from 'react';
import ReactDOM from 'react-dom';
import Logo from "../components/Logo.jsx";
import AddPostSection from '../components/Posts/AddPostSection.jsx';
import {useState} from 'react'
export default function PostPage ({
  posts,
  addPost
})  {
  const [isPostSectionOpen, setIsPostSectionOpen] = useState(false);
  return (
    <>
      <center>
        <h1>Post page</h1>
        <button 
          className='addpost-toggle'
          onClick={() => setIsPostSectionOpen(!isPostSectionOpen)}>
            +
        </button>
      </center>
      <AddPostSection
        posts={posts}
        AddPost={addPost}
        isOpen = {isPostSectionOpen}
      />
    </>
  )
}

