import Walkthrough from "./Walkthrough";
import checkpointText from "./text/checkpointOne.js";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      latinsqr: Math.floor( Math.random() * 5 ) + 1
    }
  }

  render () {
    return (
      <div className="App">
        <Walkthrough sess={0} checkpointText={checkpointText} latinsqr={this.state.latinsqr}/>
      </div>
    );
  }
}

export default App;
