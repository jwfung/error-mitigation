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
    const audioAgent = document.getElementsByClassName("audio-return")[0];
    audioAgent.play();
  }

  errorMitAudio() {
    if (this.props.errorMit && this.props.errorMitigation) {
      const audioAgent = document.getElementsByClassName("audio-agent-error")[0];
      audioAgent.play();
    }

    if (!this.props.errorMitigation) {
      this.setState({speaking: false})
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
    const { errorAud, errorMitigation, agent, finishReturn, errorMit } = this.props;
    const { speaking } = this.state;

    return (
      <div style={{marginTop: "10%"}}>
        { agent }
        {this.state.playReturn ? <p className="mega-speech"> Okay, I can start a return process for the item </p> :
        (errorMit ? <p className="mega-speech"> {errorMitigation} </p> : <img className="nextBtn" src={nextBtn} alt="next button" onClick={finishReturn()}/>)}
        {!speaking && <img className="nextBtn" src={nextBtn} alt="next button" onClick={finishReturn()}/>}
        <audio className="audio-return" src={returnItm} onEnded={() => this.errorMitAudio()}/>
        <audio className="audio-agent-error" src={errorAud} onPlay={() => this.speaking()} onEnded={() => this.doneSpeaking()}/>
      </div>
    );
  }
}

export default ReturnProcess;