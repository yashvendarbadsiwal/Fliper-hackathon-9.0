import React, { Component } from "react";
import { FadeTransform, Fade } from "react-animation-components";
import { Route, Switch, Redirect } from "react-router";
import Temp1 from "./temp1";
import Temp2 from "./temp2";
class MainComponent extends Component {
  render() {
    return (
      <Switch>
        <Route
          path={"/temp1"}
          component={() => (
            <FadeTransform
              in
              transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
            >
              <Temp1 />
            </FadeTransform>
          )}
        />
        <Route
          path="/text"
          component={() => (
            <Fade in enterOpacity={0.85}>
              <h1>I'm transitioning to opacity:0.85</h1>
            </Fade>
          )}
        />
        <Route
          path="/temp2"
          component={() => (
            <Fade in enterOpacity={0.85}>
              <Temp2 />
            </Fade>
          )}
        />
        <Redirect to="/temp1" />
      </Switch>
    );
  }
}
export default MainComponent;
