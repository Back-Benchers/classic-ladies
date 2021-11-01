import express from 'express';
import ProductsRoute from './client/product';

const apiClient = express.Router();

new ProductsRoute(apiClient);

export default apiClient;