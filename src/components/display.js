import React, { Component } from "react";

import * as firebase from "firebase";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "firebase/auth";

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
        <div>
          <h1>You can add some quistions to revise!</h1>
          <input
            className="queInput"
            defaultValue={question}
            placeholder="enter ur question"
            onChange={this.handleChange}
            name="question"
          />
          <input
            className="queInput"
            defaultValue={answer}
            placeholder="enter ur answer"
            onChange={this.handleChange}
            name="answer"
          />
          <button onClick={this.addQuest} className="allbutton">
            Add
          </button>
          <h1>all the questions!</h1>

          {this.state.questions &&
            this.state.questions.map((questions) => {
              return (
                <div>
                  <p>{questions.questions}</p>
                  <li>{questions.correctAnswer}</li>
                  <hr></hr>
                </div>
              );
            })}
          <h1>Your questions!</h1>

          {this.state.Myquestions &&
            this.state.Myquestions.map((Myquestions) => {
              return (
                <div>
                  <p>{Myquestions.question}</p>
                  <li>{Myquestions.answer}</li>
                  <hr></hr>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default display;
