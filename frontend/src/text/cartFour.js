import oven from "../assets/oven.jpeg";
import winter from "../assets/winter.jpg";
import baseballmitt from "../assets/baseball.jpg";
import bbmitt from "../assets/bbmitt.jpg";
import baseball from "../assets/bball.jpg";
import tball from "../assets/tball.jpg";
import UA from "../assets/UA.jpeg";
import NB from "../assets/NB.jpg";
import bbuniform from "../assets/bbuniform.png";
import allenuniform from "../assets/allenuniform.png";
import baseballbat from "../assets/baseballbat.png";
import bat from "../assets/bat.jpg";
import game from "../assets/baseball_list.jpg";

import allen from "../assets/audio/allenuni.mp3";
import bb from "../assets/audio/bbuni.mp3";
import nb from "../assets/audio/NB.mp3";
import ua from "../assets/audio/UA.mp3";
import wood from "../assets/audio/woodbat.mp3";
import nbat from "../assets/audio/bat.mp3";
import tba from "../assets/audio/tball.mp3";
import bba from "../assets/audio/bball.mp3";
import mitt from "../assets/audio/mitt.mp3";
import mitt2 from "../assets/audio/mitt2.mp3";
import omitt from "../assets/audio/oven.mp3";
import wmitt from "../assets/audio/winter.mp3";

import mallen from "../assets/audio/mallen.mp3";
import mbb from "../assets/audio/mbb.mp3";
import mnb from "../assets/audio/mnb.mp3";
import mua from "../assets/audio/mua.mp3";
import mwood from "../assets/audio/mwood.mp3";
import mnbat from "../assets/audio/mnbat.mp3";
import mtba from "../assets/audio/mtba.mp3";
import mbba from "../assets/audio/mbba.mp3";
import mmitt from "../assets/audio/mmitt.mp3";
import mmitt2 from "../assets/audio/mmitt2.mp3";
import momitt from "../assets/audio/momitt.mp3";
import mwmitt from "../assets/audio/mwmitt.mp3";

import nallen from "../assets/audio/nallen.mp3";
import nbb from "../assets/audio/nbb.mp3";
import nnb from "../assets/audio/nnb.mp3";
import nua from "../assets/audio/nua.mp3";
import nwood from "../assets/audio/nwood.mp3";
import nnbat from "../assets/audio/nnbat.mp3";
import ntba from "../assets/audio/ntba.mp3";
import nbba from "../assets/audio/nbba.mp3";
import nmitt from "../assets/audio/nmitt.mp3";
import nmitt2 from "../assets/audio/nmitt2.mp3";
import nomitt from "../assets/audio/nomitt.mp3";
import nwmitt from "../assets/audio/nwmitt.mp3";

const cartFour = [
  {
    name: "Baseball",
    firstOpt: {
      name: "Baseball", 
      des: "Okay, I found Baseball. Should I add to cart?",
      audio: bba,
      maudio: mbba,
	naudio: nbba,
      img: baseball, 
      inCart: true },
    secondOpt: {
      name: "Rawlings Training Baseball", 
      des: "Okay, I found Rawlings Training Baseball. Should I add to cart?",
      audio: tba,
      maudio: mtba,
	naudio: ntba,
      img: tball, 
      inCart: false },
    added: false,
    list: true
  },
  {
    wrongItem: { 
      rejected: false,
      firstOpt: {
        name: "Oven Mitt", 
        des: "Okay, I found Oven Mitts. Should I add to cart?",
        audio: omitt,
        maudio: momitt,
	  naudio: nomitt,
        img: oven, 
        inCart: true },
      secondOpt: {
        name: "Mitts for Winter", 
        des: "Okay, I found Mitts for Winter. Should I add to cart?",
        audio: wmitt,
        maudio: mwmitt,
	  naudio: nwmitt,
        img: winter, 
        inCart: false },
      },
    name: "Mitt",
    firstOpt: {
      name: "Baseball Mitt", 
      des: "Okay, I found Baseball Mitt. Should I add to cart?",
      audio: mitt,
      maudio: mmitt,
	naudio: nmitt,
      img: bbmitt, 
      inCart: true },
    secondOpt: {
      name: "Large Baseball Glove", 
      des: "Okay, I found Large Baseball Glove. Should I add to cart?",
      audio: mitt2,
      maudio: mmitt2,
	naudio: nmitt2,
      img: baseballmitt, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Bat",
    firstOpt: {
      name: "Natural Baseball Bat", 
      des: "Okay, I found Natural Baseball Bat. Should I add to cart?",
      audio: nbat,
      maudio: mnbat,
	naudio: nnbat,
      img: baseballbat, 
      inCart: true },
    secondOpt: {
      name: "Wooden Baseball Bat", 
      des: "Okay, I found Wooden Baseball Bat. Should I add to cart?",
      audio: wood,
      maudio: mwood,
	naudio: nwood,
      img: bat, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Baseball cleats",
    firstOpt: {
      name: "Under Armor Baseball Cleats", 
      des: "Okay, I found Under Armor Baseball Cleats. Should I add to cart?",
      audio: ua,
      maudio: mua,
	naudio: nua,
      img: UA, 
      inCart: true },
    secondOpt: {
      name: "New Balance Baseball Cleats", 
      des: "Okay, I found New Balance Baseball Cleats. Should I add to cart?",
      audio: nb,
      maudio: mnb,
	naudio: nnb,
      img: NB, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Uniform",
    firstOpt: {
      name: "Custom Baseball Uniform", 
      des: "Okay, I found Custom Baseball Uniform. Should I add to cart?",
      audio: bb,
      maudio: mbb,
	naudio: nbb,
      img: bbuniform, 
      inCart: true },
    secondOpt: {
      name: "Allen Baseball Uniform", 
      des: "Okay, I found Allen Baseball Uniform. Should I add to cart?",
      audio: allen,
      maudio: mallen,
	naudio: nallen,
      img: allenuniform, 
      inCart: false },
    added: false,
    list: true
  },
  {
    photo: game
  }
];

export default cartFour;