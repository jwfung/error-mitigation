import "./App.css";
import React from "react";

import Mega from "./assets/cylinder.png";
import firstList from "./assets/shopList_1.png";

class Study extends React.Component {
  constructor(props) {
    super(props);
    const checkpointOne = [
      "Double A batteries has been added to your cart",
      "Dog Food has been added to your cart",
      "Lactose Free Milk has been added to your cart",
      "Flower has been added to your cart",
      "13 gallon trash bags has been added to your cart"
    ];
    this.state = { checkpointOne, index: 0 };
  }

  async getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { checkpointOne, index } = this.state;

    if (index >= checkpointOne.length) {
      return <></>;
    }

    const currSpeech = checkpointOne[index];

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <p> This is your shopping list </p>
          <p> Using Mega, order each item, one by one </p>
        </div>
        <img
          src={firstList}
          style={{ width: "250px", margin: "left", margin: "100px 100px" }}
          alt="shopping-list"
        />
        <img
          src={Mega}
          style={{ width: "250px", margin: "left", margin: "100px 100px" }}
          alt="mega bot"
        />
      </div>
    );
  }
}

export default Study;
