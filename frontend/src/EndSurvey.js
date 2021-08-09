import React from "react";
import "./App.css";
import axios from "axios";

class EndSurvey extends React.Component {
  constructor() {
    super();
    this.state = {
      first: '',
      last: '',
      email: '',
      emailconf: '',
      complete: false,
      required: false
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit() {
    const participant = {
      part: [
        {first: this.state.first},
        {last: this.state.last},
        {email: this.state.email},
        {emailconf: this.state.emailconf},
      ]
    }
    console.log(participant)

    axios
      .post('https://errormit.azurewebsites.net/api/users', participant)
        .then(res => {
          this.setState({
              first: '',
              last: '',
              email: '',
              emailconf: '',
          })
          this.setState({complete: true});
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    if (!this.state.complete) {
      return(
        <div id="wrapper">
          <h2 class="inlineh">&nbsp;</h2>
          <h2 class="inlineh">Thank you for completing the study!</h2>
          <p>Please fill out the following to be compensated for your time</p>
          
          <hr />

          <div>
            <div>
              <form className="end">
                <label>First Name: <input type="text" name="first"/></label>
                <label>Last Name: <input type="text" name="last"/></label>
                <label>Email: <input type="text" name="email"/></label>
                <label>Confirm Email: <input type="text" name="emailconf"/></label>
                <br />
              </form>
              <button className="speak" onClick={() => this.onSubmit()}> Submit </button>
            </div>
            
          </div>
        <br/>
            <br />
            <br />            
        </div>
      );
    }
    return (<div><h2>thank you!</h2></div>);
  }
}

export default EndSurvey;