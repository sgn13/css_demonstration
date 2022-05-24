import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Authmiddleware from "./routes/route";
import NonAuthLayout from "./containers/Layout/NonAuthLayout";
import "./theme/index.scss";
// import Routes from "./routes/index";

import { publicRoutes, authProtectedRoutes } from "./routes/index";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              component={route.component}
              exact
            />
          ))}
          {/* <Routes /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
