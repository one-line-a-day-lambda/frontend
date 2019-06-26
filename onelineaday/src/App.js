import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./components/Login components/SignUp";
import OneLineADay from "./components/OneLineADay";
import Login from "./components/Login components/Login"

function App() {
  return (
    // Use App just to map out/declare routes.  Shouldn't need to
    // create any other components for what's done here
    <div className="App">
      Hello from App!
      <Router>
        <Route exact path = "/signup" component={SignUp} />
        <Route exact path = "/login" component={Login} />
        <Route exact path="/" component={OneLineADay} />
      </Router>
    </div>
  );
}

export default App;
