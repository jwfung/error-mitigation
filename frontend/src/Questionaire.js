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
      q5: '',
      q6: '',
      q7: '',
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
              q5: '',
              q6: '',
              q7: ''
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
        <h2 class="inlineh" >&nbsp;</h2>
        <h2 class="inlineh" >Please rate the following statements based on your interaction with the AI assistant </h2>
        
        <hr />

        <div>
          <h2 className="wrapper">Statement</h2>
          {/* <div className="text">
            <label ID="Label3" CssClass="inline" runat="server"  Width="100px" Text="Strongly Agree"  style={{textAlign: "center"}} ></label>
            <label ID="Label4" CssClass="inline" runat="server" Text="" style={{textAlign: "left;"}} Width="75px" ></label>
            <label ID="Label2" CssClass="inline" runat="server"  Width="100px" Text="Neutral"  style={{textAlign: "center"}} ></label>
            <label ID="Label1" CssClass="inline" runat="server" Text="" style={{textAlign: "left;"}} Width="75px" ></label>
            <label ID="Label5" CssClass="inline" runat="server" Text="Strongly Disagree" style={{textAlign: "center"}} Width="100px" ></label>
          </div> */}

          <div className="wrapper">
              <p class="statement">I would be willing to use this smart speaker for ordering my usual things online.</p>
            <form classname="radio">
              strongly disagree<input type="radio" Value="1" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q1" size="3em" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q1" onChange={this.onChange.bind(this)}/> 
              <input type="radio" Value="5" name="q1" onChange={this.onChange.bind(this)}/> strongly agree
              <br />
            </form>
          </div>

          <div className="wrapper">
            <p class="statement">I would prefer the smart speaker over having to do certain tasks myself.</p>
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
              <p class="statement">I trusted the AI assistant to correct its mistakes.</p>
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
            <p class="statement">I am satisfied with AI’s performance</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q4" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q4" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p class="statement">I think the error occurred because user was ambiguous</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q5" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q5" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q5" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q5" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q5" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p class="statement">I found AI’s reaction to errors appropriate</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q6" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q6" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q6" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q6" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q6" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p class="statement">AI explained itself reasonably after the error occurred</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q7" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q7" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q7" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q7" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q7" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

        </div>
          <br />
          {this.state.required && <p style={{color: "red"}}>*Answer all statements before proceeding</p>}
          <br />
          <button className="speak" onClick={() => this.onSubmit()} ID="submitSurvey" runat="server">Submit</button>
          <br />
      </div>
    );
  }
}

export default Questionaire;