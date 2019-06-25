import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class SignUp extends React.Component {
  // Where I plan to put login and most of the authorization stuff

  //changeHandler = event => {
  //   preventDefault();
  // this.setState({
  //     [event.target.name]: event.target.value
  // })
  //}

  render() {
    return (
      <div>
        Hello from Signup
        <input
          type="text"
          placeholder="Username"
          //value={this.state.username}
          //onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="Password"
          //value={this.state.password}
          //onChange={this.changeHandler}
        />
      </div>
    );
  }
}
