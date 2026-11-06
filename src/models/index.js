import User from "./user.js";
import Orders from "./order.js";
import Products from "./product.js";
import itemsOrded from "./itemOrded.js";


User.hasMany(Orders, { foreignKey: "user_id" });
Orders.belongsTo(User, { foreignKey: "user_id" });

Orders.hasMany(itemsOrded, { foreignKey: "order_id"});
itemsOrded.belongsTo(Orders, { foreignKey: "order_id"});

Products.hasMany(itemsOrded, { foreignKey: "product_id" });
itemsOrded.belongsTo(Products);

export default [ User, Products, Orders, itemsOrded]