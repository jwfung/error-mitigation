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

    if (index >= instructions.length) {
      return false;
    }
  }

  render() {
    const { index } = this.state;
    const currTex = (index >= instructions.length ? null : instructions[index]);

    return (
      <div>
        <row>
          <list
            className="item first"
            src={firstList}
            style={{ marginLeft: "100px"}}
            alt="shopping-list"
          >
            <h2>Shopping List</h2>
            <p> double A batteries </p>
            <p> dog food </p>
            <p> lactose-free milk </p>
            <p> flour </p>
            <p> 13 gallons trash bags </p>
          </list>
          <div className="item text next">
            <Nav/>
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
            style={{ marginLeft: "100px",width: "50px" }}
            alt="mega bot"
          />
          <div className="item text next"> 
            <Speech 
              megaSpeak={confirmItem}
              getNextText={this.getNextText.bind(this)}
            />
          </div>
          {/* TODO: trigger speak button again */}
        </row>
      </div>
    );
  }
}

export default Study;
