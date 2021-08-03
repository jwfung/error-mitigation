import battery from "../assets/batteries.jpg";
import battery2 from "../assets/battery2.jpeg";
import dogFood from "../assets/dogfood.jpg";
import dogFood2 from "../assets/dogfood2.jpg";
import lactaid from "../assets/lactaid.jpeg";
import dairyfree from "../assets/dairyfree.png";
import flower from "../assets/flower.jpg";
import roses from "../assets/roses.jpg";
import flour from "../assets/flour.jpeg";
import flour2 from "../assets/flour2.jpg";
import bags from "../assets/bags.jpg";
import bags2 from "../assets/bags2.jpg";

import Duracell from "../assets/audio/Duracell.mp3";
import Energizer from "../assets/audio/Energizer.mp3";
import Purina from "../assets/audio/Purina.mp3";
import Cesar from "../assets/audio/Cesar.mp3";
import HEB from "../assets/audio/HEB.mp3";
import Dairy from "../assets/audio/Dairy.mp3";
import Rose from "../assets/audio/Roses.mp3";
import Summer from "../assets/audio/Summer.mp3";
import King from "../assets/audio/King.mp3";
import AllPurpose from "../assets/audio/AllPurpose.mp3";
import Glad from "../assets/audio/Glad.mp3"
import Kirkland from "../assets/audio/Kirkland.mp3"



//need to add more specific audio
const cartOne = [
  {
    name: "AA batteries",
    err: 0,
    cartcnt: 0,
    firstOpt: {
      name: "Duracell Batteries", 
      des: "Okay, I found Duracell Double A Batteries for $5.99. Is this correct?",
      audio: Duracell,
      img: battery, 
      inCart: true },
    secondOpt: {
      name: "Energizer Batteries", 
      des: "Okay, I found Energizer Double A Batteries for $7.99. Is this correct?",
      audio: Energizer,
      img: battery2, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name:"dog food",
    err: 0,
    cartcnt: 0,
    firstOpt: {
      name: "Purina Dog Food",
      des: "Okay, I found Purina Dog Food for $7.99. Is this correct?", 
      audio: Purina,
      img: dogFood, 
      inCart: true },
    secondOpt: {
      name: "Cesar Dog Food", 
      des: "Okay, I found Cesar Dog Food for $7.99. Is this correct?", 
      audio: Cesar,
      img: dogFood2, 
      inCart: false },
    list: true,
    added: false
  },
  {
    name:"lactose-free milk",
    err: 0,
    cartcnt: 0,
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
    audio:'',
    list: true,
    added: false
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
    name: "flour",
    err: 0,
    cartcnt: 0,
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
    name: "13-gallon Trash Bags",
    err: 0,
    cartcnt: 0,
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
    added: false
  }
];

export default cartOne;