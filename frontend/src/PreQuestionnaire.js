import React from "react";
import "./App.css";
import axios from "axios";

class PreQuestionaire extends React.Component {
  constructor() {
    super();
    this.state = {
      pq1: '',
      pq2: '',
      pq3: '',
      pq4: '',
      pq5: '',
      pq6: '',
      pq7: '',
      pq8: '',
      pq9: '',
      pq10: '',
      pq11: '',
      pq12: '',
      pq13: '',
      pq14: '',
      pq15: '',
      pq16: '',
      pq17: '',
      pq18: '',
      pq19: '',
      complete: false,
      required: false
    }
  }

  componentDidUpdate() {
    const { pq1, pq2, pq3, pq4, pq5, pq6, pq7, pq8, pq9, pq10, pq11, pq12, pq13, pq14, pq15, pq16, pq17,pq18, pq19 } = this.state;
    
    if (pq1 && pq2 && pq3 && pq4 && pq5 && pq6 && pq7 && pq8 && pq9 && pq10 && pq11 && pq12 && pq13 && pq14 && pq15 && pq16 && pq17 && pq18 && pq19 && !this.state.complete) {
      this.setState({complete: true});
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e) {
    // e.preventDefault();
    console.log(this.props.objId)

    if (this.state.complete) {  
      const questData = {
        prequest: [
          {pq1: this.state.pq1},
          {pq2: this.state.pq2},
          {pq3: this.state.pq3},
          {pq4: this.state.pq4},
          {pq5: this.state.pq5},
          {pq6: this.state.pq6},
          {pq7: this.state.pq7},
          {pq8: this.state.pq8},
          {pq9: this.state.pq9},
          {pq10: this.state.pq10},
          { pq11: this.state.pq11 },
          { pq10: this.state.pq12 },
          { pq11: this.state.pq13 },
          { pq10: this.state.pq14 },
          { pq11: this.state.pq15 },
          { pq10: this.state.pq16 },
          { pq11: this.state.pq17 },
          { pq10: this.state.pq18 },
          { pq11: this.state.pq19 },
        ], 
        uuid: this.props.uuid
      }

      axios
        .post('https://emittgen.azurewebsites.net/api/users', questData)
          .then(res => {
            this.setState({
              pq1: '',
              pq2: '',
              pq3: '',
              pq4: '',
              pq5: '',
              pq6: '',
              pq7: '',
              pq8: '',
              pq9: '',
              pq10: '',
              pq11: '',
              pq12: '',
              pq13: '',
              pq14: '',
              pq15: '',
              pq16: '',
              pq17: '',
              pq18: '',
              pq19: ''
            })
            // this.props.clearData();
            this.props.goToStudy();
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
      <div>
        <h2 >&nbsp;</h2>
        <h2>How do you feel about Artificial Intelligence (AI)?</h2>
		    <p> AI here means a speech-based intelligent assistant such as Siri, Alexa, Bixby or Google Assistant. </p>
        <p>Rate the following statements on a scale of 1 to 5 (1=strongly disagree to 5=strongly agree)</p>
        
        <hr />

        <div>
          <h2 className="statement">Statement</h2>
          <div className="wrapper">
              <p className="statement">I would feel uneasy if AI really had emotions.</p>
            <div>
              strongly disagree<input id= "pq1" type="radio" value="1" name="pq1" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq1" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq1" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq1" onChange={this.onChange.bind(this)}/> 
              <input type="radio" value="5" name="pq1" onChange={this.onChange.bind(this)}/> strongly agree
              <br />
            </div>
          </div>

          <div className="wrapper">
            <p className="statement">I would feel relaxed while talking to AI.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq2" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq2" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq2" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq2" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq2" onChange={this.onChange.bind(this)}/> strongly agree
              <br />     
            </div>
          </div>

          <div className="wrapper">
              <p className="statement">I would feel uneasy if I were given a job where I had to use AI.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq3" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq3" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq3" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq3" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq3" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p className="statement">If AI had emotions, I would be able to make friends with them.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq4" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq4" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq4" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq4" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq4" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p className="statement">I feel comforted being with AI that have emotions.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq5" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq5" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq5" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq5" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq5" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p className="statement">I would feel nervous interacting with AI in front of people.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq6" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq6" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq6" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq6" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq6" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>

          <div className="wrapper">
            <p className="statement">I would hate the idea that AI were making judgements about things.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq7" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq7" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq7" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq7" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq7" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>
          <div className="wrapper">
            <p className="statement">I feel that if I depend too much on AI, something bad might happen.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq8" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq8" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq8" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq8" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq8" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>
		  <div className="wrapper">
            <p className="statement">I would feel paranoid talking with AI.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq9" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq9" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq9" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq9" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq9" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>
          <div className="wrapper">
            <p className="statement">I am concerned that AI would be a bad influence on children.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq10" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq10" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq10" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq10" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq10" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>
		  <div className="wrapper">
            <p className="statement">I feel that in future, society will be dominated by AI.</p>
            <div>
              strongly disagree<input type="radio" value="1" name="pq11" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="2" name="pq11" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="3" name="pq11" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="4" name="pq11" onChange={this.onChange.bind(this)}/>
              <input type="radio" value="5" name="pq11" onChange={this.onChange.bind(this)}/> strongly agree
              <br />            
            </div>
          </div>
        </div>
            <hr />
            <br/>
            <h2>Please answer following questions about yourself</h2>
            <p>Rate the following statements on a scale of 1 to 5 (1=strongly disagree to 5=strongly agree)</p>

            <hr />

            <div>
                <h2 className="statement">Statement</h2>
                <div className="wrapper">
                    <p className="statement">I accept people as they are.</p>
                    <div>
                        strongly disagree<input id="pq12" type="radio" value="1" name="pq12" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq12" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq12" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq12" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq12" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>

                <div className="wrapper">
                    <p className="statement">I am a bad loser.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq13" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq13" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq13" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq13" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq13" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>

                <div className="wrapper">
                    <p className="statement">I am annoyed by others' mistakes.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq14" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq14" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq14" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq14" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq14" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>


                <div className="wrapper">
                    <p className="statement">I get irritated easily.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq15" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq15" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq15" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq15" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq15" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>

                <div className="wrapper">
                    <p className="statement">I believe there are many sides to most issues.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq16" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq16" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq16" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq16" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq16" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>

                <div className="wrapper">
                    <p className="statement">I believe that others have good intentions.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq17" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq17" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq17" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq17" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq17" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>
                <div className="wrapper">
                    <p className="statement">I am quick to judge others.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq18" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq18" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq18" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq18" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq18" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>
                <div className="wrapper">
                    <p className="statement">I can accept a lot from others.</p>
                    <div>
                        strongly disagree<input type="radio" value="1" name="pq19" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="2" name="pq19" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="3" name="pq19" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="4" name="pq19" onChange={this.onChange.bind(this)} />
                        <input type="radio" value="5" name="pq19" onChange={this.onChange.bind(this)} /> strongly agree
              <br />
                    </div>
                </div>
          {this.state.required && <p style={{color: "red"}}>*Answer all statements before proceeding</p>}
          <button className="speak" onClick={() => this.onSubmit()}>Submit</button>
          <br />
          <br />            
            </div>
            </div>
    );
  }
}

export default PreQuestionaire;