import { createOrder, deleteOrder, listOrder, updateOrder } from "../services/orderService.js"

export const create = async (req, res, next) => {
    try {       
        const item = await createOrder(req.body, req.params.id)
        return res.status(201).json(item)
    } catch(e) {
        e.statusCode = 400
        next(e)
    }
}

export const list = async (req, res, next) => {
    try {
        const item = await listOrder(req.params.id)
        return res.status(200).json(item)
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}

export const update = async (req, res, next) => {
    try {
        const item = await updateOrder(req.params.id, req.body)
        return res.status(200).json(product)
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}

export const Delete =  async (req, res, next) => {
    try {
        const item = await deleteOrder(req.params.id)
        return res.status(204).send()
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}