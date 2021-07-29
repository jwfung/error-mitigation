import Walkthrough from "./Walkthrough";
import checkpointText from "./text/checkpointOne.js";
import React from 'react';

class App extends React.Component { 

  render () {
    return (
      <div className="App">
        <Walkthrough sess={0} checkpointText={checkpointText}/>
      </div>
    );
  }
}

export default App;
