import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import weblogo from "../weblogo.png";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase";

class login extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  };

  signin = () => {
    console.log(this.state, "this.state");
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert("There is something wrong");
      })
      .then(() => {
        this.props.history.push("/home");
      });
    if (this.state.email === "" || this.state.password === "") {
      alert("Please Fill Required Fields");
    }
  };
  checkQuestion() {
    let radios = document.getElementsByName("type");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log(radios[i].value);

        if (radios[i].value === "student") {
          console.log("student");
          // alert("Great job!");
          this.props.history.push("/quiz");
        } else {
          console.log("teacher");
          // alert("Try again!");
          this.props.history.push("/home");
        }
        break;
      }
    }
  }
  render() {
    let { email, password } = this.state;

    return (
      <div className="divstyle">
        <div className="App">
          <h1>Welcome</h1>
          <img className="logo" src={weblogo} alt="logo" />{" "}
        </div>

        <div>
          <input
            className="field"
            defaultValue={email}
            placeholder="enter ur email"
            onChange={this.handleChange}
            name="email"
          />
          <input
            className="field"
            defaultValue={password}
            type="password"
            placeholder="enter ur passoword"
            onChange={this.handleChange}
            name="password"
          />
          <form>
            <input type="radio" name="type" value="student" />
            student
            <input type="radio" name="type" value="teacher" />
            teacher
          </form>
          <button onClick={this.checkQuestion}> submit</button>
          <button className="allbutton" onClick={this.signin}>
            Add
          </button>

          <NavLink to="signup">You don't have an account?</NavLink>
        </div>
      </div>
    );
  }
}
export default login;
