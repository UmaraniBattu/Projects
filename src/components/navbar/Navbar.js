import React from "react";
import classes from "./Navbar.module.css";
import { NavLink, BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className={classes.Navcontainer}>
        <li>
          <NavLink exact to="/" activeClassName={classes.activenavbar}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/current" exact activeClassName={classes.activenavbar}>
            Current
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/intermittent"
            exact
            activeClassName={classes.activenavbar}
          >
            Intermittent
          </NavLink>
        </li>
        <li>
          <NavLink to="/past" exact activeClassName={classes.activenavbar}>
            Past
          </NavLink>
        </li>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
