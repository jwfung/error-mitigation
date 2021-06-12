import hats from "../assets/partyhats.jpg";
import brownies from "../assets/brownies.jpg";
import balloons from "../assets/balloons.jpg"
import archery from "../assets/archery.jpg"
import bow from "../assets/bow.jpg"
import cups from "../assets/cups.jpg"

const cartTwo = [
  {
    img: hats,
    name: "party hats",
    list: true,
    added: false,
    count: 1
  },
  {
    img: brownies,
    name:"brownie mix",
    list: true,
    added: false,
    count: 1
  },
  {
    img: balloons,
    name: "balloons",
    list: true,
    added: false,
    count: 1
  },
  {
    wrongItem: {img: archery, name: "archery bow", rejected: false },
    img: bow,
    name: "bow",
    list: true,
    added: false,
    count: 1
  },
  {
    img: cups,
    name: "plastic cups",
    list: true,
    added: false,
    count: 1
  }
];

export default cartTwo;