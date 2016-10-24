const mongoose = require("mongoose");
const config   = require("../config/config");
const Item     = require("../models/item");

mongoose.connect(config.db);

const items = [
  { item: "COS T-Shirt", image: "http://www.cosstores.com/Content/ProductContent/0392122005/0392122005_5_6.jpg" },
  { item: "ACNE Jeans", image: "http://i.ebayimg.com/00/z/hEcAAOxyXp5SQFuu/$T2eC16hHJF0FFZkN,5E5BSQFuuOo)!~~_32.JPG" }
];

Item.collection.drop();

items.forEach(item => Item.create(item, (err, item) => {
  if (err) return console.log(err);
  return console.log(`${item.item} was created`);
}));
