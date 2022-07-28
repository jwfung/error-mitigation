import peel from "../assets/peelmask.jpg";
import green from "../assets/greenmask.jpg";
import philips from "../assets/philips.jpg";
import balmain from "../assets/balmain.jpg";
import pure from "../assets/100pure.jpg";
import plant from "../assets/plant.jpg";
import dismask from "../assets/dismask.jpg";
import kmask from "../assets/Kmask.jpg";
import aveeno from "../assets/aveen.jpg";
import nivea from "../assets/nivea.jpg";
import br2 from "../assets/br2.jpg";
import br1 from "../assets/br1.jpg";


import qtowel from "../assets/audio/qtowel.mp3";
import ftowel from "../assets/audio/ftowel.mp3";
import niveaa from "../assets/audio/niveaa.mp3";
import aveenoa from "../assets/audio/aveeno.mp3";
import knmask from "../assets/audio/knmask.mp3";
import smask from "../assets/audio/smask.mp3";
import cmask from "../assets/audio/cmask.mp3";
import peelf from "../assets/audio/peelf.mp3";
import epure from "../assets/audio/epure.mp3";
import plantt from "../assets/audio/plantt.mp3";
import blow from "../assets/audio/blow.mp3";
import philip from "../assets/audio/philip.mp3";


import mqtowel from "../assets/audio/mqtowel.mp3";
import mftowel from "../assets/audio/mftowel.mp3";
import mniveaa from "../assets/audio/mniveaa.mp3";
import maveeno from "../assets/audio/maveeno.mp3";
import mknmask from "../assets/audio/mknmask.mp3";
import msmask from "../assets/audio/msmask.mp3";
import mcmask from "../assets/audio/mcmask.mp3";
import mpeelf from "../assets/audio/mpeelf.mp3";
import mepure from "../assets/audio/mepure.mp3";
import mplantt from "../assets/audio/mplantt.mp3";
import mblow from "../assets/audio/mblow.mp3";
import mphilip from "../assets/audio/mphilip.mp3";

import nqtowel from "../assets/audio/nqtowel.mp3";
import nftowel from "../assets/audio/nftowel.mp3";
import nniveaa from "../assets/audio/nniveaa.mp3";
import naveeno from "../assets/audio/naveeno.mp3";
import nknmask from "../assets/audio/nknmask.mp3";
import nsmask from "../assets/audio/nsmask.mp3";
import ncmask from "../assets/audio/ncmask.mp3";
import npeelf from "../assets/audio/npeelf.mp3";
import nepure from "../assets/audio/nepure.mp3";
import nplantt from "../assets/audio/nplantt.mp3";
import nblow from "../assets/audio/nblow.mp3";
import nphilip from "../assets/audio/nphilip.mp3";

const cartSix = [
  {
    name: "Bathrobe",
    firstOpt: {
      name: "High Quality Towel Bathrobe", 
      des: "Okay, I found High Quality Towel Bathrobe. Should I add to cart?",
      audio: qtowel,
      maudio: mqtowel,
	naudio: nqtowel,
      img: br1, 
      inCart: true },
    secondOpt: {
      name: "Fluffy Towel Shower Robe", 
      des: "Okay I found Fluffy Towel Shower Robe. Should I add to cart?",
      audio: ftowel,
      maudio: mftowel,
	naudio: nftowel,
      img: br2, 
      inCart: false },
    added: false,
    list: true
  },{
    name: "Lotion",
    firstOpt: {
      name: "Nivea Nourishing Body Lotion", 
      des: "Okay I found Nivea Nourishing Body Lotion. Should I add to cart?",
      audio: niveaa,
      maudio: mniveaa,
	    naudio: nniveaa,
      img: nivea, 
      inCart: true },
    secondOpt: {
      name: "Aveeno Skin Relief Moisturizing Lotion", 
      des: "Okay I found Aveeno Skin Relief Moisturizing Lotion. Should I add to cart?",
      audio: aveenoa,
      maudio: maveeno,
	    naudio: naveeno,
      img: aveeno, 
      inCart: false },
    added: false,
    list: true
  },{
    wrongItem: { 
      rejected: false,
      firstOpt: {
      name: "Multicolor Protective KN95 Face Masks", 
      des: "Okay I found Multicolor Protective KN95 Face Masks. Should I add to cart?",
      audio: knmask,
      maudio: mknmask,
	    naudio:nknmask,
      img: kmask, 
      inCart: true },
    secondOpt: {
      name: "Disposable 3 ply Surgical Face Masks", 
      des: "Okay I found Disposable 3 ply Surgical Face Masks. Should I add to cart?",
      audio: smask,
      maudio: msmask,
	naudio: nsmask,
      img: dismask, 
      inCart: false },
    },
    name: "Face masks",
    firstOpt: {
      name: "Green Tea Clay Face Mask", 
      des: "Okay I found Green Tea Clay Face Mask. Should I add to cart?",
      audio: cmask,
      maudio: mcmask,
	naudio: ncmask,
      img: green, 
      inCart: true },
    secondOpt: {
      name: "Charcoal Peel Off Face Mask", 
      des: "Okay I found Charcoal Peel Off Face Mask. Should I add to cart?",
      audio: peelf,
      maudio: mpeelf,
	naudio: npeelf,
      img: peel, 
      inCart: false },
    added: false,
    list: true
  },{
    name: "essential oils",
    firstOpt: {
      name: "100% pure essential oils pack", 
      des: "Okay I found 100% pure essential oils pack. Should I add to cart?",
      audio: epure,
      maudio: mepure,
	naudio: nepure,
      img: pure, 
      inCart: true },
    secondOpt: {
      name: "Plant Therapy Essential Oils", 
      des: "Okay I found Plant Therapy Essential Oils. Should I add to cart?",
      audio: plantt,
      maudio: mplantt,
	naudio: nplantt,
      img: plant, 
      inCart: false },
    added: false,
    list: true
  },{
    name: "hair dryer",
    firstOpt: {
      name: "Balmain Professionar Blowdryer", 
      des: "Okay I found Balmain Professional Blowdryer. Should I add to cart?",
      audio: blow,
      maudio: mblow,
	naudio: nblow,
      img: balmain, 
      inCart: true },
    secondOpt: {
      name: "Philips DryCare Hair Dryer", 
      des: "Okay I found Philips DryCare Hair Dryer. Should I add to cart?",
      audio: philip,
      maudio: mphilip,
	naudio: nphilip,
      img: philips, 
      inCart: false },
    added: false,
    list: true
  },

];

export default cartSix;