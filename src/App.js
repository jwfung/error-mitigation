import "./App.css";
import React from "react";

import nextBtn from "./assets/next.png";
import Mega from "./assets/cylinder.png";

class Walkthrough extends React.Component {
  constructor(props) {
    super(props);
    const text = [
      {
        header: "Instructions:",
        top: "In this study, you will be interacting with a story sequence",
        mid:
          "Please press the arrow buttons or the prompted texts that appears at the bottom of your screen to proceed through each stage of the story"
      },
      {
        mega: { Mega },
        top: "This is Mega",
        mid:
          "Mega is your personal assistant. It can respond to basic commands",
        bottom: "Try asking Mega what the weather is."
      },
      {
        mega: { Mega },
        top:
          "Mega can also help you order items online at MegaShop, a global e-commerce store that can deliver items quickly",
        mid:
          "You can check your cart online at MegaShop before placing your order, or place the order directly"
      },
      {
        top: "In this game, you will be ordering a list of items using Mega.",
        mid:
          "However, Mega may not always be accurate. Keep an eye out for any errors!"
      }
    ];
    this.state = { text, index: 0 };
  }

  //helper function to get text
  async getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { text, index } = this.state;

    if (index >= text.length) {
      return <></>;
    }

    const currTex = text[index];

    return (
      <div className="App header" style={{ marginTop: "50px" }}>
        <h1>
          {" "}
          <b> {currTex.header} </b>{" "}
        </h1>
        <div className="App">
          {currTex.mega && (
            <img src={Mega} style={{ width: "50%" }} alt="mega" />
          )}
          <p> {currTex.top} </p>
          <p> {currTex.mid} </p>
          <p> {currTex.bottom} </p>
          <NextButton getNextText={this.getNextText.bind(this)} />
        </div>
      </div>
    );
  }
}

class NextButton extends React.Component {
  render() {
    const { getNextText } = this.props;

    return (
      <div>
        <img
          src={nextBtn}
          style={{ width: "10%" }}
          onClick={() => getNextText()}
          alt="next arrow"
        />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Walkthrough />
    </div>
  );
}

export default App;
