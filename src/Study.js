import "./App.css";
import React from "react";

import instructions from "./text/instructions.js";
import Speech from "./Speech.js";
import Walkthrough from "./Walkthrough.js"
import Cart from "./Cart.js"
import speaker from "./assets/person.png";

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
            <row>
              <div className="item first">
                <list>
                  <h2>Shopping List</h2>
                  <p> double A batteries </p>
                  <p> dog food </p>
                  <p> lactose-free milk </p>
                  <p> flour </p>
                  <p> 13 gallons trash bags </p>
              </list>
              </div>
              <div className="item text next">
                  <div>
                    <p> {currTex.top} </p>
                    <p> {currTex.mid} </p>
                  </div>
              </div>
            </row>
            <row>
              <div className="item first">
                <div className="cylinder"></div> 
              </div>
              <div className="item text next"> 
                <Speech 
                  key={index}
                  megaSpeak={currTex === null ? null: confirmItem}
                  getNextText={this.getNextText.bind(this)}
                />
                <img 
                  className="item next img" 
                  src={speaker} 
                  style={{position: "float"}}
                  alt="speaker"
                />
              </div>
            </row>
          </div>
        </div>
      );
    } else {return <Walkthrough text=""/>;}
  }
}

export default Study;
