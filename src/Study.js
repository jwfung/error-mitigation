import "./App.css";
import React from "react";

import Mega from "./assets/cylinder.png";
import firstList from "./assets/shopList_1.png";

class Study extends React.Component {
  constructor(props) {
    super(props);
    const instructions = [
      {
        top: "This is your shopping list",
        mid: "Using Mega, order each item, one by one "
      },
      {
        top:
          "You can check your cart to ensure the correct item has been added.",
        mid: "Otherwise, keep shopping."
      }
    ];
    this.state = { instructions, index: 0 };
  }

  async getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { instructions, index } = this.state;

    if (index >= instructions.length) {
      return <></>;
    }

    const currSpeech = "Got it, item has been added to your cart";
    const currTex = instructions[index];

    return (
      <div className="wrapper">
        <img
          src={firstList}
          style={{ width: "250px", margin: "200px" }}
          alt="shopping-list"
        />
        <div>
          <p> {currTex.top} </p>
          <p> {currTex.mid} </p>
        </div>
        <img
          src={Mega}
          style={{ width: "250px", margin: "200px" }}
          alt="mega bot"
        />
        <div>
          <p> </p>
          <p> </p>
        </div>
      </div>
    );
  }
}

export default Study;
