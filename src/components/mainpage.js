import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import weblogo from "../weblogo.png";

import * as firebase from "firebase";
import "firebase/auth";

class mainPage extends Component {
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
  handleSubmit(e) {
    let { key } = this.state;
    this.setState({
      [key]: "",
    });
  }
  addQuest = () => {
    const db = firebase.firestore();
    db.collection("questions-answers").add({
      questions: this.state.question,
      firstOption: this.state.firstOption,
      secondOption: this.state.secondOption,
      thirdOption: this.state.thirdOption,
      forthOption: this.state.forthOption,
      correctAnswer: this.state.correctAnswer,
    });
  };

  render() {
    let {
      question,
      answer,
      qs,
      firstOption,
      secondOption,
      thirdOption,
      forthOption,
      correctAnswer,
    } = this.state;
    console.log(qs);

    return (
      <div className="divstyle">
        <div className="App">
          <h1>Questions reminder!</h1>
          <img className="logo" src={weblogo} alt="logo" />
        </div>

        <div>
          {/* <form onSubmit={(this.handleSubmit, this.addQuest)}> */}
          <input
            className="queInput"
            defaultValue={question}
            placeholder="enter ur question"
            onChange={this.handleChange}
            name="question"
          />
          <input
            className="queInput"
            defaultValue={firstOption}
            placeholder="first option"
            onChange={this.handleChange}
            name="firstOption"
          />
          <input
            className="queInput"
            defaultValue={secondOption}
            placeholder="second option"
            onChange={this.handleChange}
            name="secondOption"
          />
          <input
            className="queInput"
            defaultValue={thirdOption}
            placeholder="third option"
            onChange={this.handleChange}
            name="thirdOption"
          />

          <br />
          <input
            className="queInput"
            defaultValue={forthOption}
            placeholder="forth option"
            onChange={this.handleChange}
            name="forthOption"
          />
          <input
            className="queInput"
            defaultValue={correctAnswer}
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
          <button onClick={this.addQuest} className="allbutton">
            Add
          </button>
          {/* <button
            className="allbutton"
            onClick={() => {
              this.props.history.push("/quiz");
            }}
          >
            Quiz!
          </button> */}
          {/* </form> */}
        </div>
      </div>
    );
  }
}
export default mainPage;
