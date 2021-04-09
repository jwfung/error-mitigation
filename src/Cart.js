import "./App.css";
import React from "react";

import battery from "./assets/batteries.jpg";
import dogFood from "./assets/dog_food.jpg";

class Cart extends React.Component {
  constructor(props) {    
    super(props);

    const items = [
      {
        img: { battery },
        name: "AA Batteries",
        added: false
      },
      {
        img: { dogFood },
        name:"Dog Food",
        added: false
      },
      {
        name: "Bouquet of Flowers",
        added: false
      },
      {
        name: "13 Gallons Trash Bags",
        added: false
      }
    ]

    this.state = { items, index: 0}
  }

  addItem() {
    const { index, items } = this.state;
    items[index].added = true
    this.setState({ index: index + 1, items });
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