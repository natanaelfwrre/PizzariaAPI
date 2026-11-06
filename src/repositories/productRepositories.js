import Product from "../models/product.js"

// Metodos de Busca
export const findById = async (id) => {
    const product = await Product.findByPk(id)
    return product
}

export const findAll = async (where) => {
    if (where) {
        const list = await Product.findAll(where)
        return list
    } else {
        const list = await Product.findAll()
        return list
    }
}

export const findOne = async (where) => {
    const product = await Product.findOne({ where })
}

//Metodo de Criação
export const create = async (data, transaction) => {
    const product = await Product.create(data, { transaction })
    return product
}

//Metodos de Atualização
export const update = async (product, data, transaction) => {
    const productUpdated = await product.update(data, { transaction })
    return productUpdated
}

export const updateName = async (product, name) => {
    product.nome = name
    await product.save()

    return product
}

export const updatePrice = async (product, price) => {
    product.preco = price
    await product.save()

    return product
}

//Metodo Deletar
export const deletar = async (product) => {
    await product.destroy()
}