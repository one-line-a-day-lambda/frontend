import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello from App!
      <Route exact path = "/" component={SignUp}/>
      <Route path = "/onelineaday" component={OneLineADay}/>
    </div>
  );
}

export default App;
