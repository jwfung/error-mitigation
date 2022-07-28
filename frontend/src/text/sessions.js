import cartOne from "./cartOne";
import cartTwo from "./cartTwo";
import cartFour from "./cartFour";
import cartFive from "./cartFive";
import cartThree from "./cartThree";
import cartSix from "./cartSix";

import instructions from "./instructionsOne";
import instructionsTwo from "./instructionsTwo";
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
  },{ 
    list: cartThree,
    text: instructionsTwo,
    agent: <div className="gema"/>,
  },
  {
    list: cartFour,
    text: instructionsFour,
    agent: <div className="cylinder"/>,
  },
  {
    list: cartFive,
    text: instructionsFinal,
    agent: <div className="gema"/>,
  },

  {
    list: cartSix,
    text: instructionsFinal,
    agent: <div className="gema"/>,
  },
  {
    text: [{top: "Session 4 complete."}]
  }
];

export default sessions;
