import "./App.css";
import React from "react";

import Study from "./Study";
import Speech from "./Speech";

import sessions from "./text/sessions";

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
    const { checkpointText, sess, latinsqr } = this.props;

    if (index >= sessions[sess].text.length) {
      return <Study items={sessions[sess].list} sess={sess} checkpointText={checkpointText} latinsqr={latinsqr}/>;
    }

    const currTex = sessions[sess].text[index];

    return (
      <div className="body">
        <h1>
          <b> {currTex.header} </b>
        </h1>
        <div>
          <p> {currTex.top} </p>
          <p> {currTex.mid} </p>
          <p> {currTex.bottom} </p>
          {currTex.agent && (
            <div className="agent">
            </div>
          )}
          {currTex.mega && (
            <div className="cylinder">
            </div>
          )}
          {currTex.gema && (
            <div className="gema">
            </div>
          )}
          <Speech 
            isDemo={true}
            megaSpeak={currTex.speak}
            getNextText={this.getNextText.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Walkthrough;