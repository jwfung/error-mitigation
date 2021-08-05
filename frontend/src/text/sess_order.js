import a1 from "../assets/audio/e1.mp3"
import a2 from "../assets/audio/Er2.mp3"
import a3 from "../assets/audio/Er3.mp3"
import a4 from "../assets/audio/Er4.mp3"

const er0 = {};
const er1 = {
  audio: a1, 
  audio2: null,
  error: "​I am sorry for the inconvenience. I confused the items because there are multiple items for this keyword. From time to time, I have difficulty distinguishing between homonyms."};
const er2 = {
  audio: a2, 
  error: "Sorry for the mishap. I confused the items because there are multiple items for this keyword. You know English is not natural for agents, we understand ones and zeros better…In English, different words can sound the same"};
const er3 = {
  audio: a3,
  audio2: null,
  error: "I am sorry for the inconvenience. The engineering team must have made an error in the system update last night. They frequently update my knowledge base."};
const er4 = {
  audio: a4,
  error: "Sorry for the mishap. The engineering team must have made an error in the system last night. They frequently update my knowledge base. Embarrassing…Sometimes I don't know what they're doing behind my back."};

const sessOrder = [
  [er0, er1, er2, er3, er4],
  [er1, er2, er3, er4, er0],
  [er2, er3, er4, er0, er1],
  [er3, er4, er0, er1, er2],
  [er4, er0, er1, er2, er3]
];

export default sessOrder;