import React from "react";
import classes from "./Navbar.module.css";
// import classes from "./Mainnav.module.css";
import { NavLink, BrowserRouter } from "react-router-dom";
// import Navbar from "./Navbar";

const Mainnav = () => {
  return (
    <BrowserRouter>
      <ul>
        <div className={classes.mainnavcontainer}>
          <li>
            <NavLink exact to="/basic" activeClassName={classes.activenavbar}>
              Basic Info
            </NavLink>
            <li>
              <NavLink
                exact
                to="/basic/all"
                activeClassName={classes.activenavbar}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basic/current"
                exact
                activeClassName={classes.activenavbar}
              >
                Current
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basic/intermittent"
                exact
                activeClassName={classes.activenavbar}
              >
                Intermittent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basic/past"
                exact
                activeClassName={classes.activenavbar}
              >
                Past
              </NavLink>
            </li>
          </li>
          <li>
            <NavLink
              exact
              to="/health_history"
              activeClassName={classes.activenavbar}
            >
              Health History
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/medical_records"
              activeClassName={classes.activenavbar}
            >
              Medical Records
            </NavLink>
          </li>
        </div>
      </ul>
    </BrowserRouter>
  );
};

export default Mainnav;
