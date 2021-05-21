import "./App.css";
import React from "react";
import text from "./text/instructionsTwo.js";
import textFinal from "./text/instructionsFinal.js"
import cartTwo from "./text/cartTwo.js"

import Speech from "./Speech.js";
import Walkthrough from "./Walkthrough.js"
import Cart from "./Cart.js"
import checkpointTwo from "./text/checkpointTwo";

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index : 0, itemsIndex: 0, itemCounter: 0, errorMit: false, checkout: false}
  }

  addItem() {
    const { itemsIndex, itemCounter } = this.state;
    const { items } = this.props;
    console.log(items[itemsIndex])
    items[itemsIndex].added = true

    let newIndex = itemsIndex + 1
    for (let i = itemsIndex + 1; i < items.length; i++) {
      if (items[i].added) newIndex++
    }
    this.setState({ itemsIndex: newIndex, items, itemCounter: itemCounter + 1, errorMit: false });
  }

  removeItem(i) {
    const { itemCounter } = this.state;
    const { items } = this.props;

    const item = items[i];
    const { wrongItem } = item;
    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
    } 
    item.added = false;
    this.setState({ itemsIndex: i, items, itemCounter: itemCounter - 1, errorMit: true});
  }

  checkout() {
    this.setState({checkout: true})
    console.log(this.state.checkout)
  }

  //helper function to get text
  getNextText() {
    const { checkpointText, items } = this.props;
    const { index, itemCounter } = this.state;
    if (checkpointText && index >= checkpointText.length) {
      return false;
    }
    if (index < 2 || itemCounter >= items.length) {
      this.setState({ index: index + 1 });
    } 
  }

  render() {
    const { index, itemCounter, errorMit, checkout } = this.state;
    const { items, checkpointText } = this.props;

    const currTex = (checkpointText && index <= checkpointText.length ? checkpointText[index] : null); 
    const length = (checkpointText ? checkpointText.length : 1)
    const isCheckpointTwo = (checkpointText === checkpointTwo ? true : false) 
    const windowIndex = (isCheckpointTwo ? 1 : 2)
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = (isCheckpointTwo ? "Oops, I'm sorry about that. Those two words sound the same. I wasn't sure which one you meant."
                                                : "Oops, I'm sorry about that. Shall we try again?");
        
    if (checkout) {
      if (items !== cartTwo) {
        return <Walkthrough text={text} cart={cartTwo} checkpointText={checkpointTwo}/>;
      } else {
        return <Walkthrough text={textFinal} />;
      }
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
                {index >= windowIndex && index <= length - 2 ? 
                  <div className="counter"> 
                    <h4> { this.state.itemCounter } </h4> 
                  </div> : null}
              </div>
            </div>
            {!isCheckpointTwo ? <div className="cylinder"/> : <div className="gema"/>}
            {errorMit ? <p> <i> {errorMitigation} </i></p> : null}
            {index <= length - 2 || itemCounter < items.length ? 
            <Speech 
              key={index}
              megaSpeak={(itemCounter >= items.length && index >= length - 1) ? false : confirmItem}
              getNextText={this.getNextText.bind(this)}
              addItem={this.addItem.bind(this)}
              isCheckpointTwo={isCheckpointTwo}
            /> : null }
          </div>
        </div>
      );
    } else {return <></>}
  }
}

export default Study;
