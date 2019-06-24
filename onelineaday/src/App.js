import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import SignUp from "./components/SignUp"
import OneLineADay from "./components/OneLineADay"

function App() {
  return (
    // Use App just to map out/declare routes.  Shouldn't need to
    // create any other components for what's done here
    <div className="App">
      Hello from App!
      <Route exact path = "/" component={SignUp}/>
      <Route path = "/onelineaday" component={OneLineADay}/>
    </div>
  );
}

export default App;
