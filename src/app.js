import express from 'express';
import 'dotenv/config';
import handleError from './middlewares/handleError.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

const app = express()
app.use(express.json())

app.use('/produto', productRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)



app.use(handleError)
export default app