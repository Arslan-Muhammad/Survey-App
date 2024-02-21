import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
const app = initializeApp(firebaseConfig);
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      isSubmitted: false,
      questions: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
    };
  }
  detailsSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    event.preventDefault();
    this.setState({ name, email });
  };
  questionSubmitHandler = (event) => {
    event.preventDefault();
    const questions = {};
    questions.q1 = event.target.q1.value;
    questions.q2 = event.target.q2.value;
    questions.q3 = event.target.q3.value;
    questions.other = event.target.other.value;
    this.setState({ questions });
    const db = getDatabase();
    set(ref(db, "fir-project/" + this.state.id), {
      name: this.state.name,
      email: this.state.email,
      questions: this.state.questions,
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary">Survey Project</h1>
          </div>
          {this.state.name === null && this.state.email === null ? (
            <Details submit={this.detailsSubmitHandler} />
          ) : (
            <Question submit={this.questionSubmitHandler} />
          )}
        </div>
      </>
    );
  }
}

export default Container;
