import "./App.css";
import React from "react";
import cartOne from "./text/cartOne.js"

class Item extends React.Component {
  render() {
    const {item} = this.props;

    return (
      <div className="grid">
        {item.img && <img className="col-1-3" src={item.img} alt="img"></img>}
        <div className="col-2-3">
          <h3>{item.name}</h3>
          <p>Quantity: 1</p>
          <button className="inCart">This is Incorrect</button>
        </div>
      </div>
    )
  }
}

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
            <h2>Your Cart</h2>
            {items && items.map((item, i) => {
              if (item.added) {
                return (
                  <div key={i}>
                    <Item item={item}/>
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