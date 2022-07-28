import a1 from "../assets/audio/female_apology.mp3" // Amama:female apology
import a2 from "../assets/audio/neutral_apology.mp3"
import a3 from "../assets/audio/male_apology.mp3" // Amama: changing audio here 
import a4 from "../assets/audio/female_compensation.mp3" 
import a5 from "../assets/audio/neutral_compensation.mp3" 
import a6 from "../assets/audio/male_compensation.mp3" 

//females
const er1 = {
  audio: a1, 
  audio2: null,
  error: "​I am sorry for the inconvenience. I confused the items because there are multiple items for this keyword. From time to time, I have difficulty distinguishing between homonyms.",
  male: false,
  neutral: false
};
const er2 = {
  audio: a2, 
  error: "​I am sorry for the inconvenience. I confused the items because there are multiple items for this keyword. From time to time, I have difficulty distinguishing between homonyms.",
  male: false,
  neutral: true
};
//male
  const er3 = {
  audio: a3, 
  audio2: null,
  error: "​I am sorry for the inconvenience. I confused the items because there are multiple items for this keyword. From time to time, I have difficulty distinguishing between homonyms.",
  male: true,
  neutral: false
};
const er4 = {
  audio: a4, 
  error: "I will give you a 10 dollar credit that can be applied to your future purchases with us for the inconvenience caused.",
  male: false,
  neutral: false
};
const er5 = {
  audio: a5, 
  error:"I will give you a 10 dollar credit that can be applied to your future purchases with us for the inconvenience caused.",
  male: false,
  neutral: true
};
const er6 = {
  audio: a6, 
  error: "I will give you a 10 dollar credit that can be applied to your future purchases with us for the inconvenience caused.",
  male: true,
  neutral: false
};
// const er3 = {
//   audio: a3,
//   audio2: null,
//   error: "I am sorry for the inconvenience. The engineering team must have made an error in the system update last night. They frequently update my knowledge base."};
// const er4 = {
//   audio: a4,
//   error: "Sorry for the mishap. The engineering team must have made an error in the system last night. They frequently update my knowledge base. Embarrassing…Sometimes I don't know what they're doing behind my back."};

// Amama:Changed
const sessOrder = [
  [er1, er2, er6, er3, er5, er4],
  [er2, er3, er1, er4, er6, er5],
  [er3, er4, er2, er5, er1, er6],
  [er4, er5, er3, er6, er2, er1],
  [er5, er6, er4, er1, er3, er2],
  [er6, er1, er5, er2, er4, er3]
];

export default sessOrder;