import React, { Component } from "react";
import * as firebase from "firebase";
import { browserHistory } from "react-router";
import "firebase/auth";
class test extends Component {
  next(ev) {
    const Question = this.refs.Question.getValue();
    const op1 = this.refs.op1.getValue();
    const op2 = this.refs.op2.getValue();
    const op3 = this.refs.op3.getValue();
    const op4 = this.refs.op4.getValue();
    const Answer = this.refs.Answer.getValue();

    let QuizQuestion = {
      Question: Question,
      op1: op1,
      op2: op2,
      op3: op3,
      op4: op4,
      Answer: Answer,
    };
    if (
      Question == "" ||
      op1 === "" ||
      op2 === "" ||
      op3 === "" ||
      op4 === "" ||
      Answer === ""
    ) {
      alert("Please Fill Required Fields");
    } else {
      firebase.database().ref("questions-answers").push(QuizQuestion);
      console.log(QuizQuestion);
      browserHistory.push("/quiz");
    }
    ev.preventDefault();
  }
  next1(ev) {
    ev.preventDefault();
    const Question = this.refs.Question.getValue();
    const op1 = this.refs.op1.getValue();
    const op2 = this.refs.op2.getValue();
    const op3 = this.refs.op3.getValue();
    const op4 = this.refs.op4.getValue();
    const Answer = this.refs.Answer.getValue();

    let QuizQuestion = {
      Question: Question,
      op1: op1,
      op2: op2,
      op3: op3,
      op4: op4,
      Answer: Answer,
    };
    if (
      Question === "" ||
      op1 === "" ||
      op2 === "" ||
      op3 === "" ||
      op4 === "" ||
      Answer === ""
    ) {
      alert("Please Fill Required Fields");
      this.refs.Question.input.focus();
    } else {
      firebase.database().ref("questions-answers").push(QuizQuestion);
      console.log(QuizQuestion);

      this.refs.Question.input.value = " ";
      this.refs.op1.input.value = " ";
      this.refs.op2.input.value = " ";
      this.refs.op3.input.value = " ";
      this.refs.op4.input.value = " ";
      this.refs.Answer.input.value = " ";
    }
    ev.preventDefault();
  }
  render() {
    return (
      <div className="divstyle">
        <div className="App">
          <h1>Questions reminder!</h1>
          <img className="logo" src={weblogo} alt="logo" />{" "}
        </div>

        <div>
          <input
            className="queInput"
            defaultValue={question}
            placeholder="enter ur question"
            onChange={this.handleChange}
            name="question"
          />
          <input
            className="queInput"
            defaultValue={op1}
            placeholder="first option"
            onChange={this.handleChange}
            name="firstOption"
          />
          <input
            className="queInput"
            defaultValue={op2}
            placeholder="second option"
            onChange={this.handleChange}
            name="secondOption"
          />
          <input
            className="queInput"
            defaultValue={op3}
            placeholder="third option"
            onChange={this.handleChange}
            name="thirdOption"
          />

          <br />
          <input
            className="queInput"
            defaultValue={op4}
            placeholder="forth option"
            onChange={this.handleChange}
            name="forthOption"
          />
          <input
            className="queInput"
            defaultValue={Answsr}
            placeholder="correct answer"
            onChange={this.handleChange}
            name="correctAnswer"
          />
          <div>
            {/* <input
                    className="queInput"
                    defaultValue={answer}
                    placeholder="enter the answer"
                    name="answer"
                    onChange={this.handleChange}
                  /> */}
          </div>
          <button onClick={this.next} className="allbutton">
            Add
          </button>
          <button
            className="allbutton"
            onClick={() => {
              this.props.history.push("/quiz");
            }}
          >
            Quiz!
          </button>
        </div>
      </div>
    );
  }
}
export default test;
