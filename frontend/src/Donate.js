import "./App.css";
import React from "react";
import mdonate from "./assets/audio/mdonate.wav";
import fdonate from "./assets/audio/donate.mp3";

class Donation extends React.Component{
  constructor() {
    super();
    this.state = { 
      other: false,
      donate: null
    }
  }

  componentDidMount() {
    // const audioAgent = document.getElementsByClassName("audio-donate")[0];
    // audioAgent.play();
    console.log("in donate")
  }

  otherDonate() {
    this.setState({other: true})
  }

  donate(e) {
    this.setState({donate: e})
    this.props.checkout(this.state.donate)
  }

  checkout(e) {
    this.props.checkout(this.state.donate)
  }

  render() {
    const { agent, male, onChange, checkout } = this.props;

    return (
      <div style={{marginTop: "10%"}}>
        { agent }
        <audio className="audio-donate">
          <source src={male ? mdonate : fdonate}/>
        </audio>
        <p className="mega-speech" style={{maxHeight: "50px", margin: "15px"}}>Before checking out, would you like to make a donation to a local charity?</p>
        <div className="survey-item-wrapper"> 
          <button className="response" onClick={() => this.donate(5)}>Donate $5</button>
          <button className="response" onClick={() => this.donate(10)}>Donate $10</button>
          <button className="response" onClick={() => this.donate(15)}>Donate $15</button>
          <button className="response" onClick={() => this.donate(20)}>Donate $20</button>
          <button className="response" onClick={() => this.otherDonate()}>Other</button>
          {this.state.other ? <div><input type="number" id="donate" name="donate" min="0" max="120" style={{maxWidth: "30px"}} onChange={this.donate.bind(this)}/></div> : null }
          {this.state.donate !== null && this.state.other ? <button onClick={() => this.checkout(this.state.donate)}>Submit</button> : null}
        </div>
      </div>
    );
  }
}

export default Donation;