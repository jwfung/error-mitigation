import "./App.css";
import React from "react";

import nextBtn from "./assets/next.png";
import check from "./assets/check.png";
import confirm from "./assets/audio/confirm.mp3";
import tryAud from "./assets/audio/tryagain.mp3";

import checkpointTwo from "./text/checkpointTwo";
import sessions from "./text/sessions";
import sessOrder from "./text/sess_order";

import Cart from "./Cart.js";
import Walkthrough from "./Walkthrough.js";
import Questionaire from "./Questionaire.js";

class Response extends React.Component {
  render () {
    const { index } = this.props;

    return (
      <div className="survey-item-wrapper"> 
        <button className="response" onClick={() => this.props.addItem(index)}>"Yes, that is correct. Add to cart"</button>
        <button className="response" onClick={() => this.props.exchangeItem(index)}>"Yes, that is correct, but show me more options"</button>
        <button className="response" onClick={() => this.props.tryAgain(index)}>"No, that is incorrect"</button>
      </div>
    );
  }
}

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      itemCounter: 0, 
      errorMit: false, 
      maybeErrorMit: false,
      tryAgain: false,
      checkout: false,
      submit: false,
      delivered: false,
      questComplete: false,
      incorrectItem: false,
      itemAudio: '',
      itemAdded: false,
      showHelp: false,
      response: -1,
      itemDes: false,
      item: -1,
      speaking: false,
      data: {
        cart: [],
        errcount: -1,
        cartcount: -1,
      },
      errorcount: 0,
      cartcount: 0,
      cart: new Map(),
      userId: '',
      objId: ''
    }
  }

  //ordering
  clickHelp() {
    this.setState({showHelp: !this.state.showHelp})
  }

  speaking() {
    this.setState({speaking: true})
    console.log("speaking")
  }

  doneSpeaking() {
    this.setState({speaking: false})
    console.log("speaking")
  }

  triggerResponse() {
    this.setState({ response: this.state.item, speaking: false })
  }

  orderItem(index) {
    const { items } = this.props;

    this.setState({
      itemDes: ( !items[index].wrongItem || items[index].wrongItem.rejected ? (items[index].firstOpt.inCart ? items[index].firstOpt.des : items[index].secondOpt.des) :
                                                                            (items[index].wrongItem.firstOpt.inCart ? items[index].wrongItem.firstOpt.des : items[index].wrongItem.secondOpt.des) ),
      itemAudio: (!items[index].wrongItem || items[index].wrongItem.rejected ? (items[index].firstOpt.inCart ? items[index].firstOpt.audio : items[index].secondOpt.audio) :
                              (items[index].wrongItem.firstOpt.inCart ? items[index].wrongItem.firstOpt.audio : items[index].wrongItem.secondOpt.audio)), 
      errorMit: false,
      tryAgain: false,
      item: index
    }, () => this.orderItemAudio());

  }

  orderItemAudio() {
    // console.log(this.state.itemAudio)
    const audioAgent = document.getElementsByClassName("audio-order")[0];
    audioAgent.play();
  }

  addItem(index) {
    const { itemCounter } = this.state;
    const { items } = this.props;
    items[index].added = true

    this.addItemAudio();

    this.setState({ 
      items, 
      itemCounter: itemCounter + 1, 
      errorMit: false, 
      itemAdded: true,
      response: -1,
      itemDes: false
    });
  }

  addItemAudio() {
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
      this.setState({maybeErrorMit: true})
    } 
    item.added = false;
    this.setState({ items, itemCounter: itemCounter - 1, itemDes: false});
    this.tryAgain(i);
  }

  tryAgain(i) {
    const { items } = this.props;
    const item = items[i];
    const audioAgent = document.getElementsByClassName("audio-try-again")[0];
    const { wrongItem } = item;

    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
      this.setState({maybeErrorMit: true})
    } 

    this.setState({
      tryAgain: true,
      itemDes: false,
      items,  
      response: -1, 
      errorcount: this.state.errorcount + 1
    });

    audioAgent.play();
  }

  maybeErrorMit() {
    if (this.state.maybeErrorMit) {
      this.setState({errorMit: true, maybeErrorMit: false});
      this.errorMitAudio();
    }
    this.setState({speaking: false})
  }

  errorMitAudio() {
    const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
    audioAgent.play();
  }

  errorMitigation(i) {
    const { items } = this.props;
    const item = items[i];

    const { wrongItem } = item;
    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
    } 
    
    this.setState({
      items,  
      errorMit: true, 
      response: -1, 
      errorcount: this.state.errorcount + 1
    });
  }

  cartcount() {
    this.setState({
      cartcount: this.state.cartcount + 1
    });
  }

  exchangeItem(index) {
    const { items } = this.props;

    const item = items[index];
    const { wrongItem } = item
    const { firstOpt, secondOpt } = wrongItem ?  (wrongItem.rejected ? item : wrongItem) : item;

    if (firstOpt.inCart) {
      firstOpt.inCart = false;
      secondOpt.inCart = true;
    } else if (secondOpt.inCart) {
      firstOpt.inCart = true;
      secondOpt.inCart = false;
    }
    this.setState({itemDes: ( !items[index].wrongItem || items[index].wrongItem.rejected ? (items[index].firstOpt.inCart ? items[index].firstOpt.des : items[index].secondOpt.des) :
      (items[index].wrongItem.firstOpt.inCart ? items[index].wrongItem.firstOpt.des : items[index].wrongItem.secondOpt.des))
    });

    this.orderItem(index);
  }

  checkout() {
    this.setState({checkout: true})
  }


  //post-delivery survey
  handleSubmission() {    
    this.setState({submit: true});
    
    const arr = Array.from(this.state.cart).map(([itm, res]) => ({ itm, res }))
    console.log(arr)
    
    this.setState({
      data: {
        cart: arr,
        errcount: this.state.errorcount,
        cartcount: this.state.cartcount
      }
    })
  }

  clearData() {
    this.setState({
      cart: new Map(),
      errorcount: 0,
      cartcount: 0,
    });  
    // console.log(this.state.objId)
    // console.log(this.state.userId)
  }

  handleIncorrectItem() {
    this.setState({incorrectItem: false})
  }

  onChangeValue(e) {
    if (e.target.value === "incorrect") {
      this.setState({incorrectItem: true})
    }

    let res = e.target.value;
    let itm = e.target.name;
    
    this.state.cart.set(itm, res);
    console.log(this.state.cart)
  }

  delivered() {
    this.setState({delivered: true})
  }

  //post-session survey
  completeQuest() {
    console.log("complete")
    this.setState({questComplete: true})
  }


  render() {
    const { itemDes, itemCounter, errorMit, tryAgain, checkout, submit, delivered, questComplete, incorrectItem, itemAdded, showHelp, response, speaking } = this.state;
    const { sess, items, checkpointText } = this.props;
    
    const currTex = (checkpointText && itemCounter < 5 ? checkpointText[0] : checkpointText[1]);
    const isCheckpointTwo = (checkpointText === checkpointTwo ? true : false);
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = sessOrder[1][sess].error;
    const errorAud = sessOrder[1][sess].audio;
    let itm = ''

    if (submit) {
      if (incorrectItem) {
        return ( 
          <div className="body">
            { !isCheckpointTwo ? <div className="cylinder"/> : <div className="gema"/> }
            <p className="mega-speech"> Oops, I'm sorry about that. I can start a return process for the item </p>
            <img className="nextBtn" src={nextBtn} alt="next button" onClick={() => this.handleIncorrectItem()}/>
          </div>
        )
      }
      else {
        if (!questComplete) {
          return <Questionaire completeQuest={this.completeQuest.bind(this)} data={this.state.data} clearData={this.clearData.bind(this)}/>;
        } 
        else {
          return <Walkthrough sess={sess + 1} checkpointText={checkpointTwo} />;
        }
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
                    {item.list && <p className="list-disabled">{item.name}</p>}
                  </div>
                )
              })}
            </div> 
            <div className="survey-wrapper">
            {items && items.map((item, i) => {
              return (
                <div className="survey-item-wrapper" key={i}>
                  <div>
                    <h3>{ itm = (item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
                                (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name)) } </h3>
                    {item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.secondOpt.img} alt=""/>) :
                                                                  (item.added && item.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.secondOpt.img} alt=""/>)}
                  </div>                                                        
                  <div style={{marginBlock: "auto"}} onChange={(this.onChangeValue.bind(this))}>
                    <input type="radio" value="correct" name={itm}/> Correct 
                    <input type="radio" value="incorrect" name={itm}/> Incorrect
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
            <div className="wrapper">
              <div className="list">
                <h3 style={{fontFamily: "cursive"}}> Shopping List </h3>
                {items.map((item, i) => {
                  return (
                    <div key={i}>
                      {!item.added ? ( speaking || response >= 0 ? <p className="list-disabled">{item.name}</p> : <button className="list-item" onClick={() => this.orderItem(i)}> {item.name} </button>)  :
                                    <p className="list-added"> {item.name} </p> }
                    </div>
                  )
                })}
                <audio className="audio-order" src={this.state.itemAudio} onPlay={() => this.speaking()} onEnded={() => this.triggerResponse()}/>
                <audio className="audio-try-again" src={tryAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
                <audio className="audio-confirm" onPlay={() => this.speaking()} onEnded={() => this.maybeErrorMit()}>
                  <source src={confirm}/>
                </audio>
                <audio className="audio-agent-error" onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}>
                  <source src={errorAud}/>
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
            { tryAgain && !errorMit && !itemDes && response ? <p className="mega-speech"> Let's try that again. </p>: null}
            { itemAdded && !tryAgain && !errorMit && !itemDes && response ? <p className="mega-speech"> { confirmItem } </p>: null }
            { errorMit ? <p className="mega-speech"> { errorMitigation } </p> : null}
            { itemDes !== false && !errorMit ? <p className="mega-speech"> { itemDes } </p> : null}
            { response >= 0 && <Response 
                            index={response} 
                            addItem={this.addItem.bind(this)} 
                            exchangeItem={this.exchangeItem.bind(this)} 
                            tryAgain={this.tryAgain.bind(this)}
                          /> }
            {speaking ? <div className="phone-off"/> :
              <Cart 
                items={items}
                removeItem={this.removeItem.bind(this)}
                exchangeItem={this.exchangeItem.bind(this)}
                itemCounter={itemCounter}
                checkout={this.checkout.bind(this)}
                cartcount={this.cartcount.bind(this)}
                speaking={this.state.speaking}
              />
            }
            { (itemCounter >= items.length) ? <button className="purchase" onClick={() => this.checkout()}>  
                                                Proceed to Checkout 
                                              </button> : null }
          </div>            
        </div>
      );
    } else {return;}
  }
}

export default Study;
