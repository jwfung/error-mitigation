import "./App.css";
import React from "react";
import Mega from "./assets/cylinder.png";

import instructions from "./instructions.js";
import text from "./text.js";
import NextButton from "./NextButton.js";
import Study from "./Study";
import Speech from "./Speech";

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text, 
      instructions,
      index: 0, 
      doneSpeak: false, 
      clickSpeak: false
    };
  }

  //helper function to get text
  async getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { text, instructions, index, doneSpeak, clickSpeak } = this.state;

    if (index >= text.length) {
      return (
        <Study 
          index={index - text.length}  
          instructions={instructions}
          getNextText={this.getNextText.bind(this)}
          handleSpeak={this.handleSpeak.bind(this)}
          doneSpeak={doneSpeak}
          clickSpeak={clickSpeak}
        />
      )
    }

    const currTex = text[index];

    return (
      <div className="body">
        <h1>
          <b> {currTex.header} </b>
        </h1>
        <div>
          <p> {currTex.top} </p>
          <p> {currTex.mid} </p>
          <p> {currTex.bottom} </p>
          {currTex.mega && (
            <img
              src={Mega}
              style={{ width: "250px", margin: "20px" }}
              alt="mega bot"
            />
          )}
          <Speech 
            megaSpeak={currTex.speak}
            handleSpeak={this.handleSpeak.bind(this)}
            clickSpeak={clickSpeak}
            doneSpeak={doneSpeak}
            getNextText={this.getNextText.bind(this)}
          />
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Walkthrough />
      </div>
    );
  }
}

export default App;
