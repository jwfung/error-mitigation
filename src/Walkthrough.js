import "./App.css";
import React from "react";
import Mega from "./assets/cylinder.png";

import Study from "./Study";
import Speech from "./Speech";

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      index: 0, 
    };
  }

  //helper function to get text
  getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;

    if (index >= text.length) {
      return <Study />
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
            getNextText={this.getNextText.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Walkthrough;