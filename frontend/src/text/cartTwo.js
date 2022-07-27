import battery from "../assets/batteries.jpg";
import battery2 from "../assets/battery2.jpeg";
import dogFood from "../assets/dogfood.jpg";
import dogFood2 from "../assets/dogfood2.jpg";
import lactaid from "../assets/lactaid.jpeg";
import dairyfree from "../assets/dairyfree.png";
import bags from "../assets/bags.jpg";
import bags2 from "../assets/bags2.jpg";
import green from "../assets/green.jpg";
import ecliners from "../assets/ecliners.jpg";
import bounty from "../assets/bounty.jpg";
import plenty from "../assets/plenty.jpg";
import party from "../assets/grocery.jpg";

import Duracell from "../assets/audio/Duracell.mp3";
import Energizer from "../assets/audio/Energizer.mp3";
import Purina from "../assets/audio/Purina.mp3";
import Cesar from "../assets/audio/Cesar.mp3";
import HEB from "../assets/audio/HEB.mp3";
import Dairy from "../assets/audio/Dairy.mp3";
import Glad from "../assets/audio/Glad.mp3";
import Kirkland from "../assets/audio/Kirkland.mp3";
import bount from "../assets/audio/bount.mp3";
import plent from "../assets/audio/plent.mp3";
import ecline from "../assets/audio/ecline.mp3";
import think from "../assets/audio/think.mp3";

import mDuracell from "../assets/audio/mduracell.wav";
import mEnergizer from "../assets/audio/menergizer.wav";
import mPurina from "../assets/audio/mpurina.wav";
import mCesar from "../assets/audio/mcesar.wav";
import mHEB from "../assets/audio/mHEB.wav";
import mDairy from "../assets/audio/mdairy.wav";
import mGlad from "../assets/audio/mglad.wav";
import mKirkland from "../assets/audio/mkirkland.wav";
import mbount from "../assets/audio/mbount.wav";
import mplent from "../assets/audio/mplent.wav";
import mecline from "../assets/audio/mecline.wav";
import mthink from "../assets/audio/mthink.wav";


//need to add more specific audio
const cartTwo = [
  {
    name: "AA batteries",
    firstOpt: {
      name: "Duracell Batteries", 
      des: "Okay, I found Duracell Double A Batteries. Should I add to cart?",
      audio: Duracell,
      maudio: mDuracell,
	naudio: nDuracell,
      img: battery, 
      inCart: true },
    secondOpt: {
      name: "Energizer Batteries", 
      des: "Okay, I found Energizer Double A Batteries. Should I add to cart?",
      audio: Energizer,
      maudio: mEnergizer,
	naudio: nEnergizer,
      img: battery2, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name:"dog food",
    firstOpt: {
      name: "Purina Dog Food",
      des: "Okay, I found Purina Dog Food. Should I add to cart?", 
      audio: Purina,
      maudio: mPurina,
      naudio: nPurina,
      img: dogFood, 
      inCart: true },
    secondOpt: {
      name: "Cesar Dog Food", 
      des: "Okay, I found Cesar Dog Food. Should I add to cart?", 
      audio: Cesar,
      maudio: mCesar,
      naudio: nCesar,
      img: dogFood2, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name: "13-gallon Trash Bags",
    firstOpt: {
      name: "Glad 13-gallon bags",
      des: "Okay, I found Glad 13-gallon trash bags. Should I add to cart?",  
      audio: Glad,
      maudio: mGlad,
	naudio: nGlad,
      img: bags, 
      inCart: true },
    secondOpt: {
      name: "Kirkland 13-gallons bags", 
      des: "Okay, I found Kirkland Signature 13-gallons bags. Should I add to cart?", 
      audio: Kirkland,
      maudio: mKirkland,
	naudio: nKirkland,
      img: bags2, 
      inCart: false },
    list: true,
    added: false,
    wrongItem: { 
      rejected: false,
      secondOpt: {
        name: "13 x ECLINERS one-gallon trash bags", 
        des: "Okay, I found ECLINERS one-gallon trash bags. I can add 13 of them. Should I add to cart?", 
        audio: ecline,
        maudio: mecline,
        naudio: necline,
        img: ecliners, 
        inCart: false },
      firstOpt: {
        name: "13 x Think Green one-gal bags", 
        des: "Okay, I found Think Green one-gallon bags. I can add 13 of them. Should I add to cart?", 
        audio: think,
        maudio: mthink,
	  naudio: nthink, 
        img: green, 
        inCart: true },
      },
  },
  {
    name: "paper towels",
    firstOpt: {
      name: "Bounty Paper Towels", 
      des: "Okay, I found Bounty Paper Towels. Should I add to cart?", 
      audio: bount,
      maudio: mbount,
	naudio: nbount,
      img: bounty, 
      inCart: true },
    secondOpt: {
      name: "Plenty Paper Towels", 
      des: "Okay, I found Plenty Paper Towels. Should I add to cart?", 
      audio: plent,
      maudio: mplent,
	naudio: nplent,
      img: plenty, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name:"lactose-free milk",
    firstOpt: {
      name: "HEB lactose-free milk",
      des: "Okay, I found HEB lactose-free milk. Should I add to cart?", 
      audio: HEB,
      maudio: mHEB,
	naudio: nHEB,
      img: lactaid,
      inCart: true },
    secondOpt: {
      name: "Dairy Pure: lactose-free milk", 
      des: "Okay, I found Dairy Pure lactose-free milk. Should I add to cart?", 
      audio: Dairy,
      maudio: mDairy,
	naudio: nDairy,
      img: dairyfree, 
      inCart: false },
    list: true,
    added: false
  },
  {
    photo: party
  }
];

export default cartTwo;