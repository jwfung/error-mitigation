import cartOne from "./cartOne";
import cartTwo from "./cartTwo";
import cartThree from "./cartThree";
import cartFour from "./cartFour";
import cartFive from "./cartFive";

import instructionsTwo from "./instructionsTwo";
import instructionsFinal from "./instructionsFinal";

const sessions = [
  {
    list: cartOne,
    text: '',
    agent: <div className="cylinder"/>,
    error: "Oops, I'm sorry about that. Should we try again? You can try being more specific"
  },
  { 
    list: cartTwo,
    text: instructionsTwo,
    agent: <div className="gema"/>,
    error: "Oops, I'm sorry about that. I found multiple items with the same keyword. Should we try again? You can try being more specific"
  },
  {
    list: cartThree,
    agent: '',
    error: "oops"
  },
  {
    list: cartFour,
    agent: '',
    error: "oops"
  },
  {
    list: cartFive,
    agent: '',
    error: "oops"
  }
];

export default sessions;
