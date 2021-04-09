import "./App.css";
import React from "react";

import NextButton from "./NextButton.js";
import Cart from "./Cart.js";

const confirmItem = "Got it! Item has been added to your cart";

class Speech extends React.Component {
  constructor (props) {
    super(props);

    this.state = { doneSpeak: false, clickSpeak: false }
  }

  handleSpeak(megaResponse) {
    // Turn Click to Speak off 
    this.setState({ clickSpeak: !this.state.clickSpeak });

    // User is done speaking 
    if (this.state.clickSpeak) {
      this.setState({ doneSpeak: !this.state.doneSpeak });
    }

    // if (megaResponse === confirmItem) {
    //   //<Cart/>
    //   this.setState({ clickSpeak: false, doneSpeak: false});
    // }
  }

  render() {
    const { megaSpeak, getNextText } = this.props;
    const { clickSpeak, doneSpeak } = this.state;
    
    const megaResponse = megaSpeak ?  megaSpeak :  confirmItem;

    return (
      <div>
        {/* If done speaking, move on, otherwise, prepare to speak*/}
        {!megaSpeak || doneSpeak ? (
          <NextButton getNextText={() => getNextText()} />
        ) : (
          <button id="btn" className="speak" onClick={() => this.handleSpeak(megaResponse)}>
            {!clickSpeak ? "Click to Speak" : "Done speaking"}
          </button>
        )}
        {/* If Mega has something to say and user done speaking */}
        {megaSpeak && doneSpeak ? <p> { megaSpeak } </p>: null} 
      </div>
    );
  }
}

export default Speech;
