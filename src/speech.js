import "./App.css";
import React from "react";

import NextButton from "./NextButton.js";
import cartOne from "./text/cartOne.js";

const confirmItem = "Got it! Item has been added to your cart";

class Speech extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      clickSpeak: false, 
      itemCounter: 0,
      index: 0,
      items: {cartOne}}
  }

  componentDidUpdate() {
    if (this.props.megaSpeak === {confirmItem}) {
      this.addItem();
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

  handleSpeak() {
    this.setState({ clickSpeak: !this.state.clickSpeak });
  
  }

  render() {
    const { megaSpeak, getNextText } = this.props;
    const {clickSpeak } = this.state;
    return (
      <div>
        {!megaSpeak || clickSpeak ? (
          <NextButton getNextText={() => getNextText()} />
        ) : (
          <button id="btn" className="speak" onClick={() => this.handleSpeak(megaSpeak)}>
            Ask Mega
          </button>
        )}
        { clickSpeak && megaSpeak ? <p> <i> { megaSpeak } </i> </p>: null }
      </div>
    );
  }
}

export default Speech;
