import express from 'express';
import ProductsRoute from './client/product';

const authClient = express.Router();

new ProductsRoute(authClient);

export default authClient;