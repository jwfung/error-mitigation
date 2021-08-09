import cartOne from "./cartOne";
import cartTwo from "./cartTwo";
import cartThree from "./cartThree";
import cartFour from "./cartFour";
import cartFive from "./cartFive";

import instructions from "./instructionsOne";
import instructionsTwo from "./instructionsTwo";
import instructionsThree from "./instructionsThree";
import instructionsFour from "./instructionsFour";
import instructionsFinal from "./instructionsFinal";

import React  from 'react';

const sessions = [
  {
    list: cartOne,
    text: instructions,
    agent: <div className="cylinder"/>,
  },
  { 
    list: cartTwo,
    text: instructionsTwo,
    agent: <div className="gema"/>,
  },
  {
    list: cartThree,
    text: instructionsThree,
    agent: <div className="cylinder"/>,
  },
  {
    list: cartFour,
    text: instructionsFour,
    agent: <div className="gema"/>,
  },
  {
    list: cartFive,
    text: instructionsFinal,
    agent: <div className="cylinder"/>,
  },
  {
    text: [{top: "Session 5 complete."}]
  }
];

export default sessions;
