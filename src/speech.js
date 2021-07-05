import "./App.css";
import React from "react";

import nextBtn from "./assets/next.png";
import audio from "./assets/temp.mp3";


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
      itemCounter: 0,
      //addItem: false,
      //index: 0,
      //items: cartOne
    }
  }

  
  handleSpeak() {
    this.setState({ clickSpeak: true });
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  getNextText() {
    this.props.getNextText();
    this.setState({ clickSpeak: false });
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
  }

  render() {
    const { megaSpeak, errorMit } = this.props;
    const { clickSpeak } = this.state;
    const btnName = "Ask the weather";

    return (
      <div>
        {(!megaSpeak || clickSpeak) && !errorMit ? (
          <NextButton getNextText={() => this.getNextText()} />
        ) : (
          <button id="btn" className="speak" onClick={() => this.handleSpeak()}>
            {btnName}
          </button>
        )}
        { clickSpeak && megaSpeak && !errorMit ? <p className="mega-speech"> { megaSpeak } </p>: null }
        <audio className="audio-element">
          <source src={audio}></source>
        </audio>
      </div>
    );
  }
}

export default Speech;
