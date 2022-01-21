import React from "react";
import Navbar from "../navbar/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Mainnav from "./Mainnav";

const NavRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/nav" component={Navbar} />
          <Route exact path="/current" component={Navbar} />
          <Route exact path="/intermittent" component={Navbar} />
          <Route exact path="/past" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default NavRoute;
