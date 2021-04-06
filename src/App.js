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
        mega: true,
        header: "This is Mega",
        top:
          "Mega is your personal assistant. It can respond to basic commands",
        mid: "Try asking Mega what the weather is.",
        speak: true
      },
      {
        mega: true,
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
    this.state = { text, index: 0, speaking: false };
  }

  //helper function to get text
  async getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  speakBtn() {
    this.setState({ speaking: !this.state.speaking });
  }

  render() {
    const { text, index, speaking } = this.state;

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
          <p> {currTex.top} </p>
          <p> {currTex.mid} </p>
          <p> {currTex.bottom} </p>
          {currTex.mega && (
            <img
              src={Mega}
              style={{ width: "250px", margin: "20px" }}
              alt="mega"
            />
          )}
          {!currTex.speak ? (
            <NextButton getNextText={this.getNextText.bind(this)} />
          ) : (
            <p>
              <button id="btn" class="speak" onClick={() => this.speakBtn()}>
                {speaking ? "Click to Speak" : "Done speaking"}
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }
}

const NextButton = (props) => {
  const { getNextText } = props;

  return (
    <div>
      <img
        src={nextBtn}
        style={{
          width: "10%",
          position: "fixed",
          bottom: "100px",
          right: "100px"
        }}
        onClick={() => getNextText()}
        alt="next arrow"
      />
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Walkthrough />
      </div>
    );
  }
}

export default App;
