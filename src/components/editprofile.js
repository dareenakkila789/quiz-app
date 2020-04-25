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
    return (
      <div>
        <div>
          <h1>here your questions!</h1>

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
        </div>
      </div>
    );
  }
}
export default editprofile;
