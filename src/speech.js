import "./App.css";
import React from "react";

//import cartOne from "./text/cartOne.js";
//import speaking from "./assets/3.gif";
import nextBtn from "./assets/next.png";

// const textToSpeech = require('@google-cloud/text-to-speech');
// const fs = require('fs');
// const util = require('util');
// const client = new textToSpeech.TextToSpeechClient();

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

// const confirmItem = "Got it! Item has been added to your cart";

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

  componentDidUpdate() {
    /*const {addItem, clickSpeak, itemCounter} = this.state;
    if (addItem === true) {
      console.log(addItem);
      this.setState({itemCounter: itemCounter + 1});
      this.setState({ addItem: !this.state.addItem });
      console.log(itemCounter)
      return (
        <div className="counter"> 
          <p> { this.state.itemCounter } </p> 
        </div>);
      }
    if (clickSpeak) {
      return (<img src={speaking} alt="speaking"/>)
    }*/
  }
/*
  async megaSpeech() {
    // The text to synthesize
    const text = 'hello, world!';
  
    // Construct the request
    const request = {
      input: {text: text},
      // Select the language and SSML voice gender (optional)
      voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
      // select the type of audio encoding
      audioConfig: {audioEncoding: 'MP3'},
    };
  
    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
  }*/

  handleSpeak() {
    const { addItem } = this.props
    if (addItem) {
      addItem();
    }
    this.setState({ clickSpeak: true });
    // this.megaSpeech();
    // document.getElementsByName("cylinder").style.animation = "speaking";
  }

  getNextText() {
    this.props.getNextText();
    this.setState({ clickSpeak: false });
  }

  render() {
    const { megaSpeak, isCheckpointTwo } = this.props;
    const { clickSpeak } = this.state;
    const btnName = (!isCheckpointTwo ? "Ask Mega" : "Ask Gema" )

    return (
      <div>
        {!megaSpeak || clickSpeak ? (
          <NextButton getNextText={() => this.getNextText()} />
        ) : (
          <button id="btn" className="speak" onClick={() => this.handleSpeak()}>
            {btnName}
          </button>
        )}
        { clickSpeak && megaSpeak ? <p> <i> { megaSpeak } </i> </p>: null }
      </div>
    );
  }
}

export default Speech;
