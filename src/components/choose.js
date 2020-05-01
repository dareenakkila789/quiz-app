import React, { Component } from "react";

import weblogo from "../weblogo.png";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";

const style2 = {
  margin: "20px 0px 0px 0px",
  background: "#245",
  padding: "30px",
  color: "#fff",
  fontSize: "20px",
  fontFamily: "Comic Sans MS",
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

class choose extends Component {
  moving = () => {
    this.props.history.push("/display");
  };
  moving2 = () => {
    this.props.history.push("/quiz");
  };
  render() {
    return (
      <div className="divstyle">
        <MuiThemeProvider>
          <div>
            <center>
              <Paper style={style5} zDepth={3}>
                <div>
                  <h1 style={style7}>Welcome</h1>
                  <hr></hr>
                  <br></br>
                  <img className="logo" src={weblogo} alt="logo" />{" "}
                  <div>
                    <h1 style={style2}>What do you want?</h1>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        this.moving();
                      }}
                    >
                      {" "}
                      Revise{" "}
                    </Button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        this.moving2();
                      }}
                    >
                      {" "}
                      Quiz{" "}
                    </Button>
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
export default choose;
