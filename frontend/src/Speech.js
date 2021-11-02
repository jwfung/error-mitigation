import "./App.css";
import React from "react";

import nextBtn from "./assets/next.png";
import faudio from "./assets/audio/temp.mp3";
import maudio from "./assets/audio/mweather.wav";


class NextButton extends React.Component{
  render() {
    return (
      <div>
        <img
          src={nextBtn}
          style={{
            width: "90px",
            position: "fixed",
            bottom: "100px",
            right: "100px"
          }}
          onClick={() => this.props.getNextText()}
          alt="next arrow"
        />
      </div>
    );
  }
}

class Speech extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      clickSpeak: false, 
      speaking: false
    }
  }
  
  handleSpeak() {
    this.setState({ speaking: true, clickSpeak: true });
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  doneSpeaking() {
    this.setState({speaking: false})
  }

  getNextText() {
    this.props.getNextText();
    this.setState({clickSpeak: false})

    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
  }

  render() {
    const { megaSpeak } = this.props;
    const { clickSpeak, speaking } = this.state;
    const btnName = "Ask the weather";
    const audio = this.props.male ? maudio : faudio;

    return (
      <div>
        {(!megaSpeak || clickSpeak) && !speaking  ? (
          <NextButton getNextText={() => this.getNextText()} />
        ) : ( clickSpeak ? null :
          <button id="btn" className="speak" onClick={() => this.handleSpeak()}>
            {btnName}
          </button>
        )}
        { clickSpeak && megaSpeak ? <p className="mega-speech"> { megaSpeak } </p>: null }
        <audio className="audio-element" src={audio} onEnded={() => this.doneSpeaking()}/>

      </div>
    );
  }
}

export default Speech;
