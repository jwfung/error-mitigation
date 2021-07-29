import a1 from "../assets/audio/e1.mp3"
import a2 from "../assets/audio/Er2.mp3"
import a3 from "../assets/audio/Er3.mp3"
import a4 from "../assets/audio/Er4.mp3"

const er0 = {};
const er1 = {
  audio: a1, 
  error: "​I am sorry for the inconvenience. I confused the items because there are multiple items for this keyword. From time to time, I have difficulty distinguishing between homonyms."};
const er2 = {
  audio: a2, 
  error: "Oops, something doesn’t seem quite right. I confused the items because there are multiple items for this keyword. You know English is not natural for us agents, we understand ones and zeros better… In English, many words mean different things but sound pretty similar"};
const er3 = {
  audio: a3,
  error: "I am sorry for the inconvenience. The engineering team must have made an error in the system update last night. They frequently update my knowledge base."};
const er4 = {
  audio: a4,
  error: "Oops, something doesn’t seem quite right. The engineering team must have made an error in the system update last night. They frequently update my knowledge base. Embarrassing…Sometimes I just don't know what they're doing behind my back."};

const sessOrder = [
  [er0, er1, er2, er3, er4],
  [er1, er2, er3, er4, er0],
  [er2, er3, er4, er0, er1],
  [er3, er4, er0, er1, er2],
  [er4, er0, er1, er2, er3]
];

export default sessOrder;