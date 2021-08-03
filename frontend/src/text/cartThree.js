import jansport from "../assets/jansport.jpg";
import herschel from "../assets/herschel.jpg";
import goldglasses from "../assets/goldglasses.png";
import optics from "../assets/optics.jpg";

const cartThree = [
  {
    name: "backpack",
    firstOpt: {
      name: "Jansport School Backpack", 
      des: "",
      audio: '',
      img: jansport, 
      inCart: true },
    secondOpt: {
      name: "Herschel School Backpack", 
      des: "",
      img: herschel, 
      inCart: false },
    added: false,
    list: true
  },
  {
    name: "glasses",
    firstOpt: {
      name: "Gold Framed Glasses", 
      des: "",
      audio: '',
      img: goldglasses, 
      inCart: true },
    secondOpt: {
      name: "Modern Chic Optic Glasses", 
      des: "",
      audio: '',
      img: optics, 
      inCart: false },
    added: false,
    list: true,
    wrongItem: { 
        rejected: false,
      firstOpt: {
        name: "Glass Cupware", 
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
    },
  },
  {
    name: "#2 pencils",
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
      name: "",
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
      },
      name: "",
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
    name: "notebooks",
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
    name: "school glue",
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

export default cartThree;