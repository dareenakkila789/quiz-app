import React, { Component } from "react";

import * as firebase from "firebase";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import "firebase/auth";

class editprofile extends Component {
  state = {
    questions: null,
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

        // console.log(snapshot);
      })

      .catch((error) => console.log(error));
  }

  render() {
    let radioid = this.props.radioid;
    let { username, bio, question, answer, randques } = this.state;
    return (
      <div>
        <div>
          {this.state.randques &&
            this.state.randques.map((randques) => {
              return (
                <div>
                  <p>{randques.question}</p>
                  <p>{randques.answer}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
