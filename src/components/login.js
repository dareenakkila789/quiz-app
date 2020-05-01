import React, { Component } from "react";

import * as firebase from "firebase";
import weblogo from "../weblogo.png";
import { NavLink } from "react-router-dom";
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import { AuthContext } from "../Auth";
import { TextField } from "material-ui";

const style7 = {
  color: "#245",
  fontSize: 20,
  fontFamily: "Comic Sans MS",
};

const style5 = {
  height: "800%",
  width: "50%",
  margin: 20,
  textAlign: "center",
  display: "inline-block",
};

class Login extends Component {
  state = {
    email: "",
    password: "",
    type: "",
  };

  static contextType = AuthContext;

  handleChange = (e) => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value,
    });
  };

  signin = () => {
    const db = firebase.firestore();
    console.log(this.state.email, this.state.password);
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        db.collection("users")
          .doc(res.user.uid)
          .get()
          .then((doc) => {
            // const data = doc.data();
            console.log(doc.data().type);
            const UserType = doc.data().type;

            console.log("the user type is : ", UserType);
            // console.log(UserId.type);
            if (UserType === "student") {
              this.props.history.push("/choose");
            } else {
              this.props.history.push("/home");
            }
          });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { currentUser } = this.context;
    if (currentUser) {
      console.log(currentUser);
    }

    return (
      <div className="divstyle">
        <MuiThemeProvider>
          <div>
            <center>
              <Paper style={style5} zDepth={3}>
                <div>
                  <h1 style={style7}>Welcome</h1>
                  <br></br>
                  <h1 style={style7}>Here to Login</h1>
                  <hr></hr>
                  <br></br>
                  <img className="logo" src={weblogo} alt="logo" />{" "}
                  <h4 style={style7}>
                    This website will help you as a teacher to create Quizes for
                    your students, and as student it will help you to quiz your
                    self.{" "}
                  </h4>
                  <br></br>
                  <div>
                    <TextField
                      type="email"
                      name="email"
                      hintText="Enter your UserEmail"
                      floatingLabelText="Email"
                      defaultValue={this.state.email}
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                    <TextField
                      type="password"
                      name="password"
                      hintText="Enter your Password"
                      floatingLabelText="Password"
                      defaultValue={this.state.password}
                      onChange={this.handleChange}
                    />{" "}
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.signin}
                    >
                      {" "}
                      Login{" "}
                    </Button>
                    <br></br>
                    <NavLink style={style7} to="signup">
                      You don't have an account?
                    </NavLink>
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
export default Login;
