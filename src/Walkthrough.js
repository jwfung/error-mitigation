import "./App.css";
import React from "react";

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
    const { text, cart, checkpointText} = this.props;

    if (index >= text.length) {
      return <Study items={cart} checkpointText={checkpointText}/>
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