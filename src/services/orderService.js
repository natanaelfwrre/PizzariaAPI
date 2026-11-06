import sequelize from "../config/database.js";
import * as orderRepositories from "../repositories/orderRepositories.js";

export const createOrder = async (data, idUser) => {
    const userId = Number(idUser)

    data.total = 0
    
    const { produtos } = data
    
    if(!produtos) {
        throw new Error("Nenhum produto foi enviado para fazer seu pedido.")
    }
    
    const priceProducts = produtos.map(produto => produto.preco)
    const quantity = produtos.map(produto => produto.quantidade)

    for (let i = 0; i < priceProducts.length; i++) {
        data.total += priceProducts[i] * quantity[i]
    }

    data.produtos = produtos.map(produto => {return {product_id: produto.id, quantidade: produto.quantidade}})
    data.itemOrdeds = data.produtos

    delete data.produtos

    data.user_id = userId 

    const order = await sequelize.transaction(async (t) => {
        return await orderRepositories.create(data, t)
    })

    return data
}

export const listOrder = async (id) => {
    const ID = Number(id)
    
    if (ID) {
        const list = await orderRepositories.findById(ID)
        if (!list) {
            throw new Error("Este pedido não existe");           
        }
        return list
    } else {
        const list = await orderRepositories.findAll()
        console.log(list)
        return list
    }
    
}

export const updateOrder = async (id, data) => {
    const ID = Number(id)
    if(!ID) {
        throw new Error("Não foi possivel encontrar o pedido sem id");
    }

    const order = await productFindById(ID)

    if (!order) {
        throw new Error("Pedido inexistente");
    }

    const orderUpdated = sequelize.transaction(async (t) => {
        return await orderRepositories.update(order, data, t)
    })

    return orderUpdated
}

export const deleteOrder = async (id) => {
    const ID = Number(id)
    if(!ID) {
        throw new Error("Não foi possivel acessar o pedido sem id");
    }

    const order = await orderRepositories.findById(ID)

    if (!order) {
        throw new Error("Pedido inexistente");
    }

    await orderRepositories.deletar(order)

    return {message: "Pedido deletado com sucesso."}
}