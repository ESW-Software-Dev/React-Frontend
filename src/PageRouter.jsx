import './App.css';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import About from './pages/OtherPageEx.jsx';
import Post from './pages/PostPage.jsx';
import Search from './pages/SearchPage.jsx';
import Logo from "./components/Logo.jsx";
import './navbar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Footer from "./Footer.jsx";

function PageRouter() {
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
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/search">
            <Search />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default PageRouter;
