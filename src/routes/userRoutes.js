import express from 'express';
import { create, Delete, list, update } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/', create);
userRouter.get('/', list);
userRouter.get('/:id', list);
userRouter.put('/:id', update);
userRouter.delete('/:id', Delete)

export default userRouter