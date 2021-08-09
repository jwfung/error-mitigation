import jansport from "../assets/jansport.jpg";
import herschel from "../assets/herschel.jpg";
import goldglasses from "../assets/goldglasses.png";
import optics from "../assets/optics.jpg";
import glasscups from "../assets/glasscups.jpg";
import glcups from "../assets/glcups.jpg";
import ticpen from "../assets/ticpens.jpg";
import Papermate from "../assets/papermate.jpg";
import fivestars from "../assets/fivestars.jpg";
import onesub from "../assets/onesubn.jpg";
import white from "../assets/elmerwhite.jpeg";
import clear from "../assets/elmerclear.jpg";

import eclear from "../assets/audio/clear.mp3";
import ewhite from "../assets/audio/white.mp3";
import pastel from "../assets/audio/pastel.mp3";
import fivestar from "../assets/audio/fivestars.mp3";
import paper from "../assets/audio/paper.mp3";
import tic from "../assets/audio/tic.mp3";
import pack from "../assets/audio/pack6.mp3";
import glass from "../assets/audio/glasscup.mp3";
import modern from "../assets/audio/modern.mp3";
import gold from "../assets/audio/gold.mp3";
import jans from "../assets/audio/jansport.mp3";
import hers from "../assets/audio/herschel.mp3";




const cartThree = [
  {
    name: "backpack",
    firstOpt: {
      name: "Jansport School Backpack", 
      des: "Okay, I found Jansport School Backpack. Is this correct?",
      audio: jans,
      img: jansport, 
      inCart: true },
    secondOpt: {
      name: "Herschel School Backpack", 
      des: "Okay, I found Herschel School Backpack. Is this correct?",
      img: herschel,
      audio: hers, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "glasses",
    firstOpt: {
      name: "Gold Framed Glasses", 
      des: "Okay, I found Gold Framed Glasses. Is this correct?",
      audio: gold,
      img: goldglasses, 
      inCart: true },
    secondOpt: {
      name: "Modern Optic Glasses", 
      des: "Okay, I found Modern Optic Glasses. Is this correct?",
      audio: modern,
      img: optics, 
      inCart: false },
    added: false,
    list: true,
    wrongItem: { 
        rejected: false,
      firstOpt: {
        name: "Set of 6 Glass Cupware", 
        des: "Okay, I found a set of 6 Glass Cupwares. Is this correct?",
        audio: glass,
        img: glasscups, 
        inCart: true },
      secondOpt: {
        name: "Pack of 6 Glass Cups", 
        des: "Okay, I found Pack of 6 Glass Cups. Is this correct?",
        audio: pack,
        img: glcups, 
        inCart: false },
    },
  },
  {
    name: "#2 pencils",
    firstOpt: {
      name: "Ticonderoga #2 Wooden Pencils", 
      des: "Okay, I found Ticonderoga #2 Wooden Pencils. Is this correct?",
      audio: tic,
      img: ticpen, 
      inCart: true },
    secondOpt: {
      name: "Papermate #2 Pencils", 
      des: "Okay, I found Papermate #2 Pencils. Is this correct?",
      audio: paper,
      img: Papermate, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "notebooks",
    firstOpt: {
      name: "Five Stars Brand Notebook", 
      des: "Okay, I found Five Stars Brand Notebook. Is this correct?",
      audio: fivestar,
      img: fivestars, 
      inCart: true },
    secondOpt: {
      name: "Pastel Blue 1-Subject Notebook", 
      des: "Okay, I found Pastel Blue 1-Subject Notebook. Is this correct?",
      audio: pastel,
      img: onesub, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "school glue",
    firstOpt: {
      name: "Elmer's White School Glue", 
      des: "Okay, I found Elmer's White School Glue. Is this correct?",
      audio: ewhite,
      img: white, 
      inCart: true },
    secondOpt: {
      name: "Elmer's Clear School Glue", 
      des: "Okay, I found Elmer's Clear School Glue. Is this correct?",
      audio: eclear,
      img: clear, 
      inCart: false },
    added: false,
    list: true
  }
];

export default cartThree;