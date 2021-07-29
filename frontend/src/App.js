import Walkthrough from "./Walkthrough";
import checkpointText from "./text/checkpointOne.js";
import React from 'react';

class App extends React.Component { 
  // constructor() {
  //   super();
  //   this.state = {
  //     userId: '',
  //     sess: this.state.userId % 5
  //   }
  // }
  // componentDidMount() {
  //   console.log(sess)
  //   axios
  //     .get('http://localhost:8082/api/users'+)
  //       .then(res => {
  //         this.setState({
  //           userId: res.data.id
  //         })
  //         // this.props.history.push('/');
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
  // }

  render () {
    return (
      <div className="App">
        <Walkthrough sess={0} checkpointText={checkpointText}/>
      </div>
    );
  }
}

export default App;
