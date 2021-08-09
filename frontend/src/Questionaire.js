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
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16: '',
      complete: false,
      required: false
    }
  }

  componentDidUpdate() {
    const { q1, q2, q3, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16 } = this.state;
    
    if (q1 && q2 && q3 && q5 && q6 && q7 && q8 && q9 && q10 && q11 && q12 && q13 && q14 && q15 && q16 && !this.state.complete) {
      this.setState({complete: true});
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    if (this.state.complete) {  
      const questData = {
        quest: [
          {q1: this.state.q1},
          {q2: this.state.q2},
          {q3: this.state.q3},
          {q5: this.state.q5},
          {q6: this.state.q6},
          {q7: this.state.q7},
          {q8: this.state.q8},
          {q9: this.state.q9},
          {q10: this.state.q10},
          {q11: this.state.q11},
          {q12: this.state.q12},
          {q13: this.state.q13},
          {q14: this.state.q14},
          {q15: this.state.q15},
          {q16: this.state.q16}
        ]
      }
      const { data } = this.props
      let newData = Object.assign(data, questData)

      axios
        .post('https://errormit.azurewebsites.net/api/users', newData)
          .then(res => {
            this.setState({
              q1: '',
              q2: '',
              q3: '',
              q5: '',
              q6: '',
              q7: '',
              q8: '',
              q9: '',
              q10: '',
              q11: '',
              q12: '',
              q13: '',
              q14: '',
              q15: '',
              q16: ''
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
              <p className="statement">I would be willing to use this AI assistant for ordering my usual things online.</p>
            <div>
              strongly disagree<input id= "q1" type="radio" Value="1" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q1" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q1" onChange={this.onChange.bind(this)}/> 
              <input type="radio" Value="5" name="q1" onChange={this.onChange.bind(this)}/> strongly agree
              <br />
            </div>
          </div>

          <div className="wrapper">
            <p className="statement">The AI assistant was dependable.</p>
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
              <p className="statement">The AI assistant was responsive to any errors.</p>
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
            <p className="statement">I am happy with how the error was handled.</p>
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
            <p className="statement">In my opinion, the AI assistant provided a satisfactory response to the error.</p>
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
            <p className="statement">AI assistant acknowledged the mistake as its own.</p>
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
            <p className="statement">AI assistant shifted blame from itself.</p>
            <div>
              strongly disagree<input type="radio" Value="1" name="q8" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="2" name="q8" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="3" name="q8" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="4" name="q8" onChange={this.onChange.bind(this)}/>
              <input type="radio" Value="5" name="q8" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>
          
        </div>
      <br/>
        <div>
          <h2>Please rate your impression of the agent with the following scales:</h2>

          <div className="quest-wrapper"> 
            <p className="item1">Dislike</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q9" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q9" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Like</p>
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
            <p className="item3">Competent</p>
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
            <br/>
            <p className="item1">Awful</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q13" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q13" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q13" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q13" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q13" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Nice</p>
            <br /> 
            <p className="item1">Ignorant</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q14" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q14" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q14" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q14" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q14" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Knowledgeable</p>
            <br /> 
            <p className="item1">Foolish</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q15" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q15" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q15" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q15" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q15" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Intelligent</p> 
            <br/>
            <p className="item1">Insincere</p>
            <form className="item2">
              <label><input type="radio" Value="1" name="q16" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="2" name="q16" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="3" name="q16" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="4" name="q16" onChange={this.onChange.bind(this)}/></label>
              <label><input type="radio" Value="5" name="q16" onChange={this.onChange.bind(this)}/></label>
            </form>
            <p className="item3">Sincere</p>
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