import React from "react";

const instructions = [
  {
    header: "Instructions:",
    top: "In this study, you will be interacting with a story sequence.",
    mid: "Use the arrow button at the bottom of the screen to proceed through each stage of the story."
  },
  {
    agent: true,
    top: "This is a personal assistant. It can respond to basic commands.",
    mid: "Try asking it what the weather is.",
    speak: "It is currently 59 degrees Fahrenheit."
  },
  {
    top: "The SmartShop Company has been working on developing different personal assistants.",
    mid: "You have been tasked with helping them test out 5 of their beta assistants."
  },
  {
    mega: true,
    header: "Meet Mega",
    top: "Mega is our first assistant. It was developed by Team1 and can help you order items online.",
    mid: "You can check your cart before placing your order, or place the order directly."
  },
  {
    top: <p>You will be using Mega to <strong>order some items for a party.</strong></p>,
    mid: "Click to arrow button to see what you need, and proceed with Session #1."
  },
  {
    top: <p>"Hello, I need some help preparing for a party. I need some <strong>party hats</strong> for our guests, a <strong>brownies mix</strong> to make some brownies, and <strong>balloons</strong> for decorations. Any kind will do. I also need a <strong>bow</strong> to wrap my presents. Oh! And dont forget the <strong>plastic cups!</strong>"</p>
  }
];

export default instructions;