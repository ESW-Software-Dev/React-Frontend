import './App.css';
import Home from './pages/Home.js';
import OtherPageEx from './pages/OtherPageEx.js';
import NamePage from './pages/NamePage';

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
            <Home />
          </div>
        </Route>
        <Route path="/charlie">
          <div className="App">
            <NamePage />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default PageRouter;
