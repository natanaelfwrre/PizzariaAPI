import User from "./user.js";
import Orders from "./order.js";
import Products from "./product.js";
import itemsOrded from "./itemOrded.js";


User.hasMany(Orders);
Orders.belongsTo(User);

Orders.hasMany(itemsOrded);
itemsOrded.belongsTo(Orders);

Products.hasMany(itemsOrded);
itemsOrded.belongsTo(Products);

export default [ User, Products, Orders, itemsOrded]