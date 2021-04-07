import "./App.css";
import React from "react";

class Speech extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  handleSpeak() {
    {/* Turn Click to Speak off */}
    this.setState({ clickSpeak: !this.state.clickSpeak });
    {/* User is done speaking */}
    if (this.state.clickSpeak) {
      this.setState({ doneSpeak: !this.state.doneSpeak });
    }
  }

  render() {
    const { megaSpeak, clickSpeak, handleSpeak, getNextText } = this.props;
    
    return (
      <div>
        {/* If Mega has something to say and user done speaking */}
        {megaSpeak && doneSpeak ? <p> {megaSpeak}</p> : null}
        {/* If done speaking, move on, otherwise, prepare to speak*/}
        {!megaSpeak || doneSpeak ? (
          <NextButton getNextText={getNextText()} />
        ) : (
          <button id="btn" class="speak" onClick={() => this.handleSpeak()}>
            {!clickSpeak ? "Click to Speak" : "Done speaking"}
          </button>
        )}
      </div>
    );
  }
}

export default Speech;
