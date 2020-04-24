import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import weblogo from "../weblogo.png";
// import Random from "react-random";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase";
class quiz extends Component {
  state = {
    qs: [],
    answer: "",
  };
  handleChange = (e) => {
    let key = e.target.name;

    this.setState({
      [key]: e.target.value,
    });
  };
  ReadData = () => {
    const db = firebase.firestore();
    const { qs } = this.state;

    db.collection("questions-answers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //  console.log(doc.id, " => ", doc.data());
          qs.push(doc.data());
        });

        this.setState({ qs });
      });
  };
  componentDidMount() {
    this.ReadData();
  }
  //  var rand = qs[Math.floor(Math.random() * qs.length)];
  render() {
    return (
      <div>
        <h1>hi </h1>
        <input
          className="ansInput"
          defaultValue={this.state.answer}
          placeholder="enter the answer"
          name="answer"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default quiz;
