import { Component } from "react";
import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="my-container">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
