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

  onSubmit(e) {
    const participant = {
      part: [
        {first: this.state.first},
        {last: this.state.last},
        {email: this.state.email},
        {emailconf: this.state.emailconf},
      ]
    }

    axios
      .post('https://errormit.azurewebsites.net/api/users', participant)
        .then(res => {
          this.setState({
              first: '',
              last: '',
              email: '',
              emailconf: '',
          })
          return (<h2>Thank you!</h2>);
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    return(
      <div id="wrapper">
        <h2 class="inlineh">&nbsp;</h2>
        <h2 class="inlineh">Thank you for completing the study!</h2>
        <p>Please fill out the following to be compensated for your time</p>
        
        <hr />

        <div>
          <div>
            <form className="end" onSubmit={() => this.onSubmit.bind(this)}>
              <label>First Name: <input type="text" name="first"/></label>
              <label>Last Name: <input type="text" name="last"/></label>
              <label>Email: <input type="text" name="email"/></label>
              <label>Confirm Email: <input type="text" name="emailconf"/></label>
              <br />
              <input type="submit" value="submit"/>
            </form>
          </div>
          
        </div>
      <br/>

          {/* {this.state.required && <p style={{color: "red"}}>*Answer all statements before proceeding</p>} */}
          <br />
          <br />            
      </div>
    );
  }
}

export default EndSurvey;