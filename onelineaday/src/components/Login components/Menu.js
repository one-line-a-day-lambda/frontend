import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <NavLink exact to="/" className="navlink" activeClassName="selectedLink">
        Home
      </NavLink>
      <NavLink
        exact
        to="/signup"
        className="navlink"
        activeClassName="selectedLink"
      >
        Sign Up
      </NavLink>
      <NavLink
        exact
        to="/login"
        className="navlink"
        activeClassName="selectedLink"
      >
        Login
      </NavLink>
      <NavLink
        exact
        to="/onelineaday"
        className="navlink"
        activeClassName="selectedLink"
      >
        Your Diary Entries
      </NavLink>
    </>
  );
};
