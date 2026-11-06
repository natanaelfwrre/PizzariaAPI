import Orders from "../models/order.js";
import itemsOrded from "../models/itemOrded.js";


// Metodos de Busca
export const findById = async (id, ifInclude) => {
    if (ifInclude) {
        const order = await Orders.findByPk(id, { include: { itemsOrded } })
        return order
    }
    const order = await Orders.findByPk(id)
    return order
}

export const findAll = async (where, ifInclude) => {
    if (where) {
        if(ifInclude) {
            const list = await Orders.findAll({ where , include: { itemsOrded } })
            return list
        }

        const list = await Orders.findAll({ where }) 
        return list
    } else {
        if (ifInclude) {
            const list = await Orders.findAll({ itemsOrded })
            return list
        }

        const list = await Orders.findAll()
        return list
    }
}

export const findOne = async (where, ifInclude) => {
    if (ifInclude) {
        const order = await User.findOne({ where , include: { itemsOrded }})
        return order
    }

    const order = await Orders.findOne({ where })
    return order
}

//Metodo de Criação
export const create = async (data, transaction) => {

    const order = await Orders.create(data, {
        include: [ itemsOrded ],
        transaction
    })

    return order
}

//Metodos de Atualização
export const update = async (user, data, transaction) => {
    const userUpdated = await user.update(data, { transaction })
    return userUpdated
}

//Metodo Deletar
export const deletar = async (order) => {
    await order.destroy()
}

