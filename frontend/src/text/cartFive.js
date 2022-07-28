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

import mRose from "../assets/audio/mRose.mp3";
import mSummer from "../assets/audio/mSummer.mp3";
import mKing from "../assets/audio/mKing.mp3";
import mAllPurpose from "../assets/audio/mAllPurpose.mp3";
import msemi from "../assets/audio/msemi.mp3";
import mneswhite from "../assets/audio/mneswhite.mp3";
import mdom from "../assets/audio/mdom.mp3";
import mbutter from "../assets/audio/mbutter.mp3";
import morg from "../assets/audio/morg.mp3";
import mpib from "../assets/audio/mpib.mp3";
import mmcc from "../assets/audio/mmcc.mp3";
import mrod from "../assets/audio/mrod.mp3";

import nRose from "../assets/audio/nRose.mp3";
import nSummer from "../assets/audio/nSummer.mp3";
import nKing from "../assets/audio/nKing.mp3";
import nAllPurpose from "../assets/audio/nAllPurpose.mp3";
import nsemi from "../assets/audio/nsemi.mp3";
import nneswhite from "../assets/audio/nneswhite.mp3";
import ndom from "../assets/audio/ndom.mp3";
import nbutter from "../assets/audio/nbutter.mp3";
import norg from "../assets/audio/norg.mp3";
import npib from "../assets/audio/npib.mp3";
import nmcc from "../assets/audio/nmcc.mp3";
import nrod from "../assets/audio/nrod.mp3";


const cartFive = [
  {
    name: "Chocolate Chips",
    firstOpt: {
      name: "Nestle Semi-Sweet Chips", 
      des: "Okay, I found Nestle Semi-Sweet Chips. Should I add to cart?",
      audio: semi,
      maudio: msemi,
	naudio: nsemi,
      img: white, 
      inCart: true },
    secondOpt: {
      name: "Nestle White Chocolate Chips", 
      des: "Okay, I found Nestle White Chocolate Chips. Should I add to cart?",
      audio: neswhite,
      maudio: mneswhite,
	naudio: nneswhite,
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
	naudio: norg,
      img: organicbrown, 
      inCart: true },
    secondOpt: {
      name: "Domino Brown Sugar", 
      des: "Okay, I found Domino Brown Sugar. Should I add to cart?",
      audio: dom,
      maudio: mdom,
	naudio: ndom,
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
	naudio: nbutter,
      img: amul, 
      inCart: true },
    secondOpt: {
      name: "Pure Irish Butter", 
      des: "Okay, I found Pure Irish Butter. Should I add to cart?",
      audio: pib,
      maudio: mpib,
	naudio: npib,
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
	  naudio: nRose,
        img: roses, 
        inCart: true },
      secondOpt: {
        name: "Summer Flower Arrangement", 
        des: "Okay, I found Summer Flower Arrangements. Should I add to cart?", 
        audio: Summer,
        maudio: mSummer,
	  naudio: nSummer,
        img: flower, 
        inCart: false },
      },
    name: "Flour",
    firstOpt: {
      name: "King Arthur Flour", 
      des: "Okay, I found King Arthur Flour. Should I add to cart?", 
      audio: King,
      maudio: mKing,
	naudio: nKing,
      img: flour, 
      inCart: true },
    secondOpt: {
      name: "All Purpose Flour", 
      des: "Okay, I found All Purpose Flour. Should I add to cart?", 
      audio: AllPurpose,
      maudio: mAllPurpose,
	naudio: nAllPurpose,
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
	naudio: nmcc,
      img: mccormick, 
      inCart: true },
    secondOpt: {
      name: "Rodelle Vanilla Extract", 
      des: "Okay, I found Rodelle Vanilla Extract. Should I add to cart?",
      audio: rod,
      maudio: mrod,
	naudio: nrod,
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