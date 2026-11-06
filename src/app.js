import express from 'express';
import 'dotenv/config';
import handleError from './middlewares/handleError.js';
import productRouter from './routes/productRoutes.js';

const app = express()
app.use(express.json())

app.use('/produto', productRouter)



app.use(handleError)
export default app