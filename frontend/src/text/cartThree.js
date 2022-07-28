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
import photo from "../assets/back2school2.jpg";

import eclear from "../assets/audio/clear.mp3";
import ewhite from "../assets/audio/ewhite.mp3";
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

import meclear from "../assets/audio/meclear.mp3";
import mewhite from "../assets/audio/mewhite.mp3";
import mpastel from "../assets/audio/mpastel.mp3";
import mfivestar from "../assets/audio/mfivestar.mp3";
import mpaper from "../assets/audio/mpaper.mp3";
import mtic from "../assets/audio/mtic.mp3";
import mpack from "../assets/audio/mpack.mp3";
import mglass from "../assets/audio/mglass.mp3";
import mmodern from "../assets/audio/mmodern.mp3";
import mgold from "../assets/audio/mgold.mp3";
import mjans from "../assets/audio/mjans.mp3";
import mhers from "../assets/audio/mhers.mp3";

import neclear from "../assets/audio/neclear.mp3";
import newhite from "../assets/audio/newhite.mp3";
import npastel from "../assets/audio/npastel.mp3";
import nfivestar from "../assets/audio/nfivestar.mp3";
import npaper from "../assets/audio/npaper.mp3";
import ntic from "../assets/audio/ntic.mp3";
import npack from "../assets/audio/npack.mp3";
import nglass from "../assets/audio/nglass.mp3";
import nmodern from "../assets/audio/nmodern.mp3";
import ngold from "../assets/audio/ngold.mp3";
import njans from "../assets/audio/njans.mp3";
import nhers from "../assets/audio/nhers.mp3";


const cartThree = [
  {
    name: "backpack",
    firstOpt: {
      name: "Jansport School Backpack", 
      des: "Okay, I found Jansport School Backpack. Should I add to cart?",
      audio: jans,
	maudio:mjans,
	naudio:njans,
      img: jansport, 
      inCart: true },
    secondOpt: {
      name: "Herschel School Backpack", 
      des: "Okay, I found Herschel School Backpack. Should I add to cart?",
      img: herschel,
      audio: hers, 
	maudio: mhers,
	naudio: nhers,
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "(eye) glasses",
    firstOpt: {
      name: "Gold Framed Glasses", 
      des: "Okay, I found Gold Framed Glasses. Should I add to cart?",
      audio: gold,
	maudio: mgold,
	naudio: ngold,
      img: goldglasses, 
      inCart: true },
    secondOpt: {
      name: "Modern Optic Glasses", 
      des: "Okay, I found Modern Optic Glasses. Should I add to cart?",
      audio: modern,
	maudio: mmodern,
	naudio: nmodern,
      img: optics, 
      inCart: false },
    added: false,
    list: true,
    wrongItem: { 
        rejected: false,
      firstOpt: {
        name: "Set of 6 Glass Cupware", 
        des: "Okay, I found a set of 6 Glass Cupwares. Should I add to cart?",
        audio: glass,
	  maudio: mglass,
	  naudio: nglass,
        img: glasscups, 
        inCart: true },
      secondOpt: {
        name: "Pack of 6 Glass Cups", 
        des: "Okay, I found Pack of 6 Glass Cups. Should I add to cart?",
        audio: pack,
	  maudio: mpack,
	  naudio: npack,
        img: glcups, 
        inCart: false },
    },
  },
  {
    name: "#2 pencils",
    firstOpt: {
      name: "Ticonderoga #2 Wooden Pencils", 
      des: "Okay, I found Ticonderoga #2 Wooden Pencils. Should I add to cart?",
      audio: tic,
	maudio: mtic,
	naudio: ntic,
      img: ticpen, 
      inCart: true },
    secondOpt: {
      name: "Papermate #2 Pencils", 
      des: "Okay, I found Papermate #2 Pencils. Should I add to cart?",
      audio: paper,
	maudio: mpaper,
	naudio: npaper, 
      img: Papermate, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "notebooks",
    firstOpt: {
      name: "Five Stars Brand Notebook", 
      des: "Okay, I found Five Stars Brand Notebook. Should I add to cart?",
      audio: fivestar,
	maudio: mfivestar,
	naudio: nfivestar,
      img: fivestars, 
      inCart: true },
    secondOpt: {
      name: "Pastel Blue 1-Subject Notebook", 
      des: "Okay, I found Pastel Blue 1-Subject Notebook. Should I add to cart?",
      audio: pastel,
	maudio: mpastel,
	naudio: npastel,
      img: onesub, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "school glue",
    firstOpt: {
      name: "Elmer's White School Glue", 
      des: "Okay, I found Elmer's White School Glue. Should I add to cart?",
      audio: ewhite,
	maudio: mewhite,
	naudio: newhite,
      img: white, 
      inCart: true },
    secondOpt: {
      name: "Elmer's Clear School Glue", 
      des: "Okay, I found Elmer's Clear School Glue. Should I add to cart?",
      audio: eclear,
	maudio: meclear,
	naudio: neclear,
      img: clear, 
      inCart: false },
    added: false,
    list: true
  },
  {
    photo: photo
  }
];

export default cartThree;