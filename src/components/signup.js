import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import weblogo from "../weblogo.png";
import { NavLink } from "react-router-dom";

class signUp extends Component {
  state = {
    list: [],
    email: "",
    password: "",
  };

  handleChange = (e) => {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  };

  addUser = () => {
    const db = firebase.firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        db.collection("users")
          .add({
            email: this.state.email,
            password: this.state.password,
          })
          .then(function () {
            console.log("Document successfully written");
          })
          .catch(function (error) {
            console.error("Error writing document ", error);
          });

        this.props.history.push("/mainPage");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  render() {
    let { email, password } = this.state;

    return (
      <div className="divstyle">
        <div className="App">
          <h1>Welcome</h1>
          <img className="logo" src={weblogo} alt="logo" />{" "}
        </div>
        <h1>Let's create your account!</h1>
        <div className="firstinput">
          <input
            className="field"
            name="email"
            defaultValue={email}
            placeholder="enter ur email"
            onChange={this.handleChange}
          />
        </div>
        <div className="secondinput">
          {" "}
          <input
            className="field"
            name="password"
            defaultValue={password}
            type="password"
            placeholder="enter ur password"
            onChange={this.handleChange}
          />
        </div>
        <button className="allbutton" onClick={this.addUser}>
          Create
        </button>
      </div>
    );
  }
}
export default signUp;
