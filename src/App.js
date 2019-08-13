import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './components/Login';
import AppManager from './app_index';
import PrivateRoute from './components/protectRoute';
import Aboutus from './components/about';
import Home from './components/home';

import { LocationProvider } from "./context/LocationContext"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LocationProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/aboutus" exact component={Aboutus} />
              <Route path="/login" exact component={Login} />
              <PrivateRoute path="/live" exact component={AppManager} />
            </Switch>
          </Router>
        </LocationProvider>
      </div>
    );
  }
}
export default App;
