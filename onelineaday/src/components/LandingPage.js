import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { Menu } from "./Login components/Menu";
import picture from "../images/LandingPagePic.jpg"

class LandingPage extends React.Component {
  render() {
    return (
      <div className="everything">
        {Menu()}
        <h1 className="header">Welcome To One Line A Day</h1>
        <h2 className="landingPageh2"> Please Sign Up To Continue</h2>
        <img src={picture} alt="Notebook" />
      </div>
    );
  }
}

export default LandingPage;
