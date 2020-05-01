import React, { Component } from "react";
import * as firebase from "firebase";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "firebase/auth";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { TextField } from "material-ui";
import Paper from "material-ui/Paper";
import Button from "@material-ui/core/Button";

const style5 = {
  height: "800%",
  width: "50%",
  margin: 20,
  textAlign: "center",
  display: "inline-block",
};
const style7 = {
  color: "#245",
  fontFamily: "Comic Sans MS",
};
const styleul = {
  background: "#3291ff",
  padding: "15px",
};
const styleli = {
  background: "#cce8ff",
  margin: "5px",
};

class display extends Component {
  state = {
    Myquestions: null,
    questions: null,
    quistion: "",
    answer: "",
  };

  handleChange = (e) => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value,
    });
  };
  addQuest = () => {
    const db = firebase.firestore();
    db.collection("questions").add({
      question: this.state.question,

      answer: this.state.answer,
    });
  };

  componentDidMount() {
    const db = firebase.firestore();
    console.log("dareen");
    db.collection("questions-answers")
      .get()
      .then((snapshot) => {
        const questions = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          questions.push(data);
          console.log(questions);
        });
        this.setState({ questions: questions });

        // console.log(snapshot);
      });

    console.log("dareen");
    db.collection("questions")
      .get()
      .then((snapshot) => {
        const Myquestions = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          Myquestions.push(data);
          console.log(Myquestions);
        });
        this.setState({ Myquestions: Myquestions });
      })
      .catch((error) => console.log(error));
  }

  render() {
    let { question, answer } = this.state;
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <center>
              <Paper style={style5} zDepth={3}>
                <div>
                  <h1 style={style7}>You can add some questions to revise!</h1>
                  <br></br>
                  <TextField
                    type="text"
                    name="question"
                    hintText="Enter your question"
                    floatingLabelText="Question"
                    defaultValue={question}
                    onChange={this.handleChange}
                  />{" "}
                  <br />
                  <TextField
                    type="text"
                    name="answer"
                    hintText="Enter your answer"
                    floatingLabelText="Answer"
                    defaultValue={answer}
                    onChange={this.handleChange}
                  />{" "}
                  <br />
                  <br></br>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.addQuest}
                  >
                    {" "}
                    Add{" "}
                  </Button>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <h1 style={style7}>All the questions!</h1>
                  {this.state.questions &&
                    this.state.questions.map((questions) => {
                      return (
                        <div>
                          <p>{questions.questions}</p>
                          <ul style={styleul}>
                            <li style={styleli}>{questions.correctAnswer}</li>
                          </ul>
                          <hr></hr>
                        </div>
                      );
                    })}
                  <br></br>
                  <br></br>
                  <h1 style={style7}>Your questions!</h1>
                  {this.state.Myquestions &&
                    this.state.Myquestions.map((Myquestions) => {
                      return (
                        <div>
                          <p>{Myquestions.question}</p>
                          <ul style={styleul}>
                            <li style={styleli}>{Myquestions.answer}</li>
                          </ul>
                          <hr></hr>
                        </div>
                      );
                    })}
                </div>
              </Paper>
            </center>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default display;
