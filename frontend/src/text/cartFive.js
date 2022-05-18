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
import rodelle from "../assets/rodelle.jpg";
import recipe from "../assets/recipe.jpg";

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

import mRose from "../assets/audio/mrose.wav";
import mSummer from "../assets/audio/msummer.wav";
import mKing from "../assets/audio/mking.wav";
import mAllPurpose from "../assets/audio/mallpurpose.wav";
import msemi from "../assets/audio/msemi.wav";
import mneswhite from "../assets/audio/mneswhite.wav";
import mdom from "../assets/audio/mdom.wav";
import mbutter from "../assets/audio/mamul.wav";
import morg from "../assets/audio/morg.wav";
import mpib from "../assets/audio/mpib.wav";
import mmcc from "../assets/audio/mmcc.wav";
import mrod from "../assets/audio/mrod.wav";


const cartFive = [
  {
    name: "Chocolate Chips",
    firstOpt: {
      name: "Nestle Semi-Sweet Chips", 
      des: "Okay, I found Nestle Semi-Sweet Chips. Should I add to cart?",
      audio: semi,
      maudio: msemi,
      img: white, 
      inCart: true },
    secondOpt: {
      name: "Nestle White Chocolate Chips", 
      des: "Okay, I found Nestle White Chocolate Chips. Should I add to cart?",
      audio: neswhite,
      maudio: mneswhite,
      img: semisweet, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Brown Sugar",
    firstOpt: {
      name: "Organic Brown Sugar", 
      des: "Okay, I found Organic Brown Sugar. Should I add to cart?",
      audio: org,
      maudio: morg,
      img: organicbrown, 
      inCart: true },
    secondOpt: {
      name: "Domino Brown Sugar", 
      des: "Okay, I found Domino Brown Sugar. Should I add to cart?",
      audio: dom,
      maudio: mdom,
      img: domino, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Butter",
    firstOpt: {
      name: "Amul Butter", 
      des: "Okay, I found Amul Butter. Should I add to cart?",
      audio: butter,
      maudio: mbutter,
      img: amul, 
      inCart: true },
    secondOpt: {
      name: "Pure Irish Butter", 
      des: "Okay, I found Pure Irish Butter. Should I add to cart?",
      audio: pib,
      maudio: mpib,
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
        des: "Okay, I found a dozen roses. Should I add to cart?", 
        audio: Rose,
        maudio: mRose,
        img: roses, 
        inCart: true },
      secondOpt: {
        name: "Summer Flower Arrangement", 
        des: "Okay, I found Summer Flower Arrangements. Should I add to cart?", 
        audio: Summer,
        maudio: mSummer,
        img: flower, 
        inCart: false },
      },
    name: "Flour",
    firstOpt: {
      name: "King Arthur Flour", 
      des: "Okay, I found King Arthur Flour. Should I add to cart?", 
      audio: King,
      maudio: mKing,
      img: flour, 
      inCart: true },
    secondOpt: {
      name: "All Purpose Flour", 
      des: "Okay, I found All Purpose Flour. Should I add to cart?", 
      audio: AllPurpose,
      maudio: mAllPurpose,
      img: flour2, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name: "Vanilla Extract",
    firstOpt: {
      name: "McCormick Vanilla Extract", 
      des: "Okay, I found McCormick Vanilla Extract. Should I add to cart?",
      audio: mcc,
      maudio: mmcc,
      img: mccormick, 
      inCart: true },
    secondOpt: {
      name: "Rodelle Vanilla Extract", 
      des: "Okay, I found Rodelle Vanilla Extract. Should I add to cart?",
      audio: rod,
      maudio: mrod,
      img: rodelle, 
      inCart: false },
    added: false,
    list: true
  },
  {
    photo: recipe
  }
];

export default cartFive;