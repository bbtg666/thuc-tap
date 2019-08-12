import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu.js";
import Login from './components/Login'
import Live from './components/live'
import PrivateRoute from './components/protectRoute'
import Aboutus from './components/about';
import Home from './components/home'




function App() {
  return (
    <div className="App">
      <Router>
          <TopMenu />
          <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute component={Live} path="/live"/> 
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/login" exact component={Login} />
          </Switch>
      </Router>
    </div>
  );
}
export default App;
