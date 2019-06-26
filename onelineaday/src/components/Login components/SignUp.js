import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

  // loginCheck = e => {
  //   e.preventDefault();
  //   this.props.login(this.state.credentials).then(res => {
  //     if (res) {
  //       this.props.history.push("/onelineaday");
  //     }
  //   });
  // };

  // login = creds => {
  //   axiosWithAuthorization()
  // .post("https://onelineadaybe.herokuapp.com/api/auth/register", creds)
  // .then(res => {
  //   console.log(res),
  //   localStorage.setItem("token", res.data)
  // })
  // .catch(rej => console.log(rej.message))
  // }

  signup = credits => {
    console.log("hello")
    
    axios
      .post(`https://onelineadaybe.herokuapp.com/api/auth/register`, credits)
      .then(res => {
        
        console.log(res.data);
        console.log("Hello from registration")
        localStorage.setItem("token", "password")
        //dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
      })
      .catch(err => {
        console.log(err);
       // dispatch({ type: SIGNUP_FAIL, payload: "" });
      })
  };

  render() {
    return (
      <div>
        Hello from Signup
        <form onSubmit={(event)=>{event.preventDefault();
          this.signup(this.state.credentials);
          }}>
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
