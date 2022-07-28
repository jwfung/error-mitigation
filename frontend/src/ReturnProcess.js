import "./App.css";
import React from "react";
import returnItm from "./assets/audio/return.mp3";
import nreturnItm from "./assets/audio/nreturn.mp3";
//TODO need neutral
import mreturnItm from "./assets/audio/mreturn.mp3";

import nextBtn from "./assets/next.png";

class ReturnProcess extends React.Component{
  constructor() {
    super();
    this.state= {
      speaking: false,
      playReturn: false,
      next: false
    }
  }

  startReturn() {
    this.setState({playReturn: true, speaking: true})
    const audioAgent = document.getElementsByClassName("audio-return")[0];
    audioAgent.play();
  }

  errorMitAudio() {
    if (this.props.errorMitigation) {
      const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
      audioAgent.play();
    }

    this.setState({playReturn: false})
  }

  speaking() {
    this.setState({speaking: true})
  }

  doneSpeaking() {
    this.setState({speaking: false})
  }

  render() {
    const { errorAud, errorMitigation, agent, finishReturn, male, neutral } = this.props;
    const { speaking } = this.state;
    const returnAud = male ? mreturnItm : (neutral ? nreturnItm : returnItm);

    return (
      <div style={{marginTop: "10%"}}>
        { agent }
        {this.state.playReturn || speaking? (<div> <p className="mega-speech"> Okay, I can start a return process for the item </p> 
          <p className="mega-speech"> {errorMitigation} </p> </div>) : <img className="nextBtn" src={nextBtn} alt="next button" onClick={() => finishReturn()}/>}
        {!speaking && <img className="nextBtn" src={nextBtn} alt="next button" onClick={() => finishReturn()}/>}
        <audio className="audio-return" src={returnAud} onEnded={() => this.errorMitAudio()}/>
        <audio className="audio-agent-error" src={errorAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
        <button onClick={() => this.startReturn()}>Start Return Process</button>
      </div>
    );
  }
}

export default ReturnProcess;