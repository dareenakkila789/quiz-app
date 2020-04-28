import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
// import test from "./components/test";
import SignUp from "./components/signup";
import error from "./components/error";

import display from "./components/display";
import quiz from "./components/quiz";
import home from "./components/mainpage";
import choose from "./components/choose";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/test" component={test} /> */}
          <Route exact path="/choose" component={choose} />

          <Route exact path="/display" component={display} />
          <Route exact path="/home" component={home} />
          <Route exact path="/quiz" component={quiz} />
          <Route component={error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
