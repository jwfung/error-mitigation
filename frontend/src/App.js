import Walkthrough from "./Walkthrough";
import checkpointText from "./text/checkpointOne.js";
import React from 'react';
import PreQuestionaire from "./PreQuestionnaire.js";
import Homepage from "./Homepage.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      goToStudy: false,
      continue: false,
      latinsqr: Math.floor( Math.random() * 5 ),
      uuid: '00-0-4-1-000'.replace(/[^-]/g,
            s => ((Math.random() + ~~s) * 0x10000 >> s).toString(16).padStart(4, '0'))
    }
  }

    goToStudy() {
      this.setState({goToStudy: true})
    }

    continue() {
      this.setState({continue: true})
    }

  render () {
    if (!this.state.continue) {
      return (
        <div className="App">
          <Homepage continue={this.continue.bind(this)}/>
        </div>
      )
    }

    if (this.state.goToStudy) {
      return (
        <div className="App">
          {console.log(this.state.uuid)}
          <Walkthrough sess={0} checkpointText={checkpointText} latinsqr={this.state.latinsqr} uuid={11111}/>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <PreQuestionaire uuid={this.state.uuid} goToStudy={this.goToStudy.bind(this)}/>
        </div>);
    }
  }
}

export default App;
