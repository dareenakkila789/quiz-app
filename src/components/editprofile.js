import React, { Component } from "react";
import weblogo from "../weblogo.png";
import userpic from "../user.png";
import { db, auth } from "../index";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase";
import "firebase/auth";
class editprofile extends Component {
  state = {
    questions: null,
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
        });
        this.setState({ questions: questions });
        // console.log(snapshot);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let { username, bio, question, answer } = this.state;
    return (
      <div>
        <div>
          <h1>here you are</h1>
          {this.state.questions &&
            this.state.questions.map((questions) => {
              return (
                <div>
                  <p>{questions.question}</p>
                  <p>{questions.answer}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default editprofile;
