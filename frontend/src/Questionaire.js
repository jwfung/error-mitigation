import React from "react";
import "./App.css";
import axios from "axios";

class Questionaire extends React.Component {
  constructor() {
    super();
    this.state = {
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});

    // const data = {
    //   q3: this.state.q3,
    //   q4: this.state.q4,
    //   q5: this.state.q5,
    //   q6: this.state.q6,
    //   q7: this.state.q7
    // }
    // console.log(data);

  }

  onSubmit(e) {
    // e.preventDefault();

    const data = {
      q3: this.state.q3,
      q4: this.state.q4,
      q5: this.state.q5,
      q6: this.state.q6,
      q7: this.state.q7
    }

    axios
      .post('http://localhost:8082/api/users', data)
        .then(res => {
          this.setState({
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: ''
          })
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        }), this.props.completeQuest();
  }

  render() {
    return(
      <div id="wrapper">
        <h2 class="inlineh" >&nbsp;</h2>
        <h2 class="inlineh" >Please fill out the following questionnaire </h2>
        
        <hr />
        <br />
        <h3>Please rate the following statements based on your interaction with AI assistant</h3>

        <div id="Table1" runat="server"
          CellPadding="10" 
          GridLines="Both"
          HorizontalAlign="Center">
          <h2 className="wrapper">Statement</h2>
          <div className="text">
            <label ID="Label3" CssClass="inline" runat="server"  Width="100px" Text="Strongly Agree"  style={{textAlign: "center"}} ></label>
            <label ID="Label4" CssClass="inline" runat="server" Text="" style={{textAlign: "left;"}} Width="75px" ></label>
            <label ID="Label2" CssClass="inline" runat="server"  Width="100px" Text="Neutral"  style={{textAlign: "center"}} ></label>
            <label ID="Label1" CssClass="inline" runat="server" Text="" style={{textAlign: "left;"}} Width="75px" ></label>
            <label ID="Label5" CssClass="inline" runat="server" Text="Strongly Disagree" style={{textAlign: "center"}} Width="100px" ></label>
          </div>

          <div className="wrapper">
            <tableCell>
              <p class="statement">When the AI assistant disagreed with me, I questioned my assessment of the X-ray(s).</p>
            </tableCell>
            <div>
              <radioButtonList ID="Q4" CssClass="inline" Width="450px"  style={{alignItems: "center"}} runat="server"  
                RepeatDirection="Horizontal"  
                ForeColor="White" TabIndex="4" OnSelectedIndexChanged="Q1_SelectedIndexChanged" AccessKey="0">
                  strongly disagree<input type="radio" Value="1" name="q5" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="2" name="q5" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="3" name="q5" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="4" name="q5" onChange={this.onChange.bind(this)}/> 
                  <input type="radio" Value="5" name="q5" onChange={this.onChange.bind(this)}/> strongly agree
              </radioButtonList>
              <br />
              <requiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="Q4" ErrorMessage="*Required" ForeColor="red" BorderStyle="None" style={{height: "19px"}} ></requiredFieldValidator>

            </div>
          </div>

          <div className="wrapper">
            <tableCell>
              <p class="statement">I felt more confident in my assessment of the X-ray(s) after consulting with the AI assistant.</p>
            </tableCell>
            <tableCell>
              <radioButtonList ID="Q5" CssClass="inline" Width="450px"   style={{alignItems: "center"}} runat="server"  
              RepeatDirection="Horizontal"  
              ForeColor="White" TabIndex="5" OnSelectedIndexChanged="Q1_SelectedIndexChanged" AccessKey="0">
                strongly disagree<input type="radio" Value="1" name="q4" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="2" name="q4" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="3" name="q4" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="4" name="q4" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="5" name="q4" onChange={this.onChange.bind(this)}/> strongly agree
              </radioButtonList>
              <br />
              <requiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="Q5" ErrorMessage="*Required" ForeColor="red" BorderStyle="None" style={{height: "19px"}} ></requiredFieldValidator>
            
            </tableCell>
          </div>

          <div className="wrapper">
            <tableCell>
              <p class="statement">The AI assistant helped me identify findings that I originally missed.</p>
            </tableCell>
            <tableCell>
              <radioButtonList ID="Q6" CssClass="inline" Width="450px"   style={{alignItems: "center"}} runat="server"  
              RepeatDirection="Horizontal"  
              ForeColor="White" TabIndex="6" OnSelectedIndexChanged="Q1_SelectedIndexChanged" AccessKey="0">
                strongly disagree<input type="radio" Value="1" name="q6" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="2" name="q6" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="3" name="q6" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="4" name="q6" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="5" name="q6" onChange={this.onChange.bind(this)}/> strongly agree
            </radioButtonList>
              <br />
            <requiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="Q6" ErrorMessage="*Required" ForeColor="red" BorderStyle="None" style={{height: "19px"}} ></requiredFieldValidator>
            
            </tableCell>
          </div>

          <div className="wrapper">
            <tableCell>
            <p class="statement">I was frustrated and annoyed by the AI assistant.</p>
            </tableCell>
            <tableCell>
            <radioButtonList ID="Q7" CssClass="inline" Width="450px" style={{alignItems: "center"}} runat="server"  
              RepeatDirection="Horizontal"  
              ForeColor="White" TabIndex="7" OnSelectedIndexChanged="Q1_SelectedIndexChanged" AccessKey="0">
                strongly disagree<input type="radio" Value="1" name="q4" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="2" name="q7" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="3" name="q7" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="4" name="q7" onChange={this.onChange.bind(this)}/>
                  <input type="radio" Value="5" name="q7" onChange={this.onChange.bind(this)}/> strongly agree
            </radioButtonList>
            <br />
            <requiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="Q6" ErrorMessage="*Required" ForeColor="red" BorderStyle="None" style={{height: "19px"}} ></requiredFieldValidator>
            
            </tableCell>
          </div>
        </div>
          <br />
          <br />
          <label ID="LabelReq" runat="server" BorderStyle="None" ForeColor="Red" Font-Size="Larger" Text="*Required: Answer all required questions before proceeding"></label>
          <br />
          <button className="speak" onClick={() => this.onSubmit()} ID="submitSurvey" runat="server">Submit</button>
      </div>
    );
  }
}

export default Questionaire;