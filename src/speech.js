import "./App.css";
import React from "react";

import NextButton from "./NextButton.js";
import cartOne from "./cartOne.js";

const confirmItem = "Got it! Item has been added to your cart";

class Speech extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      doneSpeak: false, 
      clickSpeak: false, 
      itemCounter: 0,
      index: 0,
      items: {cartOne}}
  }

  componentDidUpdate() {
    if (this.props.megaSpeak === {confirmItem}) {
      this.addItem();
      this.setState({doneSpeak: !this.state.doneSpeak, clickSpeak: !this.state.doneSpeak});
      this.setState({itemCounter: this.state.itemCounter + 1});
      return (
        <div className="counter"> 
          <p> { this.state.itemCounter } </p> 
        </div>);
      }
  }

  addItem() {
    const { index, items } = this.state;
    items[index].added = true
    this.setState({ index: index + 1, items });
  }

  handleSpeak(megaResponse) {
    // Turn Click to Speak off 
    this.setState({ clickSpeak: !this.state.clickSpeak });

    // User is done speaking 
    if (this.state.clickSpeak) {
      this.setState({ doneSpeak: !this.state.doneSpeak});
    }
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
