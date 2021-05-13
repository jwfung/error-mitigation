import Walkthrough from "./Walkthrough";
import text from "./text/instructionsOne.js";
import cart from "./text/cartOne.js";

const App = () => 
  <div className="App">
    <Walkthrough text={text} cart={cart}/>
  </div>

export default App;
