import partyhats from "../assets/partyhats.jpg";
import hats from "../assets/hats.jpg";
import brownies from "../assets/brownies.jpg";
import balloons from "../assets/balloons.jpg"
import archery from "../assets/archery.jpg"
import bow from "../assets/bow.jpg"
import cups from "../assets/cups.jpg"

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
    count: 1
  },
  {
    img: brownies,
    name:"brownie mix",
    firstOpt: {
      name: "Betty Crockers Brownie Mix",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: brownies,
      inCart: true },
    secondOpt: {
      name: "Ghirardelli Brownie Mix",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: brownies,
      incart: false },
    list: true,
    added: false,
    count: 1
  },
  {
    img: balloons,
    name: "balloons",
    firstOpt: {
      name: "Bag Of Balloons",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: '',
      incart: true
    }, 
    secondOpt: {
      name: "Metallic Balloons Pack",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: '',
      incart: false
    },
    list: true,
    added: false,
    count: 1
  },
  {
    wrongItem: {
      rejected: false,
      firstOpt: {
        name: "Red Archery Bow", 
        des: "Okay, I found . Is this correct?",
        audio: '',
        img: archery, 
        inCart: true
      },
      secondOpt: {
        name: "Firebird Bow for Archery", 
        des: "Okay, I found . Is this correct?",
        audio: '',
        img: archery, 
        inCart: true
      },
    },
    name: "bow",
    firstOpt: {
      name: "Large Red Birthday Bow",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: bow,
      inCart: true,
    }, 
    secondOpt: {
      name: "Bow for Gifts",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: bow,
      inCart: true,
    },
    list: true,
    added: false,
    count: 1
  },
  {
    name: "plastic cups",
    firstOpt: {
      name: "Red Plastic Cups",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: cups,
      inCart: true,
    }, 
    secondOpt: {
      name: "Clear Plastic Cups",
      des: "Okay, I found . Is this correct?",
      audio: '',
      img: '',
      incart: false
    },
    list: true,
    added: false,
    count: 1
  }
];

export default cartTwo;