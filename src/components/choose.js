import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import weblogo from "../weblogo.png";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase";

class choose extends Component {
  moving = () => {
    this.props.history.push("/test");
  };
  moving2 = () => {
    this.props.history.push("/quiz");
  };
  render() {
    return (
      <div className="divstyle">
        <div className="App">
          <h1>Welcome</h1>
          <img className="logo" src={weblogo} alt="logo" />{" "}
        </div>

        <div>
          <h1>What do you want?</h1>
          <button
            onClick={() => {
              this.moving();
            }}
          >
            Revise
          </button>
          <button
            onClick={() => {
              this.moving2();
            }}
          >
            quiz
          </button>
        </div>
      </div>
    );
  }
}
export default choose;
