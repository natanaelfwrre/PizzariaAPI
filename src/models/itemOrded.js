import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ItemsOrded = sequelize.define("ItemsOrded", {
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(2, 10),
        allowNull: false
    },
    observacao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false });

export default ItemsOrded;