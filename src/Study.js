import "./App.css";
import React from "react";
import text from "./text/instructionsTwo.js";
import cartTwo from "./text/cartTwo.js"
import cartOne from "./text/cartOne.js";

import Speech from "./Speech.js";
import Walkthrough from "./Walkthrough.js"
import Cart from "./Cart.js"

const confirmItem = "Got it! Item has been added to your cart";
const errorMitigation = "Oops, I'm sorry about that. Shall we try again?"

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index : 0, itemsIndex: 0, items: cartOne, itemCounter: 0, errorMit: false, checkout: false}
  }

  addItem() {
    const { itemsIndex, items, itemCounter } = this.state;
    items[itemsIndex].added = true

    let newIndex = itemsIndex + 1
    for (let i = itemsIndex + 1; i < items.length; i++) {
      if (items[i].added) newIndex++
    }
    this.setState({ itemsIndex: newIndex, items, itemCounter: itemCounter + 1, errorMit: false });
  }

  removeItem(i) {
    const { items, itemCounter } = this.state;
    const item = items[i];
    const { wrongItem } = item;
    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
    } 
    this.setState({ itemsIndex: i, items, itemCounter: itemCounter - 1, errorMit: true});
    item.added = false;
  }

  checkout() {
    this.setState({checkout: true})
    console.log(this.state.checkout)
  }

  //helper function to get text
  getNextText() {
    const { instructions } = this.props;
    const { index, itemCounter, items } = this.state;
    if (instructions && index >= instructions.length) {
      return false;
    }
    if (index < 2 || itemCounter >= items.length) {
      this.setState({ index: index + 1 });
    } 
  }

  render() {
    const { index, itemCounter, errorMit, checkout } = this.state;
    const { items, instructions } = this.props;
    const currTex = (instructions && index <= instructions.length ? instructions[index] : null);    

    //TODO: get rid of instrucions for round two
    if (checkout) {
      return <Walkthrough text={text} cart={cartTwo} items={items}/>;
    }
    else if (currTex != null) {
      return (
        <div>
          <div>
            <Cart items={items} removeItem={this.removeItem.bind(this)} itemCounter={itemCounter} checkout={this.checkout.bind(this)}/>
          </div>
          <div>
            <div className="wrapper">
              <div className="list">
                <h3>Shopping List</h3>
                {items.map((item, i) => {
                  return (
                    <div key={i}>
                      {item.list && <p>{item.name}</p>}
                    </div>
                  )
                })}
              </div>
              <div className="text">
                <div>
                  <p> {currTex.top} </p>
                  <p> {currTex.mid} </p>
                  <p> {currTex.bottom} </p>
                </div> 
                { index >= 2 && itemCounter <= items.length && index < instructions.length - 1 ? <div className="counter"> 
                  <h4> { this.state.itemCounter } </h4> 
                </div> : null }
              </div>
            </div>
            {instructions ? <div className="cylinder"/> : <div className="gema"/>}
            {errorMit ? <p> <i> {errorMitigation} </i></p> : null}
            {index < instructions.length - 1 ? 
            <Speech 
              key={index}
              megaSpeak={(itemCounter >= items.length && index >= instructions.length - 1) ? false : confirmItem}
              getNextText={this.getNextText.bind(this)}
              addItem={this.addItem.bind(this)}
            /> : null }
          </div>
        </div>
      );
    }
  }
}

export default Study;
