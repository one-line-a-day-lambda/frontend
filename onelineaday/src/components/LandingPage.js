import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return (
      <>
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
