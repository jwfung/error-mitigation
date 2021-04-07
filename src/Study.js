import "./App.css";
import React from "react";

import Speech from "./Speech.js";

import Mega from "./assets/cylinder.png";
import firstList from "./assets/shopList_1.png";


class Study extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { instructions, 
            index, 
            getNextText } = this.props;

    if (index >= instructions.length) {
      return <></>;
    }

    const confirmItem = "Got it, item has been added to your cart";
    const currTex = instructions[index];

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

    return (
      <div>
      <row>
        <img 
          className="item first"
          src={firstList}
          style={{ width: "100px", margin: "200px" }}
          alt="shopping-list"
        />
        <div class="item text next">
          <p> {currTex.top} </p>
          <p> {currTex.mid} </p>
        </div>
      </row>
      <row>
        <img
          className="item first"
          src={Mega}
          style={{ width: "100px", margin: "200px" }}
          alt="mega bot"
        />
        <div className="item text next"> 
          <Speech 
            megaSpeak={confirmItem}
            getNextText={getNextText()}
          />
        </div>
        <Nav/>
      </row>
      </div>
    );
  }
}

export default Study;
