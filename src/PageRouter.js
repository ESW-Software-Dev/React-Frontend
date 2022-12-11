import './App.css';
import Login from './pages/Login.js';
import OtherPageEx from './pages/OtherPageEx.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PageRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/otherpage">
          <div className="App">
            <OtherPageEx />
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <Login />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default PageRouter;
