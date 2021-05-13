import "./App.css";
import React from "react";

import instructions from "./text/checkpointOne.js";
import text from "./text/instructionsTwo.js";
import cart from "./text/cartTwo.js"

import Speech from "./Speech.js";
import Walkthrough from "./Walkthrough.js"
import Cart from "./Cart.js"

const confirmItem = "Got it! Item has been added to your cart";

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index : 0}
  }

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
    const { items } = this.props;
    const currTex = (index >= instructions.length ? null : instructions[index]);    

    if (currTex !== null) {
      return (
        <div>
          <div>
            <Cart cart={items}/>
          </div>
          <div>
            <div className="wrapper">
              <div className="list">
                <h3>Shopping List</h3>
                {items.map((item, i) => {
                  if (item.list) {
                    return (
                      <div key={i}>
                        {item.name}
                      </div>
                    )
                }})}
              </div>
              <div className="text">
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
    } else {return <Walkthrough text={text} cart={cart}/>;}
  }
}

export default Study;
