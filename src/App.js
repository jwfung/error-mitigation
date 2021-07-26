import Walkthrough from "./Walkthrough";
import checkpointText from "./text/checkpointOne.js";
import React from 'react';

const App = () => 
  <div className="App">
    <Walkthrough sess={0} checkpointText={checkpointText}/>
  </div>

export default App;
