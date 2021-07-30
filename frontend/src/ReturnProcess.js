import "./App.css";
import React from "react";
import returnItm from "./assets/audio/return.mp3";

import nextBtn from "./assets/next.png";

class ReturnProcess extends React.Component{
  constructor() {
    super();
    this.state= {
      speaking: true,
      playReturn: true
    }
  }

  componentDidMount() {
    console.log("incorrect item")
    console.log("speak:" + this.state.speaking)

    const audioAgent = document.getElementsByClassName("audio-return")[0];
    audioAgent.play();
  }

  errorMitAudio() {
    const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
    audioAgent.play();

    this.setState({playReturn: false})
  }

  speaking() {
    this.setState({speaking: true})
    console.log("speaking")
  }

  doneSpeaking() {
    this.setState({speaking: false})
    console.log("speaking")
  }

  render() {
    const { errorAud, errorMitigation, agent, finishReturn } = this.props;
    const { speaking } = this.state;

    return (
      <div style={{marginTop: "10%"}}>
        { agent }
        {this.state.playReturn ? <p className="mega-speech"> Oops, I'm sorry about that. I can start a return process for the item </p> :
        <p className="mega-speech"> {errorMitigation} </p>}
        {!speaking && <img className="nextBtn" src={nextBtn} alt="next button" onClick={finishReturn()}/>}
        <audio className="audio-return" src={returnItm} onEnded={() => this.errorMitAudio()}/>
        <audio className="audio-agent-error" src={errorAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
      </div>
    );
  }
}

export default ReturnProcess