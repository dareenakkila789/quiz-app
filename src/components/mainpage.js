import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { RaisedButton, TextField } from "material-ui";
import Paper from "material-ui/Paper";
import * as firebase from "firebase";
import "firebase/auth";

const style = {
  height: 550,
  width: 320,
  padding: 20,
  margin: "20px 0px 20px 0px",
};
const style1 = {
  margin: "0px 20px 0px 0px",
};
const style2 = {
  color: "white",
};

class mainPagee extends Component {
  state = {
    question: "",
    firstOption: "",
    secondOption: "",
    thirdOption: "",
    forthOption: "",
    correctAnswer: "",
    qs: [],
  };

  handleChange = (e) => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value,
    });
  };

  addQuest = () => {
    const db = firebase.firestore();
    db.collection("questions-answers")
      .add({
        questions: this.state.question,
        firstOption: this.state.firstOption,
        secondOption: this.state.secondOption,
        thirdOption: this.state.thirdOption,
        forthOption: this.state.forthOption,
        correctAnswer: this.state.correctAnswer,
      })
      .then(window.location.reload);

    if (
      this.state.question === "" ||
      this.state.firstOption === "" ||
      this.state.secondOption === "" ||
      this.state.thirdOption === "" ||
      this.state.forthOption === "" ||
      this.state.correctAnswer === ""
    ) {
      alert("Please Fill Required Fields");
    }
  };
  refreshPage() {
    window.location.reload();
  }

  render() {
    let {
      question,

      qs,
      firstOption,
      secondOption,
      thirdOption,
      forthOption,
      correctAnswer,
    } = this.state;
    console.log(qs);

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <center>
              <Paper style={style} zDepth={3}>
                <h1>Create Questions!</h1>
                <TextField
                  type="text"
                  hintText="Question"
                  floatingLabelText="Question"
                  onChange={this.handleChange}
                  defaultValue={question}
                  ref="Question"
                  name="question"
                />{" "}
                <br />
                <TextField
                  type="text"
                  hintText="Option 1"
                  floatingLabelText="Option 1"
                  onChange={this.handleChange}
                  ref="op1"
                  defaultValue={firstOption}
                  name="firstOption"
                />{" "}
                <br />
                <TextField
                  type="text"
                  hintText="Option 2"
                  floatingLabelText="Option 2"
                  onChange={this.handleChange}
                  ref="op2"
                  defaultValue={secondOption}
                  name="secondOption"
                />
                <br />
                <TextField
                  type="text"
                  hintText="Option 3"
                  floatingLabelText="Option 3"
                  onChange={this.handleChange}
                  ref="op3"
                  defaultValue={thirdOption}
                  name="thirdOption"
                />
                <br />
                <TextField
                  type="text"
                  hintText="Option 4"
                  floatingLabelText="Option 4"
                  onChange={this.handleChange}
                  ref="op4"
                  defaultValue={forthOption}
                  name="forthOption"
                />
                <br />
                <br />
                <TextField
                  type="text"
                  hintText="Answer"
                  floatingLabelText="Answer"
                  onChange={this.handleChange}
                  ref="correctAnswer"
                  defaultValue={correctAnswer}
                  name="correctAnswer"
                />
                <br />
                <br />
                <RaisedButton
                  primary={true}
                  onClick={() => {
                    this.addQuest();
                    // this.refreshPage();
                  }}
                  style={style1}
                >
                  <span style={style2}> Add </span>{" "}
                </RaisedButton>
              </Paper>
            </center>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default mainPagee;
