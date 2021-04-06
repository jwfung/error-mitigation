import "./App.css";
import React from "react";

class MegaSpeech extends React.Component {
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

    return {};
  }
}
