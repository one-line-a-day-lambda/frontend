import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <>
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
        <h1 className="header">Welcome To One Line A Day</h1>
        <h2> Please Sign Up To Continue</h2>
        <img src="/src/images/landingPagePic.jpg" alt="Notebook" />
        
        {/* <p>
          <Link className="buttons" to="login">
            <button>Login</button>
          </Link>
        </p>
        <Link className="buttons" to="/signup">
          <button>Signup</button>
        </Link> */}
      </>
    );
  }
}

export default LandingPage;
