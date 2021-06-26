import React, { Component } from "react";
import { FadeTransform, Fade } from "react-animation-components";
import { Route, Switch, Redirect } from "react-router";
import History from "./History";
import Home from "./Home";
import Temp2 from "./temp2";
import Login from "./login";
import Register from "./register";
import Email from "./email";
class MainComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          path={"/"}
          exact
          component={() => (
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <Home />
            </FadeTransform>
          )}
        />
        <Route
          path={"/history"}
          exact
          component={() => (
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <History />
            </FadeTransform>
          )}
        />
        <Route
          path={"/login"}
          exact
          component={() => (
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <Login />
            </FadeTransform>
          )}
        />
        <Route
          path={"/register"}
          exact
          component={() => (
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <Register />
            </FadeTransform>
          )}
        />
        <Route
          path={"/email"}
          exact
          component={() => (
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <Email />
            </FadeTransform>
          )}
        />
        <Route
          path="/text"
          exact
          component={() => (
            <Fade in enterOpacity={0.85}>
              <h1>I'm transitioning to opacity:0.85</h1>
            </Fade>
          )}
        />
        <Route
          path="/temp2"
          exact
          component={() => (
            <Fade in enterOpacity={0.85}>
              <Temp2 />
            </Fade>
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default MainComponent;
