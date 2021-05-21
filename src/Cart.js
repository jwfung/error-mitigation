import "./App.css";
import React from "react";
import Walkthrough from "./Walkthrough.js"
import cartTwo from "./text/cartTwo.js"

class Item extends React.Component {
  handleRemove(index) {
    this.props.removeItem(index);
    this.props.closeDevice();
  }

  render() {
    const { item, index } = this.props;
    const { wrongItem } = item;

    return (
      <div className="grid">
        {item.img && <img style={{textAlign: "left"}} src={item.img} alt="item"></img>}
        <div className="col-2-3">
          <h3>{wrongItem && !wrongItem.rejected ? wrongItem.name : item.name}</h3>
          <p>Quantity: 1</p>
          <button className="inCart" onClick={() => this.handleRemove(index)}>Item is incorrect</button>
        </div>
      </div>
    )
  }
}

class Cart extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { index: 0, deviceOpened: false}
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
    const { items, removeItem, itemCounter, checkout } = this.props;
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
            <div className="device-header">
              <span className="close" onClick={() => this.closeDevice()}>&times;</span>
            </div>
            <div className="device-screen">
              <h2>Your Cart</h2>
              {items && items.map((item, i) => {
                return (
                  <div key={i}>
                    {item.added && <Item item={item} removeItem={removeItem} index={i} closeDevice={this.closeDevice.bind(this)}/>}
                  </div>
                )
              })}
              {itemCounter === items.length ? <button onClick={() => checkout()}> Proceed to Checkout </button> : null}
            </div>
          </div>
        </div>
        <div id="phone" className="phone" onClick = {() => this.openDevice()}/>
      </div>
    );
  }
}

export default Cart;