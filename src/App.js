import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";
import didntwork from "./components/didntWork";
import test from "./components/test";
import SignUp from "./components/signup";
import error from "./components/error";
import test2 from "./components/test2";
import display from "./components/display";
import quiz from "./components/quiz";
import home from "./components/mainpage";
import choose from "./components/choose";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/work" component={didntwork} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/test" component={test} />
              <PrivateRoute exact path="/choose" component={choose} />
              <Route exact path="/try" component={test2} />
              <PrivateRoute exact path="/display" component={display} />
              <PrivateRoute exact path="/home" component={home} />
              <PrivateRoute exact path="/quiz" component={quiz} />
              <Route component={error} />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
