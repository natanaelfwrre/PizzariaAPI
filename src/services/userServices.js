import sequelize from "../config/database.js";
import * as userRepositories from "../repositories/userRepositories.js";


export const createUser = async (data) => {
    
    const {nome, telefone} = data

    if (!nome || !telefone) {
        throw new Error("Nome ou telefone undefined.")
    }

    const ifExist = userRepositories.findOne({ telefone })

    if (ifExist) {
        throw new Error("já existe um usuario cadastrado com esse telefone");
    }

    const user = await sequelize.transaction(async (t) => {
        return await userRepositories.create(data, t)
    })

    return user
}

export const listUser = async (id) => {
    const ID = Number(id)
    
    if (ID) {
        const list = await userRepositories.findById(ID)
        if (!list) {
            throw new Error("Este usuario não existe");           
        }
        return list
    } else {
        const list = await userRepositories.findAll()
        console.log(list)
        return list
    }
    
}

export const updateName = async (id, nome) => {
    const ID = Number(id)
    if(!ID) {
        throw new Error("Não foi possivel encontrar o usuario sem id");
    }

    const user = await userRepositories.findById(ID)

    if (!user) {
        throw new Error("Usuario inexistente");
    }

    return await userRepositories.updateName(nome)
}

export const updateUser = async (id, data) => {
    const ID = Number(id)
    if(!ID) {
        throw new Error("Não foi possivel encontrar o usuario sem id");
    }

    const user = await productFindById(ID)

    if (!user) {
        throw new Error("Usuario inexistente");
    }

    const userUpdated = sequelize.transaction(async (t) => {
        return await userRepositories.update(user, data, t)
    })

    return userUpdated
}

export const deleteUser = async (id) => {
    const ID = Number(id)
    if(!ID) {
        throw new Error("Não foi possivel acessar o produto sem id");
    }

    const user = await userRepositories.findById(ID)

    if (!user) {
        throw new Error("Usuario inexistente");
    }

    await userRepositories.deletar(user)

    return {message: "Usuario deletado com sucesso."}
}