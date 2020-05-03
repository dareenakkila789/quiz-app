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
    email: "",
    username: "",
    password: "",
    student_checked: false,
    teacher_checked: false,
  };
  constructor(props) {
    super(props);
    // this.checkType = this.checkType.bind(this);
  }

  handleChange = (e) => {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  };

  addUser = () => {
    const { email, username, type, password } = this.state;

    const db = firebase.firestore();

    console.log(email, password, "email,password");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebase.auth().currentUser;
        db.collection("users")
          .doc(user.uid)
          .set({
            Email: email,
            Username: username,
            type: type,
          })
          .then((docRef) => {
            console.log(type);
            if (type === "student") {
              this.props.history.push("/choose");
            } else {
              this.props.history.push("/home");
            }
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;

        console.log(error);
        alert(errorCode);
        // ...
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
                      type="email"
                      name="email"
                      hintText="Enter your UserEmail"
                      floatingLabelText="Email"
                      defaultValue={email}
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                    <TextField
                      type="text"
                      name="username"
                      hintText="Enter your Name"
                      floatingLabelText="username"
                      defaultValue={username}
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
                          defaultValue="op1"
                          value="student"
                          onChange={this.handleChange}
                        />
                        Student
                      </label>

                      <label style={style1}>
                        <input
                          type="radio"
                          name="type"
                          defaultValue="op1"
                          value="teacher"
                          onChange={this.handleChange}
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
