import { createProduct, deleteProduct, listProduct, updateProduct } from "../services/productService.js"


export const create = async (req, res, next) => {
    try {       
        const item = await createProduct(req.body)
        return res.status(201).json({
            message: "Produto cadastrado com sucesso",
            produto: item
        })
    } catch(e) {
        e.statusCode = 400
        next(e)
    }
}

export const list = async (req, res, next) => {
    try {
        const item = await listProduct(req.params.id)
        return res.status(200).json(item)
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}

export const update = async (req, res, next) => {
    try {
        const product = await updateProduct(req.body)
        return res.status(200).json(product)
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}

export const Delete =  async (req, res, next) => {
    try {
        const product = await deleteProduct(req.params.id)
        return res.status(204).send()
    } catch (e) {
        e.statusCode = 400
        next(e)
    }
}