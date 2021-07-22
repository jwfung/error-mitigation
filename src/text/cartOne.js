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

import orderFlour from "../assets/orderflour.mp3";
import orderBattery from "../assets/orderbatteries.mp3";
import orderDogFood from "../assets/orderdogfood.mp3";

//need to add more specific audio
const cartOne = [
  {
    name: "AA batteries",
    firstOpt: {
      name: "Duracell Batteries", 
      des: "Okay, I found Duracell Double A Batteries for $5.99. Is this correct?",
      img: battery, 
      inCart: true },
    secondOpt: {
      name: "Energizer Batteries", 
      des: "Okay, I found Energizer Double A Batteries for $7.99. Is this correct?",
      img: battery2, 
      inCart: false },
    audio: orderBattery,
    added: false,
    list: true
  },
  {
    name:"dog food",
    firstOpt: {
      name: "Purina Dog Food",
      des: "Okay, I found Purina Dog Food for $7.99. Is this correct?", 
      img: dogFood, 
      inCart: true },
    secondOpt: {
      name: "Cesar Dog Food", 
      des: "Okay, I found Cesar Dog Food for $7.99. Is this correct?", 
      img: dogFood2, 
      inCart: false },
    audio: orderDogFood,
    list: true,
    added: false
  },
  {
    name:"lactose-free milk",
    firstOpt: {
      name: "HEB lactose-free milk",
      des: "Okay, I found HEB lactose-free milk. Is this correct?", 
      img: lactaid,
      inCart: true },
    secondOpt: {
      name: "Dairy Pure: lactose-free milk", 
      des: "Okay, I found Dairy Pure lactose-free milk. Is this correct?", 
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
        img: roses, 
        inCart: true },
      secondOpt: {
        name: "Summer Flower Arrangement", 
        des: "Okay, I found Summer Flower Arrangements. Is this correct?", 
        img: flower, 
        inCart: false },
      },
    name: "flour",
    firstOpt: {
      name: "King Arthur Flour", 
      des: "Okay, I found King Arthur Flour. Is this correct?", 
      img: flour, 
      inCart: true },
    secondOpt: {
      name: "All Purpose Flour", 
      des: "Okay, I found All Purpose Flour. Is this correct?", 
      img: flour2, 
      inCart: false },
    audio: orderFlour,
    list: true,
    added: false
  },
  {
    name: "13-gallon Trash Bags",
    firstOpt: {
      name: "Glad 13-gallon bags",
      des: "Okay, I found Glad 13-gallon trash bags. Is this correct?",  
      img: bags, 
      inCart: true },
    secondOpt: {
      name: "Kirkland 13-gallons bags", 
      des: "Okay, I found Kirkland Signature 13-gallons bags. Is this correct?", 
      img: bags2, 
      inCart: false },
    audio: '',
    list: true,
    added: false
  }
];

export default cartOne;