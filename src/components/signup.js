import React, { Component } from "react";

import * as firebase from "firebase";
import weblogo from "../weblogo.png";

import { TextField } from "material-ui";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";

const styles = {
  block: {
    maxWidth: 25,
  },
  radioButton: {
    marginBottom: 16,
    textAlign: "left",
    marginLeft: 30,
  },
};

const style1 = {
  color: "black",
  fontFamily: "Comic Sans MS",
  fontSize: "25px",
  margin: "25px 0px 0px 0px",
};

const style7 = {
  color: "#245",
  fontFamily: "Comic Sans MS",
};
const style5 = {
  height: "800%",
  width: "50%",
  margin: 20,
  textAlign: "center",
  display: "inline-block",
};

class signUp extends Component {
  state = {
    list: [],
    email: "",
    password: "",
    type: "",
    username: "",
  };
  constructor(props) {
    super(props);
    this.checkType = this.checkType.bind(this);
  }

  handleChange = (e) => {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  };
  checkType() {
    let radios = document.getElementsByName("type");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log(radios[i].value);
        const { type } = this.state;
        this.setState({ type: radios[i].value });
        console.log(type);
        if (radios[i].value === "student") {
          console.log("student");
          alert("S");
          this.props.history.push("/choose");
        } else {
          console.log("teacher");
          alert("T");
          this.props.history.push("/home");
        }
        break;
      }
    }
  }
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
            type: this.state.type,
          })
          .then(function () {
            console.log("Document successfully written");
          })
          .catch(function (error) {
            console.error("Error writing document ", error);
            alert("there is something wrong");
          });

        this.props.history.push("/");
      })
      .catch(function (error) {
        // Handle Errors here.
      });
  };

  render() {
    let { email, password, username } = this.state;
    return (
      <div className="divstyle">
        <MuiThemeProvider>
          <div>
            <center>
              <Paper style={style5} zDepth={3}>
                <div>
                  <h1 style={style7}>Welcome</h1>
                  <br></br>
                  <h1 style={style7}>Let's create your account!</h1>
                  <hr></hr>
                  <br></br>
                  <img className="logo" src={weblogo} alt="logo" />{" "}
                  <div>
                    <TextField
                      type="text"
                      name="username"
                      hintText="Enter your Name"
                      floatingLabelText="UserName"
                      defaultValue={username}
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                    <TextField
                      type="email"
                      name="email"
                      hintText="Enter your Email"
                      floatingLabelText="Email"
                      defaultValue={email}
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                    <TextField
                      type="password"
                      name="password"
                      hintText="Enter your Password"
                      floatingLabelText="Password"
                      defaultValue={password}
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                    <br />
                    <form>
                      <label style={style1}>
                        <input
                          type="radio"
                          name="type"
                          value="student"
                          style={styles.RadioButton}
                        />
                        Student
                      </label>
                      {/* <br></br> */}
                      <label style={style1}>
                        <input
                          type="radio"
                          name="type"
                          value="teacher"
                          style={styles.RadioButton}
                        />
                        Teacher
                      </label>
                    </form>
                    <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.addUser}
                    >
                      {" "}
                      Create{" "}
                    </Button>
                    <br></br>
                  </div>
                </div>
              </Paper>
            </center>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default signUp;
