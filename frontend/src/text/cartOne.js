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
import party from "../assets/bday.jpg";

import redarch from "../assets/audio/redarch.mp3";
import firebrd from "../assets/audio/firebird.mp3";
import redbday from "../assets/audio/redbday.mp3";
import bowgifts from "../assets/audio/bowgifts.mp3";
import redcup from "../assets/audio/redcups.mp3";
import clearcup from "../assets/audio/clearcups.mp3";
import striped from "../assets/audio/striped.mp3";
import patterned from "../assets/audio/patterned.mp3";
import betty from "../assets/audio/betty.mp3";
import ghirad from "../assets/audio/ghir.mp3";
import ball from "../assets/audio/bagball.mp3";
import metalball from "../assets/audio/metball.mp3";



const cartOne = [
  {
    name: "party hats",
    firstOpt: {
      name: "Striped Party Hats", 
      des: "Okay, I found Striped Party Hats. Is this correct?",
      audio: striped,
      img: partyhats, 
      inCart: true },
    secondOpt: {
      name: "Patterned Party Hats",
      des: "Okay, I found Patterned Party Hat. Is this correct?",
      audio: patterned,
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
      audio: betty,
      img: brownies,
      inCart: true },
    secondOpt: {
      name: "Ghirardelli Brownie Mix",
      des: "Okay, I found Ghirardelli Brownie Mix. Is this correct?",
      audio: ghirad,
      img: ghir,
      inCart: false },
    list: true,
    added: false,
  },
  {
    name: "balloons",
    firstOpt: {
      name: "Bag of Balloons",
      des: "Okay, I found Bag of Balloons. Is this correct?",
      audio: ball,
      img: balloons,
      inCart: true
    }, 
    secondOpt: {
      name: "Metallic Balloons Pack",
      des: "Okay, I found Metallic Balloons Pack. Is this correct?",
      audio: metalball,
      img: metball,
      inCart: false
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
        audio: redarch,
        img: archery, 
        inCart: true
      },
      secondOpt: {
        name: "Firebird Bow for Archery", 
        des: "Okay, I found Firebird Bow for Archery. Is this correct?",
        audio: firebrd,
        img: firebird, 
        inCart: false
      },
    },
    name: "bow (ribbon)",
    firstOpt: {
      name: "Large Red Birthday Bow",
      des: "Okay, I found Large Red Birthday Bow. Is this correct?",
      audio: redbday,
      img: bow,
      inCart: true,
    }, 
    secondOpt: {
      name: "Gift Wrapping Bow",
      des: "Okay, I found Bow for Gifts. Is this correct?",
      audio: bowgifts,
      img: giftwrap,
      inCart: false,
    },
    list: true,
    added: false,
  },

  {
    name: "plastic cups",
    firstOpt: {
      name: "Red Plastic Cups",
      des: "Okay, I found Red Plastic Cups. Is this correct?",
      audio: redcup,
      img: cups,
      inCart: true,
    }, 
    secondOpt: {
      name: "Clear Plastic Cups",
      des: "Okay, I found Clear Plastic Cups. Is this correct?",
      audio: clearcup,
      img: clearcups,
      incart: false
    },
    list: true,
    added: false,
  },
  {
    photo: party
  }
];

export default cartOne;