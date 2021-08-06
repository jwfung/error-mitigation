import React from "react";
import "./App.css";
import axios from "axios";

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
      required: false
    }
  }

  componentDidUpdate() {
    const { q1, q2, q3, q4, q5, q6, q7 } = this.state;
    
    if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && !this.state.complete) {
      this.setState({complete: true});
    }

    console.log(this.state.complete)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    // e.preventDefault();
    console.log(this.props.objId)

    if (this.state.complete) {  
      const questData = {
        quest: [
          {gender: this.state.gender},
          {age: this.state.age},
          {country: this.state.country},
          {education: this.state.education},
          {major: this.state.major},
          {experience1: this.state.experience1},
          {experience2: this.state.experience2}
        ]
      }
      const { data } = this.props
      let newData = Object.assign(data, questData)
      console.log(newData)

      axios
        .post('https://jeanie.mongo.cosmos.azure.com:443/', newData)
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
            this.props.clearData();
            this.props.completeQuest();
            // this.props.history.push('/');
          })
          .catch(err => {
            console.log(err);
          })
    } else {
      this.setState({required: true})
    }
  }

  render() {
    return(
      <div id="wrapper">
        <h2 class="inlineh">&nbsp;</h2>
        <h2 class="inlineh">How was your personal assistant?</h2>
        <p>Based on your experience with the smart speaker, rate the statements on a scale of 1 to 5 (1=strongly disagree to 5=strongly agree)</p>
        
        <hr />

        <div>
          <h2 className="wrapper">Statement</h2>
          <div className="wrapper">
              <p class="statement">What is your gender?</p>
            <form classname="radio">
              <input id= "gender" type="radio" Value="1" name="gender" onChange={this.onChange.bind(this)}/>Female
              <input type="radio" Value="2" name="gender" onChange={this.onChange.bind(this)}/>Male
              <input type="radio" Value="3" name="gender" onChange={this.onChange.bind(this)}/>Non-binary
              <input type="radio" Value="4" name="gender" onChange={this.onChange.bind(this)}/>Other
              <br />
            </form>
          </div>

          <div className="wrapper">
            <p class="statement">What is your age (years)? </p>
            <div>
                <input type="number" id="age" name="name" min="0" max="120" onChange={this.onChange.bind(this)}/>
                <br />
            </div>
          </div>

          <div className="wrapper">
              <p class="statement">What is your country of residence?</p>
                <div>
                <input type="text" id="country" name="country" minlength="1" maxlength="50" onChange={this.onChange.bind(this)} />
                <br />
            </div>
          </div>

          <div className="wrapper">
                    <p class="statement">What is your highest level of eductaion completed?</p>
                    <br/>
            <div>
                        <input type="radio" Value="1" name="education" onChange={this.onChange.bind(this)} /> Some high school, no diploma <br/>
                        <input type="radio" Value="2" name="education" onChange={this.onChange.bind(this)} /> High school graduate, diploma or the equivalent (for example: GED) <br/>
                        <input type="radio" Value="3" name="education" onChange={this.onChange.bind(this)} /> Some college, no degree <br/>
                        <input type="radio" Value="4" name="education" onChange={this.onChange.bind(this)} /> Trade/technical/vocational training <br/>
                        <input type="radio" Value="5" name="education" onChange={this.onChange.bind(this)} /> Bachelor's degree <br />
                        <input type="radio" Value="6" name="education" onChange={this.onChange.bind(this)} /> Advanced degree (for example: Master's, Professional, or Doctorate degree)
              <br />            
            </div>
            </div>
            <div className="wrapper">
                    <p class="statement">What is your current industry/discipline/major?  </p>
                <div>
                    <input type="text" id="major" name="major" minlength="1" maxlength="50" onChange={this.onChange.bind(this)} />
                    <br />
                </div>
            </div>

          <div className="wrapper">
                    <p class="statement">Rate your level of experience with Artificial Intelligence (AI) technology before this study (e.g., Siri, Alexa, Cortana, Bixby etc.)</p>
                    <br/>
            <div>
              no experience<input type="radio" Value="1" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="2" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="3" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="4" name="experience1" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="5" name="experience1" onChange={this.onChange.bind(this)}/> most experience
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p class="statement">In my opinion, the AI assistant provided a satisfactory response to the error.</p>
                    <br/>
            <div>
              no experience<input type="radio" Value="1" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="2" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="3" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="4" name="experience2" onChange={this.onChange.bind(this)}/>
                        <input type="radio" Value="5" name="experience2" onChange={this.onChange.bind(this)}/> most experience
              <br />            
            </div>
          </div>

          
          
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

export default Questionaire;