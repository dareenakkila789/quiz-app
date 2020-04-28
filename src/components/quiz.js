import React, { Component } from "react";
import weblogo from "../weblogo.png";
import userpic from "../user.png";
import { db, auth } from "../index";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";
import * as firebase from "firebase";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "firebase/auth";
class test extends Component {
  state = {
    questions: null,
    randques: "",
    question: "",
    answer: "",
  };
  constructor(props) {
    super(props);
    this.checkQuestion = this.checkQuestion.bind(this);
  }

  handleChange = (e) => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value,
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

        const { randques } = this.state;
        const randomQs =
          questions[Math.floor(Math.random() * questions.length)];
        console.log("random question =>", randomQs);
        console.log("the answer is =>", randomQs.correctAnswer);

        this.setState({ randques: randomQs });

        this.setState({ answer: randomQs.correctAnswer });
        // console.log(snapshot);
      })

      .catch((error) => console.log(error));
  }

  checkQuestion() {
    let radios = document.getElementsByName("options");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log(radios[i].value);

        if (this.state.answer === radios[i].value) {
          console.log("good");
          alert("Great job!");
        } else {
          console.log("bad");
          alert("Try again!");
        }
        break;
      }
    }
  }
  render() {
    let { randques } = this.state;
    return (
      <div>
        <div>
          <h1>Let's quiz you!</h1>
          <hr></hr>
          <br></br>
          <h1>{randques.questions}</h1>
          <form>
            <input type="radio" name="options" value={randques.firstOption} />
            {randques.firstOption}
            <input type="radio" name="options" value={randques.secondOption} />
            {randques.secondOption}
            <input type="radio" name="options" value={randques.thirdOption} />
            {randques.thirdOption}
            <input type="radio" name="options" value={randques.forthOption} />
            {randques.forthOption}
          </form>
          <button onClick={this.checkQuestion}> submit</button>
        </div>
      </div>
    );
  }
}
export default test;
