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

import mredarch from "../assets/audio/mredarch.mp3";
import mfirebrd from "../assets/audio/mfirebrd.mp3";
import mredbday from "../assets/audio/mredbday.mp3";
import mbowgifts from "../assets/audio/mbowgifts.mp3";
import mredcup from "../assets/audio/mredcup.mp3";
import mclearcup from "../assets/audio/mclearcup.mp3";
import mstriped from "../assets/audio/mstriped.mp3";
import mpatterned from "../assets/audio/mpatterned.mp3";
import mbetty from "../assets/audio/mbetty.mp3";
import mghirad from "../assets/audio/mghirad.mp3";
import mball from "../assets/audio/mball.mp3";
import mmetalball from "../assets/audio/mmetalball.mp3";

import nredarch from "../assets/audio/nredarch.mp3";
import nfirebrd from "../assets/audio/nfirebrd.mp3";
import nredbday from "../assets/audio/nredbday.mp3";
import nbowgifts from "../assets/audio/nbowgifts.mp3";
import nredcup from "../assets/audio/nredcup.mp3";
import nclearcup from "../assets/audio/nclearcup.mp3";
import nstriped from "../assets/audio/nstriped.mp3";
import npatterned from "../assets/audio/npatterned.mp3";
import nbetty from "../assets/audio/nbetty.mp3";
import nghirad from "../assets/audio/nghirad.mp3";
import nball from "../assets/audio/nball.mp3";
import nmetalball from "../assets/audio/nmetalball.mp3";

const cartOne = [
  {
    name: "party hats",
    firstOpt: {
      name: "Striped Party Hats", 
      des: "Okay, I found Striped Party Hats. Should I add to cart?",
      audio: striped,
      maudio: mstriped,
	naudio: nstriped,
      img: partyhats, 
      inCart: true },
    secondOpt: {
      name: "Patterned Party Hats",
      des: "Okay, I found Patterned Party Hat. Should I add to cart?",
      audio: patterned,
      maudio: mpatterned,
	naudio: npatterned,
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
	naudio: nbetty,
      img: brownies,
      inCart: true },
    secondOpt: {
      name: "Ghirardelli Brownie Mix",
      des: "Okay, I found Ghirardelli Brownie Mix. Should I add to cart?",
      audio: ghirad, 
      maudio: mghirad,
	naudio: nghirad,
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
	naudio: nball,
      img: balloons,
      inCart: true
    }, 
    secondOpt: {
      name: "Metallic Balloons Pack",
      des: "Okay, I found Metallic Balloons Pack. Should I add to cart?",
      audio: metalball,
      maudio: mmetalball,
	naudio: nmetalball,
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
	  naudio: nredarch,
        img: archery, 
        inCart: true
      },
      secondOpt: {
        name: "Firebird Bow for Archery", 
        des: "Okay, I found Firebird Bow for Archery. Should I add to cart?",
        audio: firebrd,
        maudio: mfirebrd,
	  naudio: nfirebrd,
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
	naudio: nredbday,
      img: bow,
      inCart: true,
    }, 
    secondOpt: {
      name: "Gift Wrapping Bow",
      des: "Okay, I found Bow for Gifts. Should I add to cart?",
      audio: bowgifts,
      maudio: mbowgifts,
	naudio: nbowgifts,
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
	naudio: nredcup,
      img: cups,
      inCart: true,
    }, 
    secondOpt: {
      name: "Clear Plastic Cups",
      des: "Okay, I found Clear Plastic Cups. Should I add to cart?",
      audio: clearcup,
      maudio: mclearcup,
	    naudio: nclearcup,
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