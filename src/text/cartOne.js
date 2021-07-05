import battery from "../assets/batteries.jpg";
import battery2 from "../assets/battery2.jpeg"
import dogFood from "../assets/dogfood.jpg";
import dogFood2 from "../assets/dogfood2.jpg";
import lactaid from "../assets/lactaid.jpeg";
import dairyfree from "../assets/dairyfree.png";
import flower from "../assets/flower.jpg";
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
    firstOpt: {name: "Duracell Batteries", img: battery, inCart: true},
    secondOpt: {name: "Energizer Batteries", img: battery2, inCart: false},
    audio: orderBattery,
    added: false,
    list: true
  },
  {
    name:"dog food",
    firstOpt: {name: "Purina Dog Food", img: dogFood, inCart: true},
    secondOpt: {name: "Cesar Dog Food", img: dogFood2, inCart: false},
    audio: orderDogFood,
    list: true,
    added: false
  },
  {
    name:"lactose-free milk",
    firstOpt: {name: "HEB lactose-free milk", img: lactaid, inCart: true},
    secondOpt: {name: "Dairy Pure: lactose-free milk", img: dairyfree, inCart: false},
    list: true,
    added: false
  },
  {
    wrongItem: { img: flower, name: "Bouquet of Flowers", rejected: false },
    name: "flour",
    audio: orderFlour,
    firstOpt: {name: "King Arthur Flour", img: flour, inCart: true},
    secondOpt: {name: "All Purpose Flour", img: flour2, inCart: false},
    list: true,
    added: false
  },
  {
    name: "13-gallon Trash Bags",
    firstOpt: {name: "Glad 13-gallon bags", img: bags, inCart: true},
    secondOpt: {name: "Kirkland 13-gallons bags", img: bags2, inCart: false},
    list: true,
    added: false
  }
];

export default cartOne;