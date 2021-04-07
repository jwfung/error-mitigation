import "./App.css";
import React from "react";

import instructions from "./instructions.js";
import Speech from "./Speech.js";

import Mega from "./assets/cylinder.png";
import firstList from "./assets/shopList_1.png";

const confirmItem = "Got it! Item has been added to your cart";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className={open ? "open" : null}>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        hamburger
      </button>
      <ul>{/* elements */}</ul>
    </nav>
  );
};

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index : 0 }
  }

  //helper function to get text
  getNextText() {
    const { index } = this.state;
    this.setState({ index: index + 1 });
  }

  render() {
    const { index } = this.state;
    const currTex = (index >= instructions.length ? null : instructions[index]);

    return (
      <div>
        <row>
          <img 
            className="item first"
            src={firstList}
            style={{ width: "50px", margin: "100px" }}
            alt="shopping-list"
          />
          <div className="item text next">
            {currTex && (
              <div>
                <p> {currTex.top} </p>
                <p> {currTex.mid} </p>
              </div>
            )}
          </div>
        </row>
        <row>
          <img
            className="item first"
            src={Mega}
            style={{ width: "50px", margin: "100px" }}
            alt="mega bot"
          />
          <div className="item text next"> 
            <Speech 
              megaSpeak={confirmItem}
              getNextText={this.getNextText.bind(this)}
            />
          </div>
        </row>
      </div>
    );
  }
}

export default Study;
