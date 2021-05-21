import window from "../assets/cart.png";

const checkpointOne = [
  {
    top: "This is your shopping list",
    mid: "Ask Mega to help you order each item, one by one"
  },
  {
    top:
      "You can check your cart to ensure the correct item has been added.",
    mid: "View your cart by clicking on the phone in the bottom right.",
    bottom: "Otherwise, keep shopping."
  },
  { top: <img className="item next img" src={window} alt="shopping window"/> },
  { 
    top: "Congrats! You've reached Checkpoint #1!",
    mid: "You can check your cart to see the items were correctly added before checking out"
  }

];

export default checkpointOne;