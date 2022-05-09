// import React from 'react';
// import ReactDOM from 'react-dom';

// // Survey.StylesManager.applyTheme("modern");

// var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"rating","name":"question1","title":"Please rate your impression of the agent on these scales","minRateDescription":"unconscious","maxRateDescription":"conscious"},{"type":"matrix","name":"question 4","title":"Based on your experience, rate the smart speaker (AI agent) on a scale of 1 to 5 (1=strongly disagree to 5=strongly agree)","hideNumber":true,"columns":[{"value":"Column 1","text":"Strongly Disagree"},{"value":"Column 2","text":"Disagree"},{"value":"Column 3","text":"Neutral"},{"value":"Column 4","text":"Agree"},{"value":"Column 5","text":"Strongly Agree"}],"rows":["I would be willing to use this smart speaker for ordering my usual things online","I trusted the AI assistant to correct its mistakes"]}]}]}

// function sendDataToServer(survey) {
//     //send Ajax request to your web server.
//     alert("The results are:" + JSON.stringify(survey.data));
// }

// // ReactDOM.render(
// //     <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));

// class Survey extends React.Component {
//   render() {
//     return ( <div id="surveyContainer"></div>)
//   }
// }

// export default Survey;