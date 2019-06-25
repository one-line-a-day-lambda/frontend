import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Where I plan to put login and most of the authorization stuff

export default class SignUp extends React.Component {
  
    state={
        username:"",
        password:""
    }

  // changeHandler = event => {
  //   preventDefault();
  // this.setState({
  //     [event.target.name]: event.target.value
  // })
  // }



  render() {
    return (
      <div>
        Hello from Signup
        {/* <form onSumbit={}>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button type="submit">Login</button>
        </form> */}
      </div>
    );
  }
}
