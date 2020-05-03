import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";

// import weblogo from "../weblogo.png";
import SignUp from "./components/signup";
import error from "./components/error";

import display from "./components/display";
import quiz from "./components/quiz";
import home from "./components/mainpage";
import first from "./components/first";
import choose from "./components/choose";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import * as firebase from "firebase";
import AppBar from "./components/menu";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AppBar} />
              <Route exact path="/login" component={Login} />

              <Route exact path="/first" component={first} />
              <Route exact path="/signup" component={SignUp} />
              {/* <Route exact path="/test" component={test} /> */}
              <Route exact path="/choose" component={choose} />

              <Route exact path="/display" component={display} />
              <Route exact path="/home" component={home} />
              <Route exact path="/quiz" component={quiz} />
              <Route component={error} />
            </Switch>
          </BrowserRouter>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
