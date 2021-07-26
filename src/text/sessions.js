import cartOne from "./cartOne";
import cartTwo from "./cartTwo";
import cartThree from "./cartThree";
import cartFour from "./cartFour";
import cartFive from "./cartFive";

import instructions from "./instructionsOne";
import instructionsTwo from "./instructionsTwo";
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
    text: "",
    agent: <div className="cylinder"/>,
  },
  {
    list: cartFour,
    text: "",
    agent: <div className="cylinder"/>,
  },
  {
    list: cartFive,
    text: instructionsFinal,
    agent: <div className="cylinder"/>,
    error: ""
  }
];

export default sessions;
