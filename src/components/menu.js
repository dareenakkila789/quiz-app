import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar } from "material-ui";
import FlatButton from "material-ui/FlatButton";
import "./first.css";

const style = {
  background: "#569AA7",
};
class Barr extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "LogIn",
    };
  }

  moving = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Welcome to Quiz App"
              style={style}
              iconElementRight={
                <FlatButton label={this.state.value} onClick={this.moving} />
              }
            />

            {/* < div { backgroundImage : src ={"quiz2.jpg"} } /> */}

            <img height="650vh" width="1350vh" src={"quiz6.jpg"}></img>
            <div className="centered">
              <h2 className="title">
                {" "}
                This website will help you as a teacher to create Quizes for
                your students, and as a student it will help you to quiz your
                self.{" "}
              </h2>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Barr;
