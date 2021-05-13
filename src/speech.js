import "./App.css";
import React from "react";

import cartOne from "./text/cartOne.js";
import nextBtn from "./assets/next.png";
import speaking from "./assets/3.gif";

class NextButton extends React.Component{
  render() {
    return (
      <div>
        <img
          src={nextBtn}
          style={{
            width: "90px",
            position: "fixed",
            bottom: "100px",
            right: "100px"
          }}
          onClick={() => this.props.getNextText()}
          alt="next arrow"
        />
      </div>
    );
  }
}


// const confirmItem = "Got it! Item has been added to your cart";

class Speech extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      clickSpeak: false, 
      itemCounter: 0,
      addItem: false,
      index: 0,
      items: cartOne
    }
  }

  componentDidUpdate() {
    const {addItem, clickSpeak} = this.state;
    if (addItem === true) {
      console.log("Added");
      this.setState({itemCounter: this.state.itemCounter + 1});
      this.setState({ addItem: !this.state.addItem });
      return (
        <div className="counter"> 
          <p> { this.state.itemCounter } </p> 
        </div>);
      }
    if (clickSpeak) {
      return (<img src={speaking} alt="speaking"/>)
    }
  }

  addItem() {
    const { index, items } = this.state;
    this.setState({ index: index + 1, addItem: !this.state.addItem });
    console.log(items)
    console.log(index)
    items[index].added = true
  }

  handleSpeak() {
    this.setState({ clickSpeak: !this.state.clickSpeak });
    this.addItem();
    // document.getElementsByName("cyliner").style.animation = "speaking";
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
