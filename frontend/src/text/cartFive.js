import flower from "../assets/flower.jpg";
import roses from "../assets/roses.jpg";
import flour from "../assets/flour.jpeg";
import flour2 from "../assets/flour2.jpg";
import semisweet from "../assets/nestle.jpg";
import white from "../assets/white.jpg";
import organicbrown from "../assets/organicbrown.jpg";
import domino from "../assets/domino.jpeg";
import pureirish from "../assets/pureirish.png";
import amul from "../assets/amil.jpg";
import mccormick from "../assets/mccormick.jpg";
import rodelle from "../assets/rodelle.jpg"

import Rose from "../assets/audio/Roses.mp3";
import Summer from "../assets/audio/Summer.mp3";
import King from "../assets/audio/King.mp3";
import AllPurpose from "../assets/audio/AllPurpose.mp3";
import semi from "../assets/audio/semi.mp3";
import neswhite from "../assets/audio/nestlew.mp3";
import dom from "../assets/audio/dom.mp3";
import butter from "../assets/audio/amul.mp3";
import org from "../assets/audio/org.mp3";
import pib from "../assets/audio/pib.mp3";
import mcc from "../assets/audio/mcc.mp3";
import rod from "../assets/audio/rod.mp3";


const cartFive = [
  {
    name: "Chocolate Chips",
    firstOpt: {
      name: "Nestle Semi-Sweet Chips", 
      des: "Okay, I found Nestle Semi-Sweet Chips. Is this correct?",
      audio: semi,
      img: white, 
      inCart: true },
    secondOpt: {
      name: "Nestle White Chocolate Chips", 
      des: "Okay, I found Nestle White Chocolate Chips. Is this correct?",
      audio: neswhite,
      img: semisweet, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Brown Sugar",
    firstOpt: {
      name: "Organic Brown Sugar", 
      des: "Okay, I found Organic Brown Sugar. Is this correct?",
      audio: org,
      img: organicbrown, 
      inCart: true },
    secondOpt: {
      name: "Domino Brown Sugar", 
      des: "Okay, I found Domino Brown Sugar. Is this correct?",
      audio: dom,
      img: domino, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Butter",
    firstOpt: {
      name: "Amul Butter", 
      des: "Okay, I found Amul Butter. Is this correct?",
      audio: butter,
      img: amul, 
      inCart: true },
    secondOpt: {
      name: "Pure Irish Butter", 
      des: "Okay, I found Pure Irish Butter. Is this correct?",
      audio: pib,
      img: pureirish, 
      inCart: false },
    added: false,
    list: true
  },
  {
    wrongItem: { 
      rejected: false,
      firstOpt: {
        name: "Dozen Roses", 
        des: "Okay, I found a dozen roses. Is this correct?", 
        audio: Rose,
        img: roses, 
        inCart: true },
      secondOpt: {
        name: "Summer Flower Arrangement", 
        des: "Okay, I found Summer Flower Arrangements. Is this correct?", 
        audio: Summer,
        img: flower, 
        inCart: false },
      },
    name: "Flour",
    firstOpt: {
      name: "King Arthur Flour", 
      des: "Okay, I found King Arthur Flour. Is this correct?", 
      audio: King,
      img: flour, 
      inCart: true },
    secondOpt: {
      name: "All Purpose Flour", 
      des: "Okay, I found All Purpose Flour. Is this correct?", 
      audio: AllPurpose,
      img: flour2, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name: "Vanilla Extract",
    firstOpt: {
      name: "McCormick Vanilla Extract", 
      des: "Okay, I found McCormick Vanilla Extract. Is this correct?",
      audio: mcc,
      img: mccormick, 
      inCart: true },
    secondOpt: {
      name: "Rodelle Vanilla Extract", 
      des: "Okay, I found Rodelle Vanilla Extract. Is this correct?",
      audio: rod,
      img: rodelle, 
      inCart: false },
    added: false,
    list: true
  }
];

export default cartFive;