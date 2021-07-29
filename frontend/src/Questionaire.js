import React from "react";
import "./App.css";
import axios from "axios";

class Questionaire extends React.Component {
  constructor() {
    super();
    this.state = {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      complete: false,
      required: false
    }
  }

  componentDidUpdate() {
    const { q1, q2, q3, q4 } = this.state;
    
    if (q1 && q2 && q3 && q4 && !this.state.complete) {
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
          {q1: this.state.q1},
          {q2: this.state.q2},
          {q3: this.state.q3},
          {q4: this.state.q4},
        ]
      }
      const { data } = this.props
      let newData = Object.assign(data, questData)
      console.log(newData)

      axios
        .post('http://localhost:8082/api/users', newData)
          .then(res => {
            this.setState({
              q1: '',
              q2: '',
              q3: '',
              q4: '',
            })
            this.props.clearData()
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
        <h2 class="inlineh" >&nbsp;</h2>
        <h2 class="inlineh" >Please fill out the following questionnaire </h2>
        
        <hr />
        <br />
        <h3>Please rate the following statements based on your interaction with AI assistant</h3>

        <div>
          <h2 className="wrapper">Statement</h2>
          <div className="text">
            <label ID="Label3" CssClass="inline" runat="server"  Width="100px" Text="Strongly Agree"  style={{textAlign: "center"}} ></label>
            <label ID="Label4" CssClass="inline" runat="server" Text="" style={{textAlign: "left;"}} Width="75px" ></label>
            <label ID="Label2" CssClass="inline" runat="server"  Width="100px" Text="Neutral"  style={{textAlign: "center"}} ></label>
            <label ID="Label1" CssClass="inline" runat="server" Text="" style={{textAlign: "left;"}} Width="75px" ></label>
            <label ID="Label5" CssClass="inline" runat="server" Text="Strongly Disagree" style={{textAlign: "center"}} Width="100px" ></label>
          </div>

          <div className="wrapper">
              <p class="statement">When the AI assistant disagreed with me, I questioned my assessment of the X-ray(s).</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q1" onChange={this.onChange.bind(this)}/> 
              <input type="radio" Value="5" name="q1" onChange={this.onChange.bind(this)}/> strongly agree
              <br />
            </div>
          </div>

          <div className="wrapper">
            <p class="statement">I felt more confident in my assessment of the X-ray(s) after consulting with the AI assistant.</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q2" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q2" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q2" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q2" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q2" onChange={this.onChange.bind(this)}/> strongly agree
              <br />     
            </div>
          </div>

          <div className="wrapper">
              <p class="statement">The AI assistant helped me identify findings that I originally missed.</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q3" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q3" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q3" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q3" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q3" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p class="statement">I was frustrated and annoyed by the AI assistant.</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q4" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

        </div>
          <br />
          <br />
          {this.state.required && <p style={{color: "red"}}>*Answer all statements before proceeding</p>}
          <br />
          <button className="speak" onClick={() => this.onSubmit()} ID="submitSurvey" runat="server">Submit</button>
      </div>
    );
  }
}

export default Questionaire;