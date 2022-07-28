import "./App.css";
import React from "react";

import nextBtn from "./assets/next.png";
import check from "./assets/check.png";
import confirm from "./assets/audio/confirm.mp3";
import mconfirm from "./assets/audio/mconfirm.mp3";
import tryAud from "./assets/audio/tryagain.mp3";
import mtryAud from "./assets/audio/mtryagain.mp3";
import ntryAud from "./assets/audio/ntryagain.mp3";
import frepeat from "./assets/audio/frepeat.mp3";
import mrepeat from "./assets/audio/mrepeat.mp3";
import nrepeat from "./assets/audio/nrepeat.mp3";


import checkpointTwo from "./text/checkpointTwo";
import sessions from "./text/sessions";
import sessOrder from "./text/sess_order";

import Cart from "./Cart.js";
import Walkthrough from "./Walkthrough.js";
import ReturnProcess from "./ReturnProcess.js";

import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, update, push } from "firebase/database";
import firebaseConfig from "./config";
import { element, object } from "prop-types";


class Response extends React.Component {
  render () {
    const { index, male } = this.props;
    return (
      <div className="survey-item-wrapper"> 
        <button className="response" onClick={() => this.props.addItem(index)}>"Yes, add to cart"</button>
        <button className="response" onClick={() => this.props.exchangeItem(index, male)}>"Show me more options"</button>
        <button className="response" onClick={() => this.props.tryAgain(index)}>"No, this is incorrect"</button>
      </div>
    );
  }
}

class Study extends React.Component {
  constructor(props) {
    super(props);
    const firebaseApp = initializeApp(firebaseConfig);

    this.state = { 
      app: firebaseApp,
      itemCounter: 0, 
      errorMit: false, 
      maybeErrorMit: false,
      tryAgain: false,
      checkout: false,
      submit: false, //TODO: Undo for debugging
      delivered: false, //
      questComplete: false,
      itemAdded: false,
      showHelp: false,
      response: -1,
      itemDes: false,
      item: -1,
      speaking: false,
      data: {
        cart: [],
      },
      errcount: 0,
      cartcount: 0,
      cart: [],
      playReturn: true,
      currItem: '',
      cartOrder: [],
      donate: false,
      donation: '',
      goReturn: false
    }
  }

  //ordering
  clickHelp() {
    this.setState({showHelp: !this.state.showHelp})
  }

  speaking() {
    this.setState({speaking: true})
  }

  doneSpeaking() {
    this.setState({speaking: false});
  }

  errorDoneSpeak() {
    this.setState({speaking: false, errorMit: false})
  }

  triggerResponse() {
    this.setState({ response: this.state.item, speaking: false })
  }

  orderItem(index, male) {
    const { items } = this.props;

    this.setState({
      itemDes: ( !items[index].wrongItem || items[index].wrongItem.rejected ? (items[index].firstOpt.inCart ? items[index].firstOpt.des : items[index].secondOpt.des) :
                                                                            (items[index].wrongItem.firstOpt.inCart ? items[index].wrongItem.firstOpt.des : items[index].wrongItem.secondOpt.des) ),
      itemAudio: ( male ? (!items[index].wrongItem || items[index].wrongItem.rejected ? (items[index].firstOpt.inCart ? items[index].firstOpt.maudio : items[index].secondOpt.maudio) :
                              (items[index].wrongItem.firstOpt.inCart ? items[index].wrongItem.firstOpt.maudio : items[index].wrongItem.secondOpt.maudio)) :
                          (!items[index].wrongItem || items[index].wrongItem.rejected ? (items[index].firstOpt.inCart ? items[index].firstOpt.audio : items[index].secondOpt.audio) :
                              (items[index].wrongItem.firstOpt.inCart ? items[index].wrongItem.firstOpt.audio : items[index].wrongItem.secondOpt.audio))),
      errorMit: false,
      tryAgain: false,
      item: index

    }, () => this.orderItemAudio());

  }

  orderItemAudio() {
    const audioAgent = document.getElementsByClassName("audio-order")[0];
    audioAgent.play();
  }

  addItem(index) {
    const { itemCounter, currItem } = this.state;
    const { items } = this.props;
    const item = items[index];
    items[index].added = true

    this.addItemAudio();
    console.log(currItem);

    const curr = item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
    (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name);

    this.state.cart.push(curr)
    this.state.cartOrder.push({item: curr, err: this.state.errcount, cartcnt: this.state.cartcount})

    this.setState({ 
      items, 
      itemCounter: itemCounter + 1, 
      errorMit: false, 
      itemAdded: true,
      response: -1,
      itemDes: false,
      errorcount: 0,
      cartcount: 0,
      currItem: curr
    })
      
    console.log("push" + this.state.cartOrder)
    
  }

