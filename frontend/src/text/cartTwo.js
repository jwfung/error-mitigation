import partyhats from "../assets/partyhats.jpg";
import hats from "../assets/hats.jpg";
import brownies from "../assets/brownies.jpg";
import ghir from "../assets/ghirardelli.jpg";
import balloons from "../assets/balloons.jpg";
import metball from "../assets/metballoons.jpg";
import archery from "../assets/archery.jpg";
import firebird from "../assets/firebird.png";
import bow from "../assets/bow.jpg";
import giftwrap from "../assets/giftwrap.jpg"
import cups from "../assets/cups.jpg";
import clearcups from "../assets/clearcups.jpeg";

const cartTwo = [
  {
    name: "party hats",
    firstOpt: {
      name: "Striped Party Hats", 
      des: "Okay, I found Striped Party Hats. Is this correct?",
      audio: '',
      img: partyhats, 
      inCart: true },
    secondOpt: {
      name: "Patterned Party Hats",
      des: "Okay, I found Patterned Party Hat. Is this correct?", 
      audio: '',
      img: hats, 
      inCart: false },
    list: true,
    added: false,
  },
  {
    img: brownies,
    name:"brownie mix",
    firstOpt: {
      name: "Betty Crockers Brownie Mix",
      des: "Okay, I found Betty Crockers Brownies Mix. Is this correct?",
      audio: '',
      img: brownies,
      inCart: true },
    secondOpt: {
      name: "Ghirardelli Brownie Mix",
      des: "Okay, I found Ghirardelli Brownie Mix. Is this correct?",
      audio: '',
      img: ghir,
      incart: false },
    list: true,
    added: false,
  },
  {
    name: "balloons",
    firstOpt: {
      name: "Bag of Balloons",
      des: "Okay, I found Bag of Balloons. Is this correct?",
      audio: '',
      img: balloons,
      incart: true
    }, 
    secondOpt: {
      name: "Metallic Balloons Pack",
      des: "Okay, I found Metallic Balloons Pack. Is this correct?",
      audio: '',
      img: metball,
      incart: false
    },
    list: true,
    added: false,
  },
  {
    wrongItem: {
      rejected: false,
      firstOpt: {
        name: "Red Archery Bow", 
        des: "Okay, I found Red Archery Bow. Is this correct?",
        audio: '',
        img: archery, 
        inCart: true
      },
      secondOpt: {
        name: "Firebird Bow for Archery", 
        des: "Okay, I found Firebird Bow for Archery. Is this correct?",
        audio: '',
        img: firebird, 
        inCart: true
      },
    },
    name: "bow",
    firstOpt: {
      name: "Large Red Birthday Bow",
      des: "Okay, I found Large Red Birthday Bow. Is this correct?",
      audio: '',
      img: bow,
      inCart: true,
    }, 
    secondOpt: {
      name: "Gift Wrapping Bow",
      des: "Okay, I found Bow for Gifts. Is this correct?",
      audio: '',
      img: giftwrap,
      inCart: true,
    },
    list: true,
    added: false,
  },
  {
    name: "plastic cups",
    firstOpt: {
      name: "Red Plastic Cups",
      des: "Okay, I found Red Plastic Cups. Is this correct?",
      audio: '',
      img: cups,
      inCart: true,
    }, 
    secondOpt: {
      name: "Clear Plastic Cups",
      des: "Okay, I found Clear Plastic Cups. Is this correct?",
      audio: '',
      img: clearcups,
      incart: false
    },
    list: true,
    added: false,
  }
];

export default cartTwo;