import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUp from "./components/Login components/SignUp";
import OneLineADay from "./components/OneLineADay";
import Login from "./components/Login components/Login";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    // Use App just to map out/declare routes.  Shouldn't need to
    // create any other components for what's done here
    <div className="App">
      <Router>
        <NavLink to="/signup" activeClassName="selectedLink">
          Sign Up
        </NavLink>
        <NavLink to="/login" activeClassName="selectedLink">
          Login
        </NavLink>
        <NavLink to="/onelineaday" activeClassName="selectedLink">
          Your Diary Entries
        </NavLink>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/onelineaday" component={OneLineADay} />
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
