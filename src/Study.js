import "./App.css";
import React from "react";

import instructions from "./text/instructions.js";
import Speech from "./Speech.js";
import Walkthrough from "./Walkthrough.js"
import Mega from "./assets/cylinder.png";

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
              {/* <Nav/> */}
                <div>
                  <p> {currTex.top} </p>
                  <p> {currTex.mid} </p>
                  {/* {currTex.img &&
                    <img 
                      className="item next img" 
                      src={currTex.img} 
                      alt="shopping window"
                    />
                  }  */}
                </div>
            </div>
          </row>
          <row>
            <div className="item first">
              <img
                src={Mega}
                alt="mega bot"
              />
            </div>
            <div className="item text next"> 
              <Speech 
                key={index}
                megaSpeak={currTex === null ? null: confirmItem}
                getNextText={this.getNextText.bind(this)}
                />
            </div>
          </row>
        </div>
      );
    } else {return <Walkthrough text=""/>;}
  }
}

export default Study;
