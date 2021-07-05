import "./App.css";
import React from "react";
import text from "./text/instructionsTwo.js";
import textFinal from "./text/instructionsFinal.js";
import cartTwo from "./text/cartTwo.js";
import nextBtn from "./assets/next.png";
import check from "./assets/check.png";
import audio from "./assets/confirm.mp3";
import sameWord from "./assets/same_keyword.mp3";
import moreSpecific from "./assets/more_specific.mp3";

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
      delivered: false,
      incorrectItem: false,
      itemAdded: false,
      itemAudio: '',
      showHelp: false
    }
  }

  addItem(index) {
    const { itemsIndex, itemCounter } = this.state;
    const { items } = this.props;
    items[index].added = true

    const audioOrder = document.getElementsByClassName("audio-order")[0];
    audioOrder && audioOrder.play();
    this.addItemAgent();

    //find new index of removed item
    let newIndex = itemsIndex + 1
    for (let i = itemsIndex + 1; i < items.length; i++) {
      if (items[i].added) newIndex++;
    }
    this.setState({ 
        itemsIndex: newIndex, 
        items, 
        itemCounter: itemCounter + 1, 
        errorMit: false, 
        itemAdded: true,
        itemAudio: items[index].audio
      });
  }

  addItemAgent() {
    this.setState({itemAdded: false})
    // console.log(this.state.itemAdded);
    const audioAgent = document.getElementsByClassName("audio-agent")[0];
    audioAgent.play();
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

    const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
    audioAgent.play();
  }

  exchangeItem(i) {
    const { items } = this.props;

    const item = items[i];
    const { firstOpt, secondOpt } = item;

    if (firstOpt && firstOpt.inCart) {
      firstOpt.inCart = false;
      secondOpt.inCart = true;
    }

    else if (secondOpt && secondOpt.inCart) {
      firstOpt.inCart = true;
      secondOpt.inCart = false;
    }

  }

  checkout() {
    this.setState({checkout: true})
  }

  handleSubmission() {
    this.setState({submit: true})
  }

  handleIncorrectItem() {
    this.setState({incorrectItem: false})
  }

  delivered() {
    this.setState({delivered: true})
  }

  onChangeValue(e) {
    if (e === "incorrect") {
      this.setState({incorrectItem: true})
    }
  }

  clickHelp() {
    this.setState({showHelp: !this.state.showHelp})
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
    const { index, itemCounter, errorMit, checkout, submit, delivered, incorrectItem, itemAdded, itemAudio, showHelp } = this.state;
    const { items, checkpointText } = this.props;
    
    const currTex = (checkpointText && itemCounter < 5 ? checkpointText[0] : checkpointText[1]);
    const length = (checkpointText ? checkpointText.length : 1);
    const isCheckpointTwo = (checkpointText === checkpointTwo ? true : false);
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = (isCheckpointTwo ? "Oops, I'm sorry about that. I found multiple items with the same keyword. Can you try being more specific?"
                                              : "Oops, I'm sorry about that. Can you try being more specific?");
    if (submit) {
      if (incorrectItem) {
        return ( 
          <div className="body">
            {!isCheckpointTwo ? <div className="cylinder"/> : <div className="gema"/>}
            <p><i>Oops, I'm sorry about that. I can start a return process for the item</i></p>
            <img className="nextBtn" src={nextBtn} alt="next button" onClick={() => this.handleIncorrectItem()}/>
          </div>
        )
      }
      else if (items !== cartTwo) {
        return <Walkthrough text={text} cart={cartTwo} checkpointText={checkpointTwo} />;
      } else {
        return <Walkthrough text={textFinal} />;
      }
    }    
    else if (delivered) {
      return (
        <div>
          <h2>Your items have arrived!</h2>
          <p>Check to see if they match with your shopping list.</p>
            <div className="list">
              <h3 style={{fontFamily: "cursive"}}> Shopping List </h3>
              {items.map((item, i) => {
                return (
                  <div key={i}>
                    {item.list && <p style={{fontFamily: "cursive"}}>{item.name}</p>}
                  </div>
                )
              })}
            </div> 
            <div className="survey-wrapper">
            {items && items.map((item, i) => {
              return (
                <div className="survey-item-wrapper" key={i}>
                  <div>
                    <h3>{item.wrongItem && !item.wrongItem.rejected ? item.wrongItem.name : (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name)}</h3>   
                    {item.wrongItem && !item.wrongItem.rejected ? <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.img} alt=""/> :
                                                                  (item.added && item.firstOpt.inCart ? 
                                                                                <img style={{textAlign: "left", maxHeight: "100px"}} src={item.firstOpt.img} alt=""/> :
                                                                                <img style={{textAlign: "left", maxHeight: "100px"}} src={item.secondOpt.img} alt=""/>)}
                  </div>                                                        
                  <div style={{marginBlock: "auto"}} onChange={e => this.onChangeValue(e.target.value)}>
                    <input type="radio" value="correct" name={i}/> Correct 
                    <input type="radio" value="incorrect" name={i}/> Incorrect
                  </div>
                </div>
              )
            })}
            </div>
            <button className="speak" style={{marginBottom: "40px"}} onClick={() => this.handleSubmission()}> Submit </button>
        </div>
      );
    }
    //checked out
    else if (checkout) {
      return (
        <div className="body">
          <h2>Purchase Completed!</h2>
          <img src={check} alt=""/>
          <img
            src={nextBtn}
            className="nextBtn"
            onClick={() => this.delivered()}
            alt="next button"
          />
        </div>
      );
    }
    //still ordering
    else if (currTex != null) {
      return (
        <div>
          <div>
            <Cart 
              items={items} 
              removeItem={this.removeItem.bind(this)} 
              exchangeItem={this.exchangeItem.bind(this)} 
              itemCounter={itemCounter} 
              checkout={this.checkout.bind(this)}
            />
          </div>
          <div>
            <div className="wrapper">
              <div className="list">
                <h3 style={{fontFamily: "cursive"}}> Shopping List </h3>
                {items.map((item, i) => {
                  return (
                    <div key={i}>
                      {!item.added ? <button className="list-item" onClick={() => this.addItem(i)}> {item.name} </button> :
                                    <p className="list-added"> {item.name} </p> }
                      {/* {console.log(item)} */}
                      {console.log(item.audio)} {/*unsure*/}
                    </div>
                  )
                })}
                <audio className="audio-order">
                  <source src={itemAudio}/>
                </audio>
                <audio className="audio-agent">
                  <source src={audio}/>
                </audio>
                <audio className="audio-agent-error">
                  {!isCheckpointTwo ? <source src={moreSpecific}/> : <source src={sameWord}/>}
                </audio>
              </div>
              <div id="instructions" className="text">
                {itemCounter >= 1 && <div className="help-btn" onClick={() => this.clickHelp()}>?</div>}
                {showHelp || itemCounter < 1  || itemCounter === 5? 
                <div>
                  <p> {currTex.top} </p>
                  <p> {currTex.mid} </p>
                  <p> {currTex.bottom} </p>
                </div> : null}
                {/* ITEM COUNTER */}
                {/* {index >= 1 && index <= length - 2 ? 
                  <div className="counter"> 
                    <h4> { this.state.itemCounter } </h4> 
                  </div> : null} */}
              </div>
            </div>
            {!isCheckpointTwo ? <div className="cylinder"/> : <div className="gema"/>}
            { itemAdded && !errorMit ? <p className="mega-speech"> { confirmItem } </p>: null }
            {errorMit ? <p className="mega-speech"> {errorMitigation} </p> : null}
            {/* SPEECH BUTTON */}
            {/* {index <= length - 2 || itemCounter < items.length ? 
              <Speech 
                key={index}
                errorMit={errorMit}
                megaSpeak={(itemCounter >= items.length && index >= length - 1) ? false : confirmItem}
                getNextText={this.getNextText.bind(this)}
                addItem={this.addItem.bind(this)}
                isCheckpointTwo={isCheckpointTwo}
              /> : null } */}
            {(itemCounter >= items.length) ? <button className="purchase" onClick={() => this.checkout()}>  
                                                                    Proceed to Checkout 
                                                                  </button> : null}
          </div>
        </div>
      );
    } else {return <></>}
  }
}

export default Study;
