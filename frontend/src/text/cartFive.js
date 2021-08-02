import flower from "../assets/flower.jpg";
import roses from "../assets/roses.jpg";
import flour from "../assets/flour.jpeg";
import flour2 from "../assets/flour2.jpg";

import Rose from "../assets/audio/Roses.mp3";
import Summer from "../assets/audio/Summer.mp3";
import King from "../assets/audio/King.mp3";
import AllPurpose from "../assets/audio/AllPurpose.mp3";

const cartFive = [
  {
    name: "Chocolate Chips",
    firstOpt: {
      name: "", 
      des: "",
      audio: '',
      img: '', 
      inCart: true },
    secondOpt: {
      name: "", 
      des: "",
      img: '', 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Brown Sugar",
    firstOpt: {
      name: "", 
      des: "",
      audio: '',
      img: '', 
      inCart: true },
    secondOpt: {
      name: "", 
      des: "",
      audio: '',
      img: '', 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "Butter",
    firstOpt: {
      name: "", 
      des: "",
      audio: '',
      img: '', 
      inCart: true },
    secondOpt: {
      name: "", 
      des: "",
      audio: '',
      img: '', 
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
    name: "flour",
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
      name: "", 
      des: "",
      audio: '',
      img: '', 
      inCart: true },
    secondOpt: {
      name: "", 
      des: "",
      audio: '',
      img: '', 
      inCart: false },
    added: false,
    list: true
  }
];

export default cartFive;