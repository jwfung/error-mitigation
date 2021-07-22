import Walkthrough from "./Walkthrough";
import text from "./text/instructionsOne.js";
import checkpointText from "./text/checkpointOne.js";
import cart from "./text/cartOne.js";

const App = () => 
  <div className="App">
    <Walkthrough sess={0} checkpointText={checkpointText}/>
  </div>

export default App;
