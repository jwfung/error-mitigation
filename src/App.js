import Walkthrough from "./Walkthrough";
import text from "./text/instructionsOne.js";
import checkpointText from "./text/checkpointOne.js";
import cart from "./text/cartOne.js";

const App = () => 
  <div className="App">
    <Walkthrough 
      text={text} 
      cart={cart}
      checkpointText={checkpointText}
    />
  </div>

export default App;
