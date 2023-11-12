import './App.css';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import About from './pages/OtherPageEx.js';
import Post from './pages/PostPage.js';
import Search from './pages/SearchPage.js';
import Logo from "./components/Logo.js";
import './navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from "./Footer";

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

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
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
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default PageRouter;
