import "./App.css";
import React from "react";
import text from "./text/instructionsTwo.js";
import textFinal from "./text/instructionsFinal.js";
import cartTwo from "./text/cartTwo.js";
import nextBtn from "./assets/next.png";
import check from "./assets/check.png";

import Speech from "./Speech.js";
import Cart from "./Cart.js";
import checkpointTwo from "./text/checkpointTwo";
import Walkthrough from "./Walkthrough.js";


class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      index : 0, 
      itemsIndex: 0, 
      itemCounter: 0, 
      errorMit: false, 
      checkout: false,
      submit: false,
      delivered: false
    }
  }

  addItem() {
    const { itemsIndex, itemCounter } = this.state;
    const { items } = this.props;
    // console.log(items[itemsIndex])
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
    // console.log(this.state.checkout)
  }

  handleSubmission() {
    this.setState({submit: true})
    // console.log(this.state.submit)
  }

  delivered() {
    this.setState({delivered: true})
    console.log(this.state.delivered)
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
    const { index, itemCounter, errorMit, checkout, submit, delivered } = this.state;
    const { items, checkpointText } = this.props;

    const currTex = (checkpointText && index <= checkpointText.length ? checkpointText[index] : null);
    const length = (checkpointText ? checkpointText.length : 1);
    const isCheckpointTwo = (checkpointText === checkpointTwo ? true : false);
    const windowIndex = (isCheckpointTwo ? 1 : 2);
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = (isCheckpointTwo ? "Oops, I'm sorry about that. I found multiple items with the same keyword. Can you be more specific?"
                                              : "Oops, I'm sorry about that. Can you be more specific?");
    if (submit) {
      if (items !== cartTwo) {
        return <Walkthrough text={text} cart={cartTwo} checkpointText={checkpointTwo} />;
      } else {
        return <Walkthrough text={textFinal} />;
      }
    }    
    else if (delivered) {
      return (
        <div>
        <h2>Your items have arrived!</h2>
        <p>Check to see if they match with your list.</p>
        {items && items.map((item, i) => {
          return (
            <div key={i}>
              {console.log(item.added)}
              {item.added && <img src={item.img} style={{maxHeight: "150px"}} alt=""/>}
              <div style={{margin: "20px"}}>
                <input type="radio" value="correct" name={i}/> Correct 
                <input type="radio" value="inccorrect" name={i}/> Incorrect
              </div>
            </div>
          )
        })}
        <button onClick={() => this.handleSubmission()}> Submit </button>
      </div>
      );
    }
    else if (checkout) {
      return (
        <div>
          <h2>Purchase Completed!</h2>
          <img src={check} alt=""/>
          <img
            src={nextBtn}
            style={{
              width: "90px",
              position: "fixed",
              bottom: "100px",
              right: "100px"
            }}
            onClick={() => this.delivered()}
            alt="next arrow"
          />
        </div>
      );
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
                <h3> Shopping List </h3>
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
            {(index > length - 2 || itemCounter > items.length ) ? <button className="purchase" onClick={() => this.checkout()}> Proceed to Checkout </button> : null}
          </div>
        </div>
      );
    } else {return <></>}
  }
}

export default Study;
