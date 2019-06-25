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
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/onlineaday">One Line A Day</Link>
        <Route exact path="/" component={App} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/onelineaday" component={OneLineADay} />
      </Router>
    </div>
  );
}

export default App;
