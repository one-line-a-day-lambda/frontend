import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Where I plan to put login and most of the authorization stuff

export default class SignUp extends React.Component {
  
    state={
      credentials={
        username:"",
        password:""
      }
      }

  changeHandler = event => {
    preventDefault();
    this.setState({ credentials: {
    ...this.state.credentials,
    [event.target.name]: event.target.value 
}
})
}

loginCheck = event => {
  event.preventDefault();

}

login = credit => {
  localStorage.setItem("token")
}

// login = e => {
//   e.preventDefault();
//   this.props.login(this.state.credentials).then(res => {
//     if (res) {
//       this.props.history.push("/protected");
//     }
//   });
// };


// export const login = creds => dispatch => {
//   dispatch({ type: LOGIN_START });
//   return axiosWithAuth()
//     .post("/", creds)
//     .then(res => {
//       console.log(res);
//       localStorage.setItem("token", res.data);
//       dispatch({ type: LOGIN_SUCCESS });
//       return true;
//     })
//     .catch(err => console.log(err.response));
// };



  render() {
    return (
      <div>
        Hello from Signup
        <form onSumbit={}>
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
        </form>
      </div>
    );
  }
}
