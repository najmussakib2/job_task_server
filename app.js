import cors from 'cors';
import express from 'express';
import { productRoutes } from './products/products.routes.js';




const app = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', productRoutes);



export default app;