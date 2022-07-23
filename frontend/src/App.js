import Walkthrough from "./Walkthrough";
import checkpointText from "./text/checkpointOne.js";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      goToStudy: false, //undo
      latinsqr: "",
      uuid: '00-0-4-1-000'.replace(/[^-]/g,
            s => ((Math.random() + ~~s) * 0x10000 >> s).toString(16).padStart(4, '0'))
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

    goToStudy() {
      this.setState({goToStudy: true})
      console.log(this.state.latinsqr)
    }

    onChangeValue(e) {
      this.setState({latinsqr: e.target.value})
    }


  render () {
    if (this.state.goToStudy) {
      return (
        <div className="App">
          {console.log(this.state.uuid)}
          <Walkthrough sess={0} checkpointText={checkpointText} latinsqr={this.state.latinsqr} uuid={this.state.uuid}/>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <h4>Select Latinsquare model</h4>
          <div onChange={this.onChangeValue}>
            <input type="radio" id="0" value="0" name="latinsqr"/>
            <label for="0">0: f-serious, f-cas, m-serious, m-cas</label>
            <br/>

            <input type="radio" id="1" value="1" name="latinsqr"/>
            <label for="1">1: f-cas, m-serious, m-cas, f-serious</label>
            <br/>

            <input type="radio" id="2" value="2" name="latinsqr"/>
            <label for="2">2: m-serious, m-cas, f-serious, f-cas</label>
            <br/>

            <input type="radio" id="3" value="3" name="latinsqr"/>
            <label for="3">3: m-cas, f-serious, f-cas, m-serious</label>
            <br/>

          </div>
          {this.state.latinsqr == "" ? null :<button onClick={() =>this.goToStudy()}>Continue</button>}

        </div>);
    }
  }
}

export default App;