  addItemAudio() {
    this.setState({itemAdded: false})
    const audioAgent = document.getElementsByClassName("audio-confirm")[0];
    audioAgent.play();
  }

  removeItem(i) {
    const { itemCounter, errcount } = this.state;
    const { items } = this.props;
    const item = items[i];
    const { wrongItem } = item;

    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
      if (sessOrder[this.props.latinsqr][this.props.sess].audio != null) {
        this.setState({maybeErrorMit: true})
      }
    } 
    item.added = false;
    this.setState({ items, itemCounter: itemCounter - 1, itemDes: false, errcount: errcount + 1});
    this.tryAgain(i);
  }

  tryAgain(i) {
    const { items } = this.props;
    const item = items[i];
    const audioAgent = document.getElementsByClassName("audio-try-again")[0];
    const { wrongItem } = item;
    const { firstOpt, secondOpt } = wrongItem ?  (wrongItem.rejected ? item : wrongItem) : item;


    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
      this.setState({maybeErrorMit: true})
    } 
    if (firstOpt.inCart) {
      firstOpt.inCart = false;
      secondOpt.inCart = true;
    } else if (secondOpt.inCart) {
      firstOpt.inCart = true;
      secondOpt.inCart = false;
    }

    this.setState({
      tryAgain: true,
      itemDes: false,
      items,  
      response: -1, 
      errcount: this.state.errcount + 1
    });
    
    audioAgent.play();
  }

  maybeErrorMit(errorMitigation) {
    const { items } = this.props;
    const { wrongItem } = items[this.state.item];

    if (this.state.maybeErrorMit && wrongItem) {
      this.setState({errorMit: true, maybeErrorMit: false});
      errorMitigation && this.errorMitAudio();
    }
    this.setState({speaking: false})
  }

  errorMitAudio() {
    const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
    audioAgent.play();

    this.setState({playReturn: false})
  }

  errorMitigation(i) {
    const { items } = this.props;
    const item = items[i];

    const { wrongItem } = item;
    if (wrongItem && !wrongItem.rejected) {
      wrongItem.rejected = true;
    } 

    item.err = item.err + 1;
    
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

  goToReturn() {
    this.setState({goReturn: true})
  }

  exchangeItem(index, male) {
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

    this.orderItem(index, male);
  }

  repeatAudio() {
    const audioAgent = document.getElementsByClassName("audio-repeat")[0];
    audioAgent.play();
  }

  //post-delivery survey
  handleSubmission() {   
    console.log("handling submit");

    var filtered = this.state.cartOrder.filter(function(x) {
      return x !== undefined;
    });
    
    console.log(filtered);
    
    this.setState({
      cartOrder: filtered,
    }, () => { 
      this.writeUserData(); 
    });
    this.clearData();
  }

  writeUserData = () => {
    var uuid = this.props.uuid;
    JSON.parse( JSON.stringify(this.state.data));
    const db = getDatabase(this.state.app);

    const sess = this.props.sess;

    const data = {
      cart: this.state.cart,
      cartOrder: this.state.cartOrder,
    }
    
    const updates = {};
    updates['/' + uuid + '/' + sess] = data;
    updates['/' + uuid + '/' + "latinsqr"] = this.props.latinsqr;
    update(ref(db), updates);

    console.log("CART: " + this.state.cart);
    console.log("DATA SAVED");
  }

  clearData() {
    this.setState({
      errorcount: 0,
      cartcount: 0,
    });  
  }

  finishReturn() {
    this.handleSubmission();
    this.setState({submit: true})
  }

  // onChangeValue(e) {
  //   const item = this.props.items[e.target.name];
  //   

  //   let res = e.target.value;
    
  //   this.state.cart.set(itm, res);
  //   console.log(this.state.cart)

  // }

  delivered() {
    console.log("delivered")
    this.setState({delivered: true})
  }

  render() {
    const { itemDes, itemCounter, errorMit, tryAgain, goReturn, submit, delivered, itemAdded, response, speaking } = this.state;
    const { sess, items, checkpointText, latinsqr } = this.props;
    
    const currTex = (checkpointText && itemCounter < 5 ? checkpointText[0] : checkpointText[1]);
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = sessOrder[latinsqr][sess].error; //TODO: change to latinsqr
    const male = sessOrder[latinsqr][sess].male;
    const errorAud = sessOrder[latinsqr][sess].audio;
    const agent = sessions[sess].agent;

    if (submit) {
      console.log("submit")
      return ( 
        <Walkthrough sess={sess + 1} checkpointText={checkpointTwo} latinsqr={latinsqr} uuid={this.props.uuid}/>
      );
    }
    else if (goReturn) {
      return (
        <ReturnProcess
            errorAud={errorAud}
            errorMitigation={errorMitigation}
            agent={agent}
            male={male}
            finishReturn={this.finishReturn.bind(this)}
            errorMit={errorMit}
          />
        );
    }
    else if (delivered) {
      console.log("in delivered")
      return (
        <div>
          <h2>Your order has been placed!</h2>
          <p>If needed, you can ask the assistant to start a return process for any unexpected items.</p>

            {items && items.map((item, i) => {
            if (item.name) {
              return (
                <div className="survey-item-wrapper" key={i}>
                    <h3>{(item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
                                (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name)) } </h3>
                    {item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.secondOpt.img} alt=""/>) :
                                                                  (item.added && item.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.secondOpt.img} alt=""/>)}
                </div>
              )}})}
              <button onClick={()=>this.goToReturn()}>Next</button>
          </div>
        );
       
    }
    //still ordering
    else if (currTex != null) {
      return (
          <div>
            {male ? <h3>Male</h3> : <h3>Female</h3>}
            <div className="wrapper">
              <div className="list">
                <h3 style={{fontFamily: "cursive"}}> Shopping List </h3>
                {items.map((item, i) => {
                  return (
                    <div key={i}>
                      {!item.added ? ( speaking || response >= 0 ? <p className="list-disabled">{item.name}</p> : <button className="list-item" onClick={() => this.orderItem(i, male)}> {item.name} </button>)  :
                                    <p className="list-added"> {item.name} </p> }
                    </div>
                  )
                })}
                <audio className="audio-order" src={this.state.itemAudio} onPlay={() => this.speaking()} onEnded={() => this.triggerResponse()}/>
                <audio className="audio-try-again" src={male ? mtryAud : tryAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
                <audio className="audio-confirm" onPlay={() => this.speaking()} onEnded={() => this.maybeErrorMit(errorMitigation)}>
                  <source src={male ? mconfirm : confirm}/>
                </audio>
                <audio className="audio-agent-error" src={errorAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
              </div>

              <div>
                { sessions[sess].agent }
                { tryAgain && !errorMit && !itemDes && response ? <p className="mega-speech"> Let's try that again. </p>: null}
                { speaking && itemAdded && !tryAgain && !errorMit && !itemDes && response ? <p className="mega-speech"> { confirmItem } </p>: null }
                { speaking && errorMit ? <p className="mega-speech"> { errorMitigation } </p> : null}
                { itemDes !== false && !errorMit ? <p className="mega-speech"> { itemDes } </p> : null}
                { response >= 0 && !speaking &&
                  <Response 
                    index={response} 
                    addItem={this.addItem.bind(this)} 
                    exchangeItem={this.exchangeItem.bind(this)} 
                    tryAgain={this.tryAgain.bind(this)}
                    male={male}
                  /> }
              </div>
            </div>
            
            <div className="wrapper" style={{marginTop: "5%"}}>
              <audio className="audio-repeat" >
                <source src={male ? mrepeat : frepeat}/>
              </audio>
              <div>
                <button onClick={() => this.repeatAudio()}>"Sorry I didn't quite get that.."</button>
              </div>
              <div>
              { speaking ? <div className="phone-off"/> :
                <Cart 
                  items={items}
                  removeItem={this.removeItem.bind(this)}
                  exchangeItem={this.exchangeItem.bind(this)}
                  delivered={this.delivered.bind(this)}
                  itemCounter={itemCounter}
                  cartcount={this.cartcount.bind(this)}
                  speaking={this.state.speaking}
                />
              }
              {/* {!speaking && (itemCounter >= items.length - 1) ?  */}
                <button className="purchase" onClick={() => this.delivered()}>  
                  Proceed to Checkout 
                </button> 
                {/* : null } */}
              </div>
            </div>   
        </div>
       
      );
    } else {return;}
  }
}

export default Study;