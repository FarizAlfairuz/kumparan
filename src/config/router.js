import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "@components/navbar/Navbar";

function router() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path()} key={route.name}>
            <Navbar />

            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default router;
