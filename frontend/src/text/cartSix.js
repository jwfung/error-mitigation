import peel from "../assets/peelmask.jpg";
import green from "../assets/greenmask.jpg";
import philips from "../assets/philips.jpg";
import balmain from "../assets/balmain.jpg";
import pure from "../assets/100pure.jpg";
import plant from "../assets/plant.jpg";
import dismask from "../assets/dismask.jpg";
import kmask from "../assets/Kmask.jpg";
import nivea from "../assets/aveen.jpg";
import br2 from "../assets/br2.jpg";
import br1 from "../assets/br1.jpg";


const cartSix = [
  {
    name: "Bathrobe",
    firstOpt: {
      name: "High Quality Towel Bathrobe", 
      des: "Okay, I found High Quality Towel Bathrobe. Should I add to cart?",
      audio: '',
      maudio: '',
      img: br1, 
      inCart: true },
    secondOpt: {
      name: "Fluffy Towel Shower Robe", 
      des: "Okay I found Fluffy Towel Shower Robe. Should I add to cart?",
      audio: '',
      maudio: '',
      img: br2, 
      inCart: false },
    added: false,
    list: true
  },{
    name: "Lotion",
    firstOpt: {
      name: "Nivea Nourishing Body Lotion", 
      des: "Okay I found Nivea Nourishing Body Lotion. Should I add to cart?",
      audio: '',
      maudio: '',
      img: nivea, 
      inCart: true },
    secondOpt: {
      name: "Aveeno Skin Relief Moisturizing Lotion", 
      des: "Okay I found Aveeno Skin Relief Moisturizing Lotion. Should I add to cart?",
      audio: '',
      maudio: '',
      img: aveen, 
      inCart: false },
    added: false,
    list: true
  },{
    wrongItem: { 
      rejected: false,
      firstOpt: {
      name: "Multicolor Protective KN95 Face Masks", 
      des: "Okay I found Multicolor Protective KN95 Face Masks. Should I add to cart?",
      audio: '',
      maudio: '',
      img: kmask, 
      inCart: true },
    secondOpt: {
      name: "Disposable 3 ply Surgical Face Masks", 
      des: "Okay I found Disposable 3 ply Surgical Face Masks. Should I add to cart?",
      audio: '',
      maudio: '',
      img: dismask, 
      inCart: false },
    },
    name: "Face masks",
    firstOpt: {
      name: "Green Tea Clay Face Mask", 
      des: "Okay I found Green Tea Clay Face Mask. Should I add to cart?",
      audio: '',
      maudio: '',
      img: green, 
      inCart: true },
    secondOpt: {
      name: "Charcoal Peel Off Face Mask", 
      des: "Okay I found Charcoal Peel Off Face Mask. Should I add to cart?",
      audio: '',
      maudio: '',
      img: peel, 
      inCart: false },
    added: false,
    list: true
  },{
    name: "essential oils",
    firstOpt: {
      name: "100% pure essential oils pack", 
      des: "Okay I found 100% pure essential oils pack. Should I add to cart?",
      audio: '',
      maudio: '',
      img: pure, 
      inCart: true },
    secondOpt: {
      name: "Plant Therapy Essential Oils", 
      des: "Okay I found Plant Therapy Essential Oils. Should I add to cart?",
      audio: '',
      maudio: '',
      img: plant, 
      inCart: false },
    added: false,
    list: true
  },{
    name: "hair dryer",
    firstOpt: {
      name: "Balmain Professionar Blowdryer", 
      des: "Okay I found Balmain Professionar Blowdryer. Should I add to cart?",
      audio: '',
      maudio: '',
      img: balmain, 
      inCart: true },
    secondOpt: {
      name: "Philips DryCare Hair Dryer", 
      des: "Okay I found Philips DryCare Hair Dryer. Should I add to cart?",
      audio: '',
      maudio: '',
      img: philips, 
      inCart: false },
    added: false,
    list: true
  },

];

export default cartSix;