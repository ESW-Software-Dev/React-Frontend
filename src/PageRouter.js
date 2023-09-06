import './App.css';
import Login from './pages/Login.js';
import About from './pages/OtherPageEx.js';
import Logo from "./components/Logo.js";
import './navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PageRouter() {
  return (
    <Router>
      <div>
        <nav>
          <Logo />
          <ul>
            <li>
              <Link to="/">Login</Link>
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
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    // <Router>
    //   <Switch>
    //     <Route path="/about">
    //       <div className="App">
    //         <About />
    //       </div>
    //     </Route>
    //     <Route path="/">
    //       <div className="App">
    //         <Login />
    //       </div>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default PageRouter;
