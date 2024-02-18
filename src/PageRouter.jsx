import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import About from './pages/OtherPageEx.jsx';
import PostPage from './pages/PostPage.jsx';
import Search from './pages/SearchPage.jsx';
import Logo from "./components/Logo.jsx";
import './navbar.css';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Footer from "./Footer.jsx";

function PageRouter() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([{name:'Ethan',netid:"eyl45",location:"Gates Hall",food:"none",id:0}]);

  const handlePostsChange = (obj) => {
    obj['id'] = count;
    const newPost = obj;
    increaseCount();
    const copy = [...posts];
    copy.push(newPost);
    setPosts(copy);
    console.log(posts)
  }

  function increaseCount() {
    setCount((count) => count+1);
  }

  return (
    <Router>
      <div>
        <nav>
          <Logo />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/post">Post Leftover Food</Link>
            </li>
            <li>
              <Link to="/search">Find Leftover Food</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search posts={posts}/>} />
          <Route path="/post" element={<PostPage posts={posts} addPost={handlePostsChange}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default PageRouter;
