import express from 'express';
import { create, Delete, list, update } from '../controllers/ordersController.js';

const orderRouter = express.Router();

orderRouter.post('/:id', create);
orderRouter.get('/', list);
orderRouter.get('/:id', list);
orderRouter.put('/:id', update);
orderRouter.delete('/:id', Delete)

export default orderRouter