import React from "react";
import "./App.css";
import axios from "axios";
import EndSurvey from "./EndSurvey.js";

class Demographics extends React.Component {
  constructor() {
    super();
    this.state = {
      gender: '',
      age: '',
      country: '',
      education: '',
      major: '',
      experience1: '',
      experience2: '',
      complete: false,
      required: false,
      endSurvey: false
    }
  }

  componentDidUpdate() {
    const { gender, age, country, education, major, experience1, experience2 } = this.state;
    
    if (gender && age && country && education && major && experience1 && experience2 && !this.state.complete) {
      this.setState({complete: true});
    }

    console.log(this.state.complete)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  endSurvey() {
    this.setState({endSurvey: true})
  }

  onSubmit(e) {
    const data = {
        demo: [
          {gender: this.state.gender},
          {age: this.state.age},
          {country: this.state.country},
          {education: this.state.education},
          {major: this.state.major},
          {experience1: this.state.experience1},
          {experience2: this.state.experience2}
        ],
        uuid: this.props.uuid
      }
      console.log(data)

    if (this.state.complete) {  
      

      axios
        .post('https://errormit.azurewebsites.net/api/users', data)
          .then(res => {
            this.setState({
                gender: '',
                age: '',
                country: '',
                education: '',
                major: '',
                experience1: '',
                experience2: ''
            })
            this.endSurvey();
          })
          .catch(err => {
            console.log(err);
          })
    } else {
      this.setState({required: true})
    }
  }

  render() {
    if (this.state.endSurvey) {
      return (<EndSurvey/>);
    }
    return(
      <div id="wrapper">
        <h2 class="inlineh">&nbsp;</h2>
        <h2 class="inlineh">Post Study Questionaire</h2>        
        <hr />

        <div>
              <p className="statement">What is your gender?</p>
            <div>
              <input id= "gender" type="radio" value="1" name="gender" onChange={this.onChange.bind(this)}/>Female
              <input type="radio" value="2" name="gender" onChange={this.onChange.bind(this)}/>Male
              <input type="radio" value="3" name="gender" onChange={this.onChange.bind(this)}/>Non-binary
              <input type="radio" value="4" name="gender" onChange={this.onChange.bind(this)}/>Other
              <br />
            </div>
            

              <label className="wrapper" style={{textAlign: "left", marginLeft: "15%"}}>What is your age (years)?
                <input type="number" id="age" name="age" min="0" max="120" style={{maxWidth: "30px"}} onChange={this.onChange.bind(this)}/>
              </label>
              <br />

  
              <label className="wrapper" style={{textAlign: "left", marginLeft: "15%"}}>What is your country of residence?
                <input type="text" id="country" name="country" minlength="1" maxlength="50" style={{maxWidth: "300px"}} onChange={this.onChange.bind(this)} />
              </label>
              <br />


              <p className="statement">What is your highest level of eductaion completed?</p>
              <br/>
              <div style={{textAlign: "left", marginLeft: "15%"}}>
                        <input type="radio" value="1" name="education" onChange={this.onChange.bind(this)} /> Some high school, no diploma <br/>
                        <input type="radio" value="2" name="education" onChange={this.onChange.bind(this)} /> High school graduate, diploma or the equivalent (for example: GED) <br/>
                        <input type="radio" value="3" name="education" onChange={this.onChange.bind(this)} /> Some college, no degree <br/>
                        <input type="radio" value="4" name="education" onChange={this.onChange.bind(this)} /> Trade/technical/vocational training <br/>
                        <input type="radio" value="5" name="education" onChange={this.onChange.bind(this)} /> Bachelor's degree <br />
                        <input type="radio" value="6" name="education" onChange={this.onChange.bind(this)} /> Advanced degree (for example: Master's, Professional, or Doctorate degree)
                <br />            
              </div>
                    
              <label className="wrapper" style={{textAlign: "left", marginLeft: "15%"}}>What is your current industry/discipline/major? 
                <input type="text" id="major" name="major" minlength="1" maxlength="50" style={{maxWidth: "300px"}} onChange={this.onChange.bind(this)} /> 
              </label>
              <br />

            <p className="statement">Rate your level of experience with Artificial Intelligence (AI) technology before this study (e.g., Siri, Alexa, Cortana, Bixby etc.)</p>
            <br/>
            <div>
              no experience<input type="radio" value="1" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="2" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="3" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="4" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="5" name="experience1" onChange={this.onChange.bind(this)}/> most experience
              <br />            
            </div>


          {/* <div className="wrapper"> */}
            <p className="statement">In my opinion, the AI assistant provided a satisfactory response to the error.</p>
                    <br/>
            <div>
              no experience<input type="radio" value="1" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="2" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="3" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="4" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" value="5" name="experience2" onChange={this.onChange.bind(this)}/> most experience
              <br />            
            </div>
          {/* </div> */}

          
          
        </div>
      <br/>
        

          {this.state.required && <p style={{color: "red"}}>*Answer all statements before proceeding</p>}
          <button className="speak" onClick={() => this.onSubmit()} ID="submitSurvey" runat="server">Submit</button>
          <br />
          <br />            
      </div>
    );
  }
}

export default Demographics;