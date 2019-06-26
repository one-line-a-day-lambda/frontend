import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
//import { axiosWithAuth, axiosWithAuthorization } from "../../axiosAuthorization";
import axios from "axios";

// Where I plan to put login and most of the authorization stuff

export default class SignUp extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  signup = credits => {
    console.log("hello");

    axios
      .post(`https://onelineadaybe.herokuapp.com/api/auth/register`, credits)
      .then(res => {
        console.log(res.data);
        console.log("Hello from registration");
        localStorage.setItem("token", "password");
        //dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
      })
      .catch(err => {
        console.log(err);
        // dispatch({ type: SIGNUP_FAIL, payload: "" });
      });
  };

  render() {
    return (
      <div className="divWrapper">
         <NavLink exact to="/" className="navlink" activeClassName="selectedLink">
          Home
        </NavLink>
        <NavLink
          exact to="/signup"
          className="navlink"
          activeClassName="selectedLink"
        >
          Sign Up
        </NavLink>
        <NavLink exact to="/login" className="navlink" activeClassName="selectedLink">
          Login
        </NavLink>
        <NavLink
          exact to="/onelineaday"
          className="navlink"
          activeClassName="selectedLink"
        >
          Your Diary Entries
        </NavLink>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.signup(this.state.credentials);
            this.props.history.push("/login");
          }}
        >
          <p><input
            type="text"
            placeholder="Enter Desired Username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.changeHandler}
          /></p>
          <p><input
            type="text"
            placeholder="Enter Desired Password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.changeHandler}
          /></p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
