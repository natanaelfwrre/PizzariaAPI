import sequelize from "../config/database.js";
import * as productRepositories from "../repositories/productRepositories.js";


export const createProduct = async (data) => {
    
    const {nome, preco} = data

    if (!nome || !preco) {
        throw new Error("Nome ou preço undefined.")
    }

    const ifExist = productRepositories.findOne({ nome })

    if (ifExist) {
        throw new Error("já existe um produto cadastrado com esse nome");
    }

    const produto = await sequelize.transaction(async (t) => {
        return await productRepositories.create(data, t)
    })

    return produto
}

export const listProduct = async (id) => {
    const ID = Number(id)
    
    if (ID) {
        const list = await productRepositories.findById(ID)
        if (!list) {
            throw new Error("Este produto não existe");           
        }
        return list
    } else {
        const list = await productRepositories.findAll()
        console.log(list)
        return list
    }
    
}

export const updatePrice = async (id, preco) => {
    if(!id) {
        throw new Error("Não foi possivel acessar o produto sem id");
    }

    const product = await productRepositories.findById(id)

    if(!product) {
        throw new Error("Produto inexistente");
    }
   
    return await productRepositories.updatePrice(preco)
}

export const updateName = async (id, nome) => {
    const ID = Number(id)
    if(!ID) {
        throw new Error("Não foi possivel acessar o produto sem id");
    }

    const product = await productRepositories.findById(ID)

    if (!product) {
        throw new Error("Produto inexistente");
    }

    return await productRepositories.updateName(nome)
}

export const updateProduct = async (id, data) => {
    if(!id) {
        throw new Error("Não foi possivel acessar o produto sem id");
    }

    const product = await productFindById(id)

    if (!product) {
        throw new Error("Produto inexistente");
    }

    const productUpdated = sequelize.transaction(async (t) => {
        return await productRepositories.update(product, data, t)
    })

    return productUpdated
}

export const deleteProduct = async (id) => {
    if(!id) {
        throw new Error("Não foi possivel acessar o produto sem id");
    }

    const product = await productRepositories.findById(id)

    if (!product) {
        throw new Error("Produto inexistente");
    }

    await productRepositories.deletar(product)

    return {message: "Produto deletado com sucesso."}
}