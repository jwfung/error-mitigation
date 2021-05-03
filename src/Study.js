import "./App.css";
import React from "react";

import instructions from "./text/checkpointOne.js";
import text from "./text/instructionsTwo.js";
import Speech from "./Speech.js";
import Walkthrough from "./Walkthrough.js"
import Cart from "./Cart.js"

const confirmItem = "Got it! Item has been added to your cart";

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index : 0}
  }

  componentDidUpdate() {}

  //helper function to get text
  getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });

    if (index >= instructions.length) {
      return false;
    }
  }

  addToCart() {
    const { itemCounter } = this.state;

    if (itemCounter < 5) {
      this.setState({itemCounter: itemCounter + 1});
    }
    else {
      return false;
    }
  }

  render() {
    const { index } = this.state;
    const currTex = (index >= instructions.length ? null : instructions[index]);    

    if (currTex !== null) {
      return (
        <div>
          <div>
            <Cart/>
          </div>
          <div>
            <div className="grid">
              <div className="list col-1-2">
                <h3>Shopping List</h3>
                <p> double A batteries </p>
                <p> dog food </p>
                <p> lactose-free milk </p>
                <p> flour </p>
                <p> 13 gallons trash bags </p>
              </div>
              <div className="text col-2-3">
                <div>
                  <p> {currTex.top} </p>
                  <p> {currTex.mid} </p>
                  <p> {currTex.bottom} </p>
                </div> 
              </div>
            </div>
            <div className="cylinder"></div> 
            <Speech 
              key={index}
              megaSpeak={currTex === null ? null: confirmItem}
              getNextText={this.getNextText.bind(this)}
            />
          </div>
        </div>
      );
    } else {return <Walkthrough text={text} />;}
  }
}

export default Study;
