import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
//import { axiosWithAuth, axiosWithAuthorization } from "../../axiosAuthorization";
import axios from "axios";
import { Menu } from "./Menu";

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
        {Menu()}
        <form
          onSubmit={event => {
            event.preventDefault();
            this.login(this.state.credentials);
            this.props.history.push("/onelineaday");
          }}
        >
          <p>
            <input
              type="text"
              placeholder="Enter Registered Username"
              name="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter Registered Password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
            />
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
