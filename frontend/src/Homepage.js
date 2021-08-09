import React from 'react';
import logo from "../src/assets/logo.png";

class App extends React.Component {

  render() {
    return (
      <div style={{maxWidth: "80%", margin: "auto"}}>
        <img src={logo} style={{maxWidth:"30%"}} alt="Johns Hopkins Logo"/>
        
        <h2>Greetings</h2>
        <hr/>

        <p>
            We are a research group at Johns Hopkins University called the 
            <a id="HyperLink2" href="http://intuitivecomputing.jhu.edu/"> Intuitive Computing Lab</a>&nbsp;interested in understanding how humans perceive and interact with an Artificial Intelligence (AI) assistant. During this study, you will evaluate <strong>five</strong> AI assistants and their preformances as they help you complete a task.<br /><br />
           Your participation is voluntary and your responses will be completely anonymous. We will ask only for your name and email address to send you a $10 Amazon gift card upon completion of the study (your personal information will not be associated with your responses). This study will take about 10 minutes to complete. 
            </p>
        <p>
            By continuing, you consent to participate in this study and understand that your input will only be used for research purposes. 
            <a id="HyperLink1" href="https://livejohnshopkins-my.sharepoint.com/:w:/g/personal/jfung4_jh_edu/EQMsjETb_ahDog9YC7L6xyoBWUcUl1FgG2JdqO33_qM6JQ?e=AKTlOg"> A detailed consent form</a> is provided for more information.
           </p>

         <p>
            Please use <strong>Google Chrome</strong> on a laptop or desktop computer to complete this study.
            <br/>
            </p>
        <button className="speak" onClick={() => this.props.continue()}>Continue</button>
      </div>
    );
  }
}
    

export default App;
