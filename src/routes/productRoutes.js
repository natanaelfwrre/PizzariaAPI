import express from 'express';
import { create, Delete, list, update } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/', create);
productRouter.get('/', list);
productRouter.get('/:id', list);
productRouter.put('/', update);
productRouter.delete('/:id', Delete)

export default productRouter