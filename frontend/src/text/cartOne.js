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
import plenty from "../assets/plenty.jpg"

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


//need to add more specific audio
const cartOne = [
  {
    name: "AA batteries",
    firstOpt: {
      name: "Duracell Batteries", 
      des: "Okay, I found Duracell Double A Batteries. Is this correct?",
      audio: Duracell,
      img: battery, 
      inCart: true },
    secondOpt: {
      name: "Energizer Batteries", 
      des: "Okay, I found Energizer Double A Batteries. Is this correct?",
      audio: Energizer,
      img: battery2, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name:"dog food",
    firstOpt: {
      name: "Purina Dog Food",
      des: "Okay, I found Purina Dog Food. Is this correct?", 
      audio: Purina,
      img: dogFood, 
      inCart: true },
    secondOpt: {
      name: "Cesar Dog Food", 
      des: "Okay, I found Cesar Dog Food. Is this correct?", 
      audio: Cesar,
      img: dogFood2, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name:"lactose-free milk",
    firstOpt: {
      name: "HEB lactose-free milk",
      des: "Okay, I found HEB lactose-free milk. Is this correct?", 
      audio: HEB,
      img: lactaid,
      inCart: true },
    secondOpt: {
      name: "Dairy Pure: lactose-free milk", 
      des: "Okay, I found Dairy Pure lactose-free milk. Is this correct?", 
      audio: Dairy,
      img: dairyfree, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name: "paper towels",
    firstOpt: {
      name: "Bounty Paper Towels", 
      des: "Okay, I found Bounty Paper Towels. Is this correct?", 
      audio: bount,
      img: bounty, 
      inCart: true },
    secondOpt: {
      name: "Plenty Paper Towels", 
      des: "Okay, I found Plenty Paper Towels. Is this correct?", 
      audio: plent,
      img: plenty, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name: "13-gallon Trash Bags",
    firstOpt: {
      name: "Glad 13-gallon bags",
      des: "Okay, I found Glad 13-gallon trash bags. Is this correct?",  
      audio: Glad,
      img: bags, 
      inCart: true },
    secondOpt: {
      name: "Kirkland 13-gallons bags", 
      des: "Okay, I found Kirkland Signature 13-gallons bags. Is this correct?", 
      audio: Kirkland,
      img: bags2, 
      inCart: false },
    list: true,
    added: false,
    wrongItem: { 
      rejected: false,
      secondOpt: {
        name: "13 x ECLINERS one-gallon trash bags", 
        des: "Okay, I found ECLINERS one-gallon trash bags. I can add 13 of them. Is this correct?", 
        audio: ecline,
        img: ecliners, 
        inCart: false },
      firstOpt: {
        name: "13 x Think Green one-gal bags", 
        des: "Okay, I found Think Green one-gallon bags. I can add 13 of them. Is this correct?", 
        audio: think,
        img: green, 
        inCart: true },
      },
  }
];

export default cartOne;