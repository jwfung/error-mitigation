import battery from "../assets/batteries.jpg";
import dogFood from "../assets/dogfood.jpg";
import lactaid from "../assets/lactaid.jpeg";
import flower from "../assets/flower.jpg";
import flour from "../assets/flour.jpeg";
import bags from "../assets/bags.jpg";

const cartOne = [
  {
    img: battery,
    name: "AA batteries",
    added: false,
    list: true
  },
  {
    img: dogFood,
    name:"dog food",
    list: true,
    added: false
  },
  {
    img: lactaid,
    name:"lactose-free milk",
    list: true,
    added: false
  },
  {
    wrongItem: { img: flower, name: "bouquet of flowers", rejected: false },
    img: flour,
    name: "flour",
    list: true,
    added: false
  },
  {
    img: bags,
    name: "13-gallon trash bags",
    list: true,
    added: false
  }
];

export default cartOne;