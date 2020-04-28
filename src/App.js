import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import test from "./components/test";
import SignUp from "./components/signup";
import error from "./components/error";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import EditProfile from "./components/editprofile";
import quiz from "./components/quiz";
import home from "./components/mainpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/test" component={test} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/home" component={home} />
          <Route exact path="/quiz" component={quiz} />
          <Route component={error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
