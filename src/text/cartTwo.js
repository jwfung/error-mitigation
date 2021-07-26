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
      des: "Okay, I found . Is this correct?",
      img: partyhats, 
      inCart: true },
    secondOpt: {
      name: "Patterned Party Hats",
      des: "Okay, I found . Is this correct?", 
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
      name: "",
      des: "Okay, I found . Is this correct?",
      img: brownies,
      inCart: true },
    secondOpt: {
      name: "",
      des: "Okay, I found . Is this correct?",
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
      name: "",
      des: "Okay, I found . Is this correct?",
      img: '',
      incart: true
    }, 
    secondOpt: {
      name: "",
      des: "Okay, I found . Is this correct?",
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
        img: archery, 
        inCart: true
      },
      secondOpt: {
        name: "Red Archery Bow", 
        des: "Okay, I found . Is this correct?",
        img: archery, 
        inCart: true
      },
    },
    name: "bow",
    firstOpt: {
      name: "bow",
      des: "Okay, I found . Is this correct?",
      img: bow,
      inCart: true,
    }, 
    secondOpt: {
      name: "bow",
      des: "Okay, I found . Is this correct?",
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
      name: "plastic cups",
      des: "Okay, I found . Is this correct?",
      img: cups,
      inCart: true,
    }, 
    secondOpt: {
      name: "",
      des: "Okay, I found . Is this correct?",
      img: '',
      incart: false
    },
    list: true,
    added: false,
    count: 1
  }
];

export default cartTwo;