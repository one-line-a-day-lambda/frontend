import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <NavLink to="/" className="navlink" activeClassName="selectedLink">
          Home
        </NavLink>
        <NavLink
          to="/signup"
          className="navlink"
          activeClassName="selectedLink"
        >
          Sign Up
        </NavLink>
        <NavLink to="/login" className="navlink" activeClassName="selectedLink">
          Login
        </NavLink>
        <NavLink
          to="/onelineaday"
          className="navlink"
          activeClassName="selectedLink"
        >
          Your Diary Entries
        </NavLink>
        <h1 className="header">One Line A Day</h1>
        <img src="src/images/LandingPagePic.jpg" alt="Notebook" />
        <p>
          <Link className="buttons" to="login">
            <button>Login</button>
          </Link>
        </p>
        <Link className="buttons" to="/signup">
          <button>Signup</button>
        </Link>
      </>
    );
  }
}

export default LandingPage;
