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
          {q5: this.state.q5},
          {q6: this.state.q6},
          {q7: this.state.q7},
          {q8: this.state.q8},

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
        <h2 class="inlineh">&nbsp;</h2>
        <h2 class="inlineh">How was your personal assistant?</h2>
        <p>Based on your experience with the smart speaker, rate the statements on a scale of 1 to 5 (1=strongly disagree to 5=strongly agree)</p>
        
        <hr />

        <div>
          <h2 className="wrapper">Statement</h2>
          <div className="wrapper">
              <p class="statement">I would be willing to use this AI assistant for ordering my usual things online.</p>
            <form classname="radio">
              strongly disagree<input id= "q1" type="radio" Value="1" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q1" onChange={this.onChange.bind(this)}/> 
              <input type="radio" Value="5" name="q1" onChange={this.onChange.bind(this)}/> strongly agree
              <br />
            </form>
          </div>

          <div className="wrapper">
            <p class="statement">I would prefer using the AI assistant over having to shop myself.</p>
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
            <p class="statement">I am satisfied with AI assistant's performance</p>
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
            <p class="statement">Even though AI is not always accurate, I trusted AI to be efficient</p>
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
          <div className="wrapper">
            <p class="statement">AI assistant was able to understand its mistake and correct it effectively</p>
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
      <br/>
        <div>
          <h2>Please rate your impression of the agent with the following scales:</h2>

          <div className="quest-wrapper">
            <p className="item1">Unconscious</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q8" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q8" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q8" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q8" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q8" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Conscious</p>
            <br />  
            <p className="item1">Apathetic</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q9" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Responsive</p>
            <br />            
            <p className="item1">Unfriendly</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q10" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q10" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q10" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q10" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q10" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Friendly</p>
            <br />            
            <p className="item1">Incompetent</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q11" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q11" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q11" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q11" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q11" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Knowledgeable</p>
            <br />            
            <p className="item1">Irresponsible</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q12" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q12" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q12" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q12" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q12" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Responsible</p>
          </div>
      </div>

          {this.state.required && <p style={{color: "red"}}>*Answer all statements before proceeding</p>}
          <button className="speak" onClick={() => this.onSubmit()} ID="submitSurvey" runat="server">Submit</button>
          <br />
          <br />            
      </div>
    );
  }
}

export default Questionaire;