import React, { Component } from "react";
import weblogo from "../weblogo.png";
import userpic from "../user.png";
import { db, auth } from "../index";
import { NavLink } from "react-router-dom";
import { render } from "react-dom";
import * as firebase from "firebase";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "firebase/auth";
class quiz extends Component {
  state = {
    questions: null,
    randques: "",
    question: "",
    answer: "",
  };

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

        this.setState({ randques: randomQs });
        // console.log(snapshot);
      })

      .catch((error) => console.log(error));
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
            <input type="radio" name="fruit" value={randques.firstOption} />
            {randques.firstOption}
            <input type="radio" name="fruit" value={randques.secondOption} />
            {randques.secondOption}
            <input type="radio" name="fruit" value={randques.thirdOption} />
            {randques.thirdOption}
            <input type="radio" name="fruit" value={randques.forthOption} />
            {randques.forthOption}
          </form>
        </div>
      </div>
    );
  }
}
export default quiz;
