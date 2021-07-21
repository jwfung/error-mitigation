import "./App.css";
import React from "react";

class Item extends React.Component {
  handleRemove(index) {
    this.props.removeItem(index);
    this.props.closeDevice();
  }

  moreOptions(index) {
    this.props.exchangeItem(index);
    this.props.closeDevice();
  }

  render() {
    const { item, index } = this.props;
    const { wrongItem, firstOpt, secondOpt } = item;

    return (
      <div className="wrapper">
        {wrongItem && !wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? 
                                              <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.firstOpt.img} alt=""/> :
                                              <img style={{textAlign: "left", maxHeight: "100px"}} src={item.wrongItem.secondOpt.img} alt=""/>) :
                                            (firstOpt && firstOpt.inCart ? 
                                              <img style={{textAlign: "left", maxHeight: "100px"}} src={firstOpt.img} alt=""/> :
                                              <img style={{textAlign: "left", maxHeight: "100px"}} src={secondOpt.img} alt=""/>) }
        <div>
          <h3> {wrongItem && !wrongItem.rejected ? (item.wrongItem.firstOpt.inCart ? item.wrongItem.firstOpt.name : item.wrongItem.secondOpt.name) : 
                                                    (firstOpt && firstOpt.inCart ? firstOpt.name : secondOpt.name)} </h3>
          <button className="inCart" onClick={() => this.moreOptions(index)}>More Options</button>
          <button className="inCart" onClick={() => this.handleRemove(index)}>Remove Item</button>
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
    const { items, removeItem, exchangeItem, itemCounter, checkout } = this.props;
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
                    {item.added && 
                      <Item item={item} removeItem={removeItem} exchangeItem={exchangeItem} index={i} closeDevice={this.closeDevice.bind(this)}/>}
                  </div>
                )
              })}
              {itemCounter === items.length ? <button className="purchase" onClick={() => checkout()}> Proceed to Checkout </button> : null}
            </div>
            <div className="device-footer"/>
          </div>
        </div>
        <div id="phone" className="phone" onClick={() => this.openDevice()}/>
      </div>
    );
  }
}

export default Cart;