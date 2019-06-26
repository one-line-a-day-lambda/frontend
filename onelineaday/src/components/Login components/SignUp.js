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
      <div>
         <NavLink to="/" className="navlink" activeClassName="selectedLink">
          Home
        </NavLink>
        <NavLink to="/login" className="navlink" activeClassName="selectedLink">
          Login
        </NavLink>
        <NavLink to="/onelineaday" className="navlink" activeClassName="selectedLink">
          Your Diary Entries
        </NavLink>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.signup(this.state.credentials);
            this.props.history.push("/login");
          }}
        >
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Enter Password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.changeHandler}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
