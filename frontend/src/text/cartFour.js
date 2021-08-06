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

const cartFour = [
  {
    name: "Baseball",
    firstOpt: {
      name: "Baseball", 
      des: "Okay, I found Baseball. Is this correct?",
      audio: bba,
      img: baseball, 
      inCart: true },
    secondOpt: {
      name: "Rawlings Training Baseball", 
      des: "Okay, I found Rawlings Training Baseball. Is this correct?",
      audio: tba,
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
        des: "Okay, I found Oven Mitts. Is this correct?",
        audio: omitt,
        img: oven, 
        inCart: true },
      secondOpt: {
        name: "Mitts for Winter", 
        des: "Okay, I found Mitts for Winter. Is this correct?",
        audio: wmitt,
        img: winter, 
        inCart: false },
      },
    name: "Mitt",
    firstOpt: {
      name: "Baseball Mitt", 
      des: "Okay, I found Baseball Mitt. Is this correct?",
      audio: mitt,
      img: bbmitt, 
      inCart: true },
    secondOpt: {
      name: "Large Baseball Glove", 
      des: "Okay, I found Large Baseball Glove. Is this correct?",
      audio: mitt2,
      img: baseballmitt, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Bat",
    firstOpt: {
      name: "Natural Baseball Bat", 
      des: "Okay, I found Natural Baseball Bat. Is this correct?",
      audio: nbat,
      img: baseballbat, 
      inCart: true },
    secondOpt: {
      name: "Wooden Baseball Bat", 
      des: "Okay, I found Wooden Baseball Bat. Is this correct?",
      audio: wood,
      img: bat, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Baseball cleats",
    firstOpt: {
      name: "Under Armor Baseball Cleats", 
      des: "Okay, I found Under Armor Baseball Cleats. Is this correct?",
      audio: ua,
      img: UA, 
      inCart: true },
    secondOpt: {
      name: "New Balance Baseball Cleats", 
      des: "Okay, I found New Balance Baseball Cleats. Is this correct?",
      audio: nb,
      img: NB, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Uniform",
    firstOpt: {
      name: "Custom Baseball Uniform", 
      des: "Okay, I found Custom Baseball Uniform. Is this correct?",
      audio: bb,
      img: bbuniform, 
      inCart: true },
    secondOpt: {
      name: "Allen Baseball Uniform", 
      des: "Okay, I found Allen Baseball Uniform. Is this correct?",
      audio: allen,
      img: allenuniform, 
      inCart: false },
    added: false,
    list: true
  }
];

export default cartFour;