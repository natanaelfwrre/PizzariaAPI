import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Orders = sequelize.define("Orders", {
    status: {
        type: DataTypes.ENUM(
            "RECEBIDO",
            "EM_PREPARO",
            "PRONTO",
            "SAIU_PARA_ENTREGA",
            "ENTREGUE",
            "CANCELADO"        
        ),
        allowNull: false,
        defaultValue: "RECEBIDO"
    },
    tipo: {
        type: DataTypes.ENUM(
            "entrega",
            "retirada"
        ),
        allowNull: false,
        defaultValue: "retirada"
    },
    total: {
        type: DataTypes.DECIMAL(2, 10),
        allowNull: false
    }
}, { timestamps: false });

export default Orders;