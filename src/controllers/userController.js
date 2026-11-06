import { createUser, deleteUser, listUser, updateUser } from "../services/userService.js"

export const create = async (req, res, next) => {
    try {       
        const item = await createUser(req.body)
        return res.status(201).json({
            message: "User cadastrado com sucesso",
            produto: item
        })
    } catch(e) {
        e.statusCode = 400
        next(e)
    }
}

export const list = async (req, res, next) => {
    try {
        const item = await listUser(req.params.id)
        return res.status(200).json(item)
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}

export const update = async (req, res, next) => {
    try {
        const item = await updateUser(req.params.id, req.body)
        return res.status(200).json(product)
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}

export const Delete =  async (req, res, next) => {
    try {
        const item = await deleteUser(req.params.id)
        return res.status(204).send()
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}