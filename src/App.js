import Walkthrough from "./Walkthrough";
import text from "./text/instructionsOne.js";
import instructions from "./text/checkpointOne.js";
import cart from "./text/cartOne.js";

const App = () => 
  <div className="App">
    <Walkthrough 
      text={text} 
      cart={cart}
      instructions={instructions}/>
  </div>

export default App;
