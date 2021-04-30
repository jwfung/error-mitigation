import "./App.css";
import React from "react";
import cartOne from "./text/cartOne.js"

class Cart extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { items: cartOne, index: 0, deviceOpened: false}
  }

  openDevice() {
    document.getElementById("myDevice").style.display = "block";
    this.setState({deviceOpened: true})
  }

  closeDevice() {
    document.getElementById("myDevice").style.display = "none";
    this.setState({deviceOpened: false})
  }

  render() {
    const { items } = this.state;
    var modal = document.getElementById("myDevice");

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }

    return(
      <div> 
        <div id="myDevice" className="device">
          <div className="device-content">
            <div class="device-header">
              <span className="close" onClick={() => this.closeDevice()}>&times;</span>
            </div>
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
        </div>
        <button className="speak" onClick={() => this.openDevice()}>
          View Cart
        </button>
      </div>
    );
  }
}

export default Cart;