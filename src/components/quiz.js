import React, { Component } from "react";

import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import * as firebase from "firebase";
import FloatingActionButton from "material-ui/FloatingActionButton";

import ContentAdd from "material-ui/svg-icons/action/done";

//import { RadioGroup, RadioButton } from "react-radio-buttons";
import "firebase/auth";

const stylee = {
  marginLeft: "80%",
  marginBottom: "3%",
};
const style7 = {
  color: "#245",
  fontFamily: "Comic Sans MS",
};
const style1 = {
  color: "black",
  fontFamily: "Comic Sans MS",
  fontSize: "25px",
  margin: "25px 0px 0px 0px",
};
const style5 = {
  height: "800%",
  width: "50%",
  margin: 20,
  textAlign: "center",
  display: "inline-block",
};

const styles = {
  block: {
    maxWidth: 25,
  },
  radioButton: {
    marginBottom: 16,
    textAlign: "left",
    marginLeft: 30,
  },
};
const style2 = {
  margin: "20px 0px 0px 0px",
  background: "#245",
  padding: "30px",
  color: "#fff",
  fontSize: "25px",
  fontFamily: "Comic Sans MS",
};

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
    this.RadioButtonsGroup = this.RadioButtonsGroup.bind(this);
  }
  RadioButtonsGroup() {}

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
          window.location.reload();
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
        <MuiThemeProvider>
          <div>
            <center>
              <Paper style={style5} zDepth={3}>
                <div>
                  <h1 style={style7}>Let's quiz you!</h1>
                  <hr></hr>
                  <br></br>
                  <h1 style={style2}>{randques.questions} </h1>
                  <div>
                    <label style={style1}>
                      <input
                        name="options"
                        type="radio"
                        value={randques.firstOption}
                        style={styles.RadioButton}
                      />
                      {randques.firstOption}
                    </label>
                  </div>
                  <div>
                    <label style={style1}>
                      <input
                        name="options"
                        type="radio"
                        value={randques.secondOption}
                        style={styles.RadioButton}
                      />
                      {randques.secondOption}
                    </label>
                  </div>
                  <div>
                    <label style={style1}>
                      <input
                        name="options"
                        type="radio"
                        value={randques.thirdOption}
                        style={styles.RadioButton}
                      />
                      {randques.thirdOption}
                    </label>
                  </div>
                  <div>
                    <label style={style1}>
                      <input
                        name="options"
                        type="radio"
                        value={randques.forthOption}
                        style={styles.RadioButton}
                      />
                      {randques.forthOption}
                    </label>{" "}
                  </div>
                  <FloatingActionButton
                    style={stylee}
                    onClick={this.checkQuestion}
                  >
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </Paper>
            </center>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default test;
