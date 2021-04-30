import "./App.css";
import React from "react";
import cartOne from "./text/cartOne.js"

class Cart extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { items: cartOne, index: 0, deviceOpened: false}
  }

  openDevice() {
    this.setState({deviceOpened: true}) //might not be necessary
    document.getElementById("myDevice").style.display = "block";
    document.getElementById("phone").style.display = "none";
  }

  closeDevice() {
    this.setState({deviceOpened: false})
    document.getElementById("myDevice").style.display = "none";
    document.getElementById("phone").style.display = "block";
  }

  render() {
    const { items } = this.state;
    var modal = document.getElementById("myDevice");

    window.onclick = function(event) {
      if (event.target === modal) {
        document.getElementById("myDevice").style.display = "none";
        document.getElementById("phone").style.display = "block";
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
        <div id="phone" className="phone" onClick = {() => this.openDevice()}/>
      </div>
    );
  }
}

export default Cart;