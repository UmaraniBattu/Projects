import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainnav from "./Mainnav";
import NavRoute from "./NavRoute";
import Navbar from "./Navbar";
import MedicalReac from "../Health/MedicalReac";

const MainnavRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Mainnav />
        <Route exact path="/basic" component={Navbar} />

        <Route path="/health_history" component={Basivinfo} />
        <Route path="/medical_records" component={MedicalReac} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainnavRoute;
