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

import mredarch from "../assets/audio/mredarch.wav";
import mfirebrd from "../assets/audio/mfirebrd.wav";
import mredbday from "../assets/audio/mredbday.wav";
import mbowgifts from "../assets/audio/mbowgifts.wav";
import mredcup from "../assets/audio/mredcup.wav";
import mclearcup from "../assets/audio/mclearcup.wav";
import mstriped from "../assets/audio/mstriped.wav";
import mpatterned from "../assets/audio/mpatterned.wav";
import mbetty from "../assets/audio/mbetty.wav";
import mghirad from "../assets/audio/mghirad.wav";
import mball from "../assets/audio/mball.wav";
import mmetalball from "../assets/audio/mmetalball.wav";



const cartOne = [
  {
    name: "party hats",
    firstOpt: {
      name: "Striped Party Hats", 
      des: "Okay, I found Striped Party Hats. Should I add to cart?",
      audio: striped,
      maudio: mstriped,
      img: partyhats, 
      inCart: true },
    secondOpt: {
      name: "Patterned Party Hats",
      des: "Okay, I found Patterned Party Hat. Should I add to cart?",
      audio: patterned,
      maudio: mpatterned,
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
      des: "Okay, I found Betty Crockers Brownies Mix. Should I add to cart?",
      audio: betty,
      maudio: mbetty,
      img: brownies,
      inCart: true },
    secondOpt: {
      name: "Ghirardelli Brownie Mix",
      des: "Okay, I found Ghirardelli Brownie Mix. Should I add to cart?",
      audio: ghirad, 
      maudio: mghirad,
      img: ghir,
      inCart: false },
    list: true,
    added: false,
  },
  {
    name: "balloons",
    firstOpt: {
      name: "Bag of Balloons",
      des: "Okay, I found Bag of Balloons. Should I add to cart?",
      audio: ball,
      maudio: mball,
      img: balloons,
      inCart: true
    }, 
    secondOpt: {
      name: "Metallic Balloons Pack",
      des: "Okay, I found Metallic Balloons Pack. Should I add to cart?",
      audio: metalball,
      maudio: mmetalball,
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
        des: "Okay, I found Red Archery Bow. Should I add to cart?",
        audio: redarch,
        maudio: mredarch,
        img: archery, 
        inCart: true
      },
      secondOpt: {
        name: "Firebird Bow for Archery", 
        des: "Okay, I found Firebird Bow for Archery. Should I add to cart?",
        audio: firebrd,
        maudio: mfirebrd,
        img: firebird, 
        inCart: false
      },
    },
    name: "bow",
    firstOpt: {
      name: "Large Red Birthday Bow",
      des: "Okay, I found Large Red Birthday Bow. Should I add to cart?",
      audio: redbday,
      maudio: mredbday,
      img: bow,
      inCart: true,
    }, 
    secondOpt: {
      name: "Gift Wrapping Bow",
      des: "Okay, I found Bow for Gifts. Should I add to cart?",
      audio: bowgifts,
      maudio: mbowgifts,
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
      des: "Okay, I found Red Plastic Cups. Should I add to cart?",
      audio: redcup,
      maudio: mredcup,
      img: cups,
      inCart: true,
    }, 
    secondOpt: {
      name: "Clear Plastic Cups",
      des: "Okay, I found Clear Plastic Cups. Should I add to cart?",
      audio: clearcup,
      maudio: mclearcup,
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