import "./App.css";
import React from "react";
import nextBtn from "./assets/next.png";
import check from "./assets/check.png";
import confirm from "./assets/confirm.mp3";
import sameWord from "./assets/same_keyword.mp3";
import moreSpecific from "./assets/more_specific.mp3";

import checkpointTwo from "./text/checkpointTwo";
import text from "./text/instructionsTwo";
import textFinal from "./text/instructionsFinal";
import sessions from "./text/sessions";

import Cart from "./Cart.js";
import Walkthrough from "./Walkthrough.js";

class Response extends React.Component {
  render () {
    const {index} = this.props;

    return (
      <div className="survey-item-wrapper"> 
        <button className="select" onClick={() => this.props.addItem(index)}>"Yes, that is correct. Add to cart"</button>
        <button className="select" onClick={() => this.props.exchangeItem(index)}>"Yes, that is correct, but show me more options"</button>
        <button className="select" onClick={() => this.props.errorMitigation()}>"No, that is incorrect"</button>
      </div>
    );
  }
}

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sess: 0,
      itemCounter: 0, 
      errorMit: false, 
      checkout: false,
      submit: false,
      delivered: false,
      incorrectItem: false,
      itemAudio: '',
      itemAdded: false,
      showHelp: false,
      response: -1,

    }
  }

  triggerResponse(index) {
    const {items} = this.props;
    this.setState({items, response: index, itemAudio: items[index].audio})
    {console.log(this.state.itemAudio)}
    {console.log(index)}
    const audioAgent = document.getElementsByClassName("audio-order")[0];
    audioAgent.play();
  }

  addItem(index) {
    const { itemCounter } = this.state;
    const { items } = this.props;
    items[index].added = true

    this.addItemAgent();
    this.setState({ 
        items, 
        itemCounter: itemCounter + 1, 
        errorMit: false, 
        itemAdded: true,
        response: -1,
      });
  }

  addItemAgent() {
    this.setState({itemAdded: false})
    const audioAgent = document.getElementsByClassName("audio-confirm")[0];
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
    this.setState({ items, itemCounter: itemCounter - 1});
    this.errorMitigation();
  }

  errorMitigation() {
    const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
    audioAgent.play();

    this.setState({ errorMit: true, response: -1});
  }

  exchangeItem(i) {
    const { items } = this.props;

    const item = items[i];
    const { firstOpt, secondOpt } =  item.wrongItem && item.wrongItem.rejected ? item : item.wrongItem;

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

  render() {
    const { sess, itemCounter, errorMit, checkout, submit, delivered, incorrectItem, itemAdded, itemAudio, showHelp, response } = this.state;
    const { items, checkpointText } = this.props;
    
    const currTex = (checkpointText && itemCounter < 5 ? checkpointText[0] : checkpointText[1]);
    // const length = (checkpointText ? checkpointText.length : 1);
    const isCheckpointTwo = (checkpointText === checkpointTwo ? true : false);
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = sessions[sess].error;

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
      else {
        return <Walkthrough text={sessions[sess].text} cart={sessions[sess + 1]} checkpointText={checkpointTwo} />;
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
                    <h3> {item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
                                                                        (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name)} </h3>   
                    {item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.secondOpt.img} alt=""/>) :
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
                      {!item.added ? <button className="list-item" onClick={() => this.triggerResponse(i)}> {item.name} </button> :
                                    <p className="list-added"> {item.name} </p> }
                    </div>
                  )
                })}
                {/* {items.map((item, i) => {
                  return (
                    <div key={i}>
                      <audio className="audio-order">
                        <source src={item.audio}/>
                      </audio>
                    </div>
                  )
                })} */}
                <audio className="audio-order">
                  <source src={itemAudio}/>
                </audio>
                <audio className="audio-confirm">
                  <source src={confirm}/>
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

              </div>
            </div>
            { sessions[sess].agent }
            { itemAdded && !errorMit ? <p className="mega-speech"> { confirmItem } </p>: null }
            { errorMit ? <p className="mega-speech"> {errorMitigation} </p> : null}
            { response >= 0 && <Response 
                            index={response} 
                            addItem={this.addItem.bind(this)} 
                            exchangeItem={this.exchangeItem.bind(this)} 
                            errorMitigation={this.errorMitigation.bind(this)}
                          /> }
            { (itemCounter >= items.length) ? <button className="purchase" onClick={() => this.checkout()}>  
                                                Proceed to Checkout 
                                              </button> : null }
          </div>
        </div>
      );
    } else {return <></>}
  }
}

export default Study;
