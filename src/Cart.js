import "./App.css";
import React from "react";
import cartOne from "./text/cartOne.js"

class Cart extends React.Component {
  constructor(props) {    
    super(props);

    this.state = { items: {cartOne}, index: 0}
  }


  render() {
    const { items } = this.state;

    return(
      <div>
        {items.map((item) => {
          if (item.added) {
            return (
              <div>
                <p>
                  {item.img && <img src={item.img} alt="img"></img>}
                  {item.name}
                </p>
              </div>
            )
          }
          return <></>
        })}
      </div>

    );
  }
}

export default Cart;