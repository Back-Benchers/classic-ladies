import express from 'express';
import ProductsRoute from './admin/product';

const apiAdmin = express.Router();

new ProductsRoute(apiAdmin);

export default apiAdmin;