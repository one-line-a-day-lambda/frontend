import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
//import { axiosWithAuth, axiosWithAuthorization } from "../../axiosAuthorization";
import axios from "axios";

// Where I plan to put login and most of the authorization stuff

export default class Login extends React.Component {
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

  login = credits => {
    console.log("hello");
    axios
      .post(`https://onelineadaybe.herokuapp.com/api/auth/login`, credits)
      .then(res => {
        console.log(res.data);
        console.log("Hello from registration");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
      })
      .catch(err => {
        console.log("error! Danger Will Robinson!");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
         <NavLink to="/" className="navlink" activeClassName="selectedLink">
          Home
        </NavLink>
        <NavLink to="/signup" className="navlink" activeClassName="selectedLink">
          Sign Up
        </NavLink>
        <NavLink to="/onelineaday" className="navlink" activeClassName="selectedLink">
          Your Diary Entries
        </NavLink>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.login(this.state.credentials);
            this.props.history.push("/onelineaday");
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
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
