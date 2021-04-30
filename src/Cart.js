import "./App.css";
import React from "react";
import cartOne from "./text/cartOne.js"

class Cart extends React.Component {
  constructor(props) {    
    super(props);

    this.state = { items: cartOne, index: 0, mini :true }
  }

  toggleSidebar() {
    const {mini} = this.state;
    if (mini) {
      document.getElementById("myPhone").style.width = "250px";
      this.setState({mini: false});
    } else {
      document.getElementById("myPhone").style.width = "50px";
      this.setState({ mini: true});
    }
  }

  render() {
    const { items, mini } = this.state;

    return(
      <div
        id="myPhone"
        className="tablet"
        onMouseOver={() => this.toggleSidebar()}
        onClickOut={() => this.toggleSidebar()}>
        {mini === false &&
        <div style={{background: "white", width: "100%", height: "90%"}}>
          <h1>Your Cart</h1>
          {items && items.map((item, i) => {
            if (item.added) {
              return (
                <div key={i}>
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
      }
      </div>
    );
  }
}

export default Cart;