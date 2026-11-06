import { Where } from "sequelize/lib/utils";
import Orders from "../models/order.js";
import User from "../models/user.js";
import { where } from "sequelize";


// Metodos de Busca
export const findById = async (id, ifInclude) => {
    if (ifInclude) {
        const user = await findByPk(id, { include: { Orders } })
        return user
    }
    const user = await User.findByPk(id)
    return user
}

export const findAll = async (where, ifInclude) => {
    if (where) {
        if(ifInclude) {
            const list = await User.findAll({ where , include: { Orders } })
            return list
        }

        const list = await User.findAll({ where }) 
        return list
    } else {
        if (ifInclude) {
            const list = await User.findAll({ Orders })
            return list
        }

        const list = await User.findAll()
        return list
    }
}

export const findOne = async (where, ifInclude) => {
    if (ifInclude) {
        const user = await User.findOne({ where , include: { Orders }})
        return user
    }

    const user = await User.findOne({ where })
    return user
}

//Metodo de Criação
export const create = async (data, transaction) => {
    const user = await User.create(data, { transaction })
    return user
}

//Metodos de Atualização
export const update = async (user, data, transaction) => {
    const userUpdated = await user.update(data, { transaction })
    return userUpdated
}

export const updateName = async (user, name) => {
    user.nome = name
    await user.save()

    return user
}

//Metodo Deletar
export const deletar = async (user) => {
    await user.destroy()
}

