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
import ReturnProcess from "./ReturnProcess.js"

class Response extends React.Component {
  render () {
    const { index } = this.props;
    return (
      <div className="survey-item-wrapper"> 
        <button className="response" onClick={() => this.props.addItem(index)}>"Yes, add to cart"</button>
        <button className="response" onClick={() => this.props.exchangeItem(index)}>"Yes, but show me more options"</button>
        <button className="response" onClick={() => this.props.tryAgain(index)}>"No, that is not what I wanted"</button>
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
      submit: false, //TODO: Undo for debugging
      delivered: false, //
      questComplete: false,
      incorrectItem: false, //undo
      itemAudio: '',
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
      cart: new Map(),
      playReturn: true,
      currItem: '',
      cartOrder: []
    }
  }

  //ordering
  clickHelp() {
    this.setState({showHelp: !this.state.showHelp})
  }

  speaking() {
    console.log("speaking")
    this.setState({speaking: true})
  }

  doneSpeaking() {
    console.log("done speaking")
    // if (this.state.errorMit && (errorAud2 != null)) {
    //   this.errorPlayTwo();
    // } 
    this.setState({speaking: false});
  }

  errorDoneSpeak() {
    this.setState({speaking: false, errorMit: false})
  }

  // errorPlayTwo() {
  //   const audioAgent = document.getElementsByClassName("audio-agent-error2")[0];
  //   audioAgent.play();
  // }

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
    const { itemCounter, currItem } = this.state;
    const { items } = this.props;
    items[index].added = true

    this.addItemAudio();

    if (!currItem) {
      this.setState({
        items,
        itemCounter: itemCounter + 1, 
        errorMit: false, 
        itemAdded: true,
        response: -1,
        itemDes: false,
        currItem: items[index].name,
      });
    }
    else {
      this.state.cartOrder.push({item: currItem, err: this.state.errcount, cartcnt: this.state.cartcount},
      this.setState({ 
        items, 
        itemCounter: itemCounter + 1, 
        errorMit: false, 
        itemAdded: true,
        response: -1,
        itemDes: false,
        errorcount: 0,
        cartcount: 0,
        currItem: items[index].name
      }, console.log(this.state.cartOrder))
      )
    }
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

  maybeErrorMit() {
    const { items } = this.props;
    const { wrongItem } = items[this.state.item];

    if (this.state.maybeErrorMit && wrongItem) {
      this.setState({errorMit: true, maybeErrorMit: false});
      this.props.errorMitigation && this.errorMitAudio();
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
    this.state.cartOrder.push({item: this.state.currItem, err: this.state.errcount, cartcnt: this.state.cartcount},     
      this.setState({checkout: true})
    )
  }


  //post-delivery survey
  handleSubmission() {    
    this.setState({submit: true});
    
    const arr = Array.from(this.state.cart).map(([itm, res]) => ({ itm, res }))
    console.log(arr)
    console.log(this.props.sess)
    console.log(this.props.latinsqr)
    
    this.setState({
      data: {
        cart: arr,
        cartOrder: this.state.cartOrder,
        latinsqr: this.props.latinsqr,
        sess: this.props.sess
      }
    })
  }

  clearData() {
    this.setState({
      cart: new Map(),
      errorcount: 0,
      cartcount: 0,
    });  
  }

  finishReturn() {
    console.log("finished");
    this.setState({incorrectItem: false})
  }

  onChangeValue(e) {
    const item = this.props.items[e.target.name];
    const {wrongItem} = item;
    const itm = item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
                                (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name)

    if (e.target.value === "incorrect") {
      this.setState({incorrectItem: true})
      if (wrongItem && !wrongItem.rejected) {
        this.setState({errorMit: true})
      }
    }

    let res = e.target.value;
    
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
    const { sess, items, checkpointText, latinsqr } = this.props;
    
    const currTex = (checkpointText && itemCounter < 5 ? checkpointText[0] : checkpointText[1]);
    const confirmItem = "Got it! Item has been added to your cart";
    const errorMitigation = sessOrder[0][sess].error; //TODO: change to latinsqr
    const errorAud = sessOrder[0][sess].audio;
    // const errorAud2 = sessOrder[latinsqr][sess].audio2;
    const agent = sessions[sess].agent;
    // let itm;

    if (submit) {
      console.log(incorrectItem)
      if (incorrectItem) {
        return ( 
          <ReturnProcess
            errorAud={errorAud}
            errorMitigation={errorMitigation}
            agent={agent}
            finishReturn={this.finishReturn.bind(this)}
            errorMit={errorMit}
          />
        );
      }
      else {
        if (!questComplete) {
          return (
            // <Survey/>);
            <Questionaire 
              completeQuest={this.completeQuest.bind(this)} 
              data={this.state.data} 
              clearData={this.clearData.bind(this)}
            />);
        } 
        else {
          return <Walkthrough sess={sess + 1} checkpointText={checkpointTwo} latinsqr={latinsqr}/>;
        }
      }
    }

    else if (delivered) {
      return (
        <div>
          <h2>Your items have arrived!</h2>
          <p>You can put the item away, or ask the assistant to start a return process for any unexpected items.</p>
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
                    <h3>{(item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
                                (item.added && item.firstOpt.inCart ? item.firstOpt.name : item.secondOpt.name)) } </h3>
                    {item.wrongItem && !item.wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.secondOpt.img} alt=""/>) :
                                                                  (item.added && item.firstOpt.inCart ? 
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.firstOpt.img} alt=""/> :
                                                                    <img style={{textAlign: "left", maxHeight: "100px"}} src={item.secondOpt.img} alt=""/>)}
                  </div>                                                        
                  <form style={{marginBlock: "auto"}} onChange={(this.onChangeValue.bind(this))}>
                    <input type="radio" id="correct" value="correct" name={i}/>   
                    <label for="correct">Put Item Away</label><br/>
                    <input type="radio" id="incorrect" value="incorrect" name={i}/> 
                    <label for="incorrect">Return Item</label><br/>
                  </form>
                </div>
              );
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
                <audio className="audio-agent-error" src={errorAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
                {/* {errorAud2 && <audio className="audio-agent-error2" src={errorAud2} onPlay={() => this.speaking()} onEnded={() => this.errorDoneSpeak()}/>} */}
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
            { speaking && itemAdded && !tryAgain && !errorMit && !itemDes && response ? <p className="mega-speech"> { confirmItem } </p>: null }
            { speaking && errorMit ? <p className="mega-speech"> { errorMitigation } </p> : null}
            { itemDes !== false && !errorMit ? <p className="mega-speech"> { itemDes } </p> : null}
            {console.log(response)}
            { response >= 0 && !speaking &&
              <Response 
                index={response} 
                addItem={this.addItem.bind(this)} 
                exchangeItem={this.exchangeItem.bind(this)} 
                tryAgain={this.tryAgain.bind(this)}
              /> }
            { speaking ? <div className="phone-off"/> :
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
            {!speaking && (itemCounter >= items.length) ? 
              <button className="purchase" onClick={() => this.checkout()}>  
                Proceed to Checkout 
              </button> : null }
          </div>            
        </div>
      );
    } else {return;}
  }
}

export default Study;