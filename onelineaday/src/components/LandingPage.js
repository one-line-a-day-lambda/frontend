import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { Menu } from "./Login components/Menu";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        {Menu()}
        <h1 className="header">Welcome To One Line A Day</h1>
        <h2> Please Sign Up To Continue</h2>
        <img src="src\images\landingPagePic.jpg" alt="Notebook" />
      </>
    );
  }
}

export default LandingPage;
